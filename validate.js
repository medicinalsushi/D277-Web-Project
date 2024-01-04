let emailValid = false;
let emailConfWidget = document.querySelector("#emailConf");

emailConfWidget.addEventListener("input", checkEmail) 

function checkEmail() {
    let emailWidget = document.querySelector("#email");
    let email1 = emailWidget.value;
    let email2 = emailConfWidget.value;
    emailValid = email1 == email2;
}

let formWidget = document.querySelector("#myForm");
formWidget.addEventListener("submit", checkForm);

function checkForm(event) {
    if (!emailValid)
    event.preventDefault;
}
