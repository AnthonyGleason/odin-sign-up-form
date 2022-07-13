const passwordDiv = document.querySelector("#password");
const passwordConfirmDiv = document.querySelector('#passwordConfirm');
const button = document.querySelector(".create-acc-button");
const formRightDiv = document.querySelector(".form-right");
const passwordElementDiv = document.querySelector("#password-div");
const passwordElementConfirmDiv = document.querySelector("#password-confirm-div");


let validatePassword = function (){
    let passwordValue = passwordDiv.value;
    let passwordConfirmValue = passwordConfirmDiv.value;
    if (passwordValue!=passwordConfirmValue){

        newDiv=document.createElement("div");
        newDiv.style.color="red";
        newDiv.textContent="* Passwords do not match!";
        passwordElementDiv.appendChild(newDiv);

        newDiv=document.createElement("div");
        newDiv.style.color="red";
        newDiv.textContent="* Passwords do not match!";
        passwordElementConfirmDiv.appendChild(newDiv);
        return false;
    }
    return true;
}
