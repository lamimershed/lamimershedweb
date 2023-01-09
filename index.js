
function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "nav-menu") {
    x.className += " responsive";

  } else {
    x.className = "nav-menu";
  }
}
const lami= ()=>{
    //the shrinkHeader variable is where you tell the scroll effect to start.
    var shrinkHeader = 70;
     (window).scroll(function() {
       var scroll = getCurrentScroll();
         if ( scroll >= shrinkHeader ) {
              ('.nav').addClass('.smaller');
           }
           else {
               ('.nav').removeClass('.smaller');
           }
     });
   function getCurrentScroll() {
       return window.pageYOffset || document.documentElement.scrollTop;
       }
   }

lami();



    // ajax loading

    $("#submit-form").submit((e)=>{
      e.preventDefault()
      if(resultName()&&formvalidation()&&resultEmail()&&messageResult()){
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbzp4UiHI05gCvNwXmGPefN9RJvffAosXTVU5vxikzWrZ15pgucyWpW2RAK0JbyRleXwiA/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              alert("Form submitted successfully")
              window.location.reload()
              //window.location.href="https://google.com"
          },
          error:function (err){
              alert("Something Error")

          }
      })
     }
     else{
      resultName();
      resultEmail();
      formvalidation();
      messageResult();
     }
    })



// form validation

function formvalidation() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("contact").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 500000 || x > 9999999999) {
    text = "Input not valid";
    document.getElementById("number-error-display").innerHTML = text;
  } else {
    text = "";
    document.getElementById("number-error-display").innerHTML = text;    
  }
}


    


    function resultName() {
      var name = document.getElementById("formName").value;
      var nameTm = null;
      nameTm = name.trim();
      var expName = /^[!@#$%^&()_+\-=\[\]{};'+"\\|,.<>\/?]+[A-Za-z]*$/ ;
      document.getElementById("formName").value = nameTm;
      
      if (nameTm == "" || name == null || !isNaN(nameTm[0]) || nameTm.match(expName)) {
          document.getElementById("name").innerHTML = "enter a valid name";
          return false;
      } else {
          document.getElementById("name").innerHTML = "";
          return true;
      }
  }
  function resultEmail() {
      var email = document.getElementById("form-email").value
      var expEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var emailCheck = expEmail.test(email);
      if (emailCheck) {
          document.getElementById("email-error").innerHTML = "";
          return true;
      } else {
          document.getElementById("email-error").innerHTML = "enter a valid email";
          return false;
      }
  }

  function messageResult(){
    let userMessage = document.getElementById("lamimer").value;
    let userMessageTm=null;
    userMessageTm = userMessage.trim();
    let userMessageTmLength=userMessageTm.length;
    if(userMessageTm=="" || userMessageTmLength<=5){
      let text ="enter a valid message"
      document.getElementById("messageError").innerHTML=text;
      return false;
    }
    else{
      text="";
      document.getElementById("messageError").innerHTML=text;
      return true;
    }
  }
  

function mers(){
  alert("lami")
}