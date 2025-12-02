let containers = document.querySelectorAll('.containers');
let select = document.querySelector('select'); 
let createaccountbutton = document.querySelector('.createaccountbutton');
let createaccountcontainer =  document.querySelector('.createaccountcontainer');
let fninput = document.querySelector('.fninput'); 
let lninput = document.querySelector('.lninput');
let emailinput = document.querySelector('.emailinput');
let contactinput = document.querySelector('.contactinput');
let passwordinput1 =  document.querySelector('.passwordinput1'); 
let passwordinput2 = document.querySelector('.passwordinput2');
let inputs = document.querySelector('input');
let createaccountcontainerbutton = document.querySelector('.createaccountcontainerbutton');
let loginbutton = document.querySelector('.loginbutton');
let logincontainer = document.querySelector('.logincontainer');
let websiteloginbutton = document.querySelector('.websiteloginbutton');
let idinput = document.querySelector('.idinput');
let passwordinput = document.querySelector('.passwordinput');
let forgotpasswordbutton = document.querySelector('.forgotpasswordbutton');
let forgotpasswordcontainer = document.querySelector('.forgotpasswordcontainer');
let forgotpasswordcontainerbutton = document.querySelector('.forgotpasswordcontainerbutton');
let fpidinpput = document.querySelector('.fpidinpput');
let fppasswordinput1 = document.querySelector('.fppasswordinput1');
let fppasswordinput2 = document.querySelector('.fppasswordinput2');
let fpinputs = document.querySelector('.fpinputs');

let empty = "";

{
    function createaccountfunction() {
        containers.forEach((container) => {
            container.classList.add("hide");
        })
        createaccountcontainer.classList.remove("hide");
    }
    createaccountbutton.addEventListener("click", () => {
        return createaccountfunction();
    })
    function createaccountblankcheck() {
        if (fninput.value == empty) {
            alert("Please enter your First Name");
        }
        else if (lninput.value == empty) {
            alert("Please enter your Last Name");
        }
        else if (emailinput.value == empty) {
            alert("Please enter your E-mail Id");
        }
        else if (contactinput.value == empty) {
            alert("Please enter your Phone No.");
        }
        else if (select.value == empty) {
            alert ("Please select between E-Mail and Contact No.");
        }
        else if (passwordinput1.value == empty) {
            alert("Please enter a password of your choice");
        }
        else if (passwordinput2.value == empty) {
            alert("Please re-enter your password for verification");
        }
    }
    function createaccountpasswordCheck() {
    if(passwordinput1.value != passwordinput2.value){
        alert("Inputs of 'Password' and 'Re-Enter Password' are not same");
    }
    else{
         containers.forEach((container) => {
         container.classList.add("hide");
         })
         logincontainer.classList.remove("hide");
        }
    }
    createaccountcontainerbutton.addEventListener ('click', () => {
       if (inputs.value == empty){
        alert("Please fill all the blank sections");
       } 
       else if (fninput.value == empty || lninput.value == empty || emailinput.value == empty || contactinput.value == empty || select.value == empty || passwordinput1.value == empty || passwordinput2.value == empty) {
        return createaccountblankcheck();
       }
       else{
            return createaccountpasswordCheck(); 
       }
    }) 
}
{
    function loginfunction() {
        containers.forEach((container) => {
            container.classList.add("hide");
        })
        logincontainer.classList.remove("hide");
    }
    loginbutton.addEventListener("click", () => {
        return loginfunction();
    })
    let id = "RefurbishedTech";
    let password = "";   
    websiteloginbutton.onclick = function() {
    if(idinput.value === id && passwordinput.value === password){
        window.location.href = 'index.html';
    }
    else{
        alert("Incorrect Input");
        }
    }
}
{
    function forgotpasswordfunction() {
        containers.forEach((container) => {
            container.classList.add("hide");
        })
        forgotpasswordcontainer.classList.remove("hide");
    }
    forgotpasswordbutton.addEventListener("click", () => {
        return forgotpasswordfunction();
    })

    function forgotpasswordblankcheck() {
        if (fpidinpput.value === empty){
            alert("Please fill all the blank sections");
        }
        else if (fppasswordinput1.value === empty){
            alert("Please fill all the blank sections");
        }
        else if (fppasswordinput2.value === empty){
            alert("Please fill all the blank sections");
        }
    }
    function forgotpasswordpasswordcheck() {
        if(fppasswordinput1.value != fppasswordinput2.value){
        alert("Inputs of 'Enter New Password' and 'Re-Enter New Password' are not same");
        }
        else{
            containers.forEach((container) => {
            container.classList.add("hide");
            })
            logincontainer.classList.remove("hide");
            }
        }
    forgotpasswordcontainerbutton.addEventListener("click", () => {
        if(fpinputs.value === empty) {
            return forgotpasswordblankcheck();
        }
        else {
            return forgotpasswordpasswordcheck();
        }
    })
}

