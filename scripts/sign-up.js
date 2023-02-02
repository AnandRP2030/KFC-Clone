//      document.querySelector("#form").addEventListener("submit", registrationData);
//     var formData = JSON.parse(localStorage.getItem("registrationData")) || [];

//     function registrationData(){
//     event.preventDefault();

//     var formobj = {
//         email: form.email.value,
//         mobile: form.number.value,
//         password: form.password.value,
//         name:form.first.value,
//     }
//     if(formobj.name.length!=0 && formobj.mobile.length!=0 && formobj.email.length!=0 && formobj.password!=0){
//         formData.push(formobj)
//     }else{
//         alert("fill all required detail");
//     }
    
//      formData.push(formobj);

//     localStorage.setItem("registrationData", JSON.stringify(formData));
//     // window.location.href = "login.html";

// }
// document.querySelector("#form").addEventListener("submit");

// var referSignUp = document.querySelector("div>a");
//     referSignUp.href = ""

var formData = JSON.parse(localStorage.getItem("userData")) || [];
let submitBtn = document.querySelector("#form");
submitBtn.addEventListener("submit", function (e){


    e.preventDefault()
    // alert ('d')
    
    let userName = document.querySelector("#first").value;
    let Email = document.querySelector("#email").value;
    let phonenumber = document.querySelector("#number").value;
    let password = document.querySelector("#password").value;
    // console.log(userName,Email,phonenumber,password);

    alert(userName)
    let nameWarn = document.querySelector(".name-warning");
    let emailWarn = document.querySelector(".email-warning");
    let phonenumberWarn = document.querySelector(".phonenumber-warning");
    let passwordWarn = document.querySelector(".password-warning");
    if (!userName){
        nameWarn.classList.add("display-block");
    }else {
        nameWarn.classList.remove("display-block");
    }

    if (!Email){
        emailWarn.classList.add("display-block");
    }else {
        emailWarn.classList.remove("display-block")
    }

    if (!phonenumber){
        phonenumberWarn.classList.add("display-block");
    }else {
        phonenumberWarn.classList.remove("display-block");
    }

    if (!password){
        passwordWarn.classList.add("display-block");
    }else {
        passwordWarn.classList.remove("display-block");
    }


    if (userName && Email && phonenumber && password){
        let userData = new userConstructor (userName, Email, phonenumber, password)
        localStorage.setItem("user", JSON.stringify(userData));

        // changeMap(cityName);
    }
    
})
function userConstructor (userName, Email, phonenumber, password){
    this.userName = userName;
    this.Email = Email;
    this.phonenumber = phonenumber;
    this.password = password;
  }
  formData.push(userConstructor);
//   window.location.href = "login.html";
