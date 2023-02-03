
var formData = JSON.parse(localStorage.getItem("userData")) || [];

let form = document.querySelector("#form-id");

form.addEventListener("submit", function (e){
    e.preventDefault()
    
    let userName = document.querySelector(".username").value;
    let place = document.querySelector(".place-input").value;
    let email = document.querySelector(".email-input").value;
    let pass = document.querySelector("#signin-password").value;
    let confirmPass = document.querySelector("#confirm-password").value;




    let userNameWarn = document.querySelector(".username-warning");
    let placeWarn = document.querySelector(".place-warning");
    let emailWarn = document.querySelector(".email-warning");
    let passWarn = document.querySelector(".pass-warning");
    let confirmPassWarn = document.querySelector(".confirm-warning");
   
    console.log(userName, place, email, pass, confirmPass)
    

    if (!userName){
        userNameWarn.classList.add("display-block");
    }else {
        userNameWarn.classList.remove("display-block");
    }

    if (!place){
        placeWarn.classList.add("display-block");
    }else {
        placeWarn.classList.remove("display-block")
    }

   
    if (!email){
        emailWarn.classList.add("display-block");
    }else {
        emailWarn.classList.remove("display-block")
    }

    if (!pass){
        passWarn.classList.add("display-block");
    }else {
        passWarn.classList.remove("display-block");
    }

    


    // if (!password){
    //     passwordWarn.classList.add("display-block");
    // }else {
    //     passwordWarn.classList.remove("display-block");
    // }


    // if (userName && Email && phonenumber && password){
    //     let userData = new userConstructor (userName, Email, phonenumber, password)
    //     localStorage.setItem("user", JSON.stringify(userData));

    //     // changeMap(cityName);
    // }
    
})

let confirmInput = document.querySelector("#confirm-password");
confirmInput.addEventListener("input", function (){


    let pass = document.querySelector("#signin-password").value;
    let confirmPassWarn = document.querySelector(".confirm-warning");
    let confirmPass = document.querySelector("#confirm-password").value;

    if (pass){

        if (pass != confirmPass){
            confirmPassWarn.classList.add("display-block");
        }else {
            confirmPassWarn.classList.remove("display-block");
            
        }
    }
}) 


function userConstructor (userName, Email, phonenumber, password){
    this.userName = userName;
    this.Email = Email;
    this.phonenumber = phonenumber;
    this.password = password;
  }
  formData.push(userConstructor);

 
