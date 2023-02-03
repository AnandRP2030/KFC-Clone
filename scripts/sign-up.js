
var formData = JSON.parse(localStorage.getItem("userData")) || [];

let form = document.querySelector("#form-id");
submitBtn.addEventListener("submit", function (e){


    e.preventDefault()
    
    let userName = document.querySelector("#first").value;
    let Email = document.querySelector("#email").value;
    let phonenumber = document.querySelector("#number").value;
    let password = document.querySelector("#password").value;

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
