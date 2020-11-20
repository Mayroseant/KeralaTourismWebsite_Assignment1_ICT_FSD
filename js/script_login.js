var email = document.getElementById("formGroupExampleInput");
var pwd = document.getElementById("formGroupExampleInput2");

function validate(){
    let regexp_email = /^([a-zA-Z0-9\.\-])+\@([a-zA-Z0-9])+\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexp_pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    
    if(email.value.trim() == "" || pwd.value.trim() == ""){
        alert("Fields cannot be empty!");
        return false;
    }
    else if(regexp_email.test(email.value) && regexp_pwd.test(pwd.value)){
        return true;
    }
    else{
        alert("Credentials not proper!");
        return false;
    }
}
function valid_email(){
    let regexp = /^([a-zA-Z0-9\.\-])+\@([a-zA-Z0-9])+\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        email.style.border= "3px solid green";
        p1.innerHTML = "Valid!";
        p1.style.color = "green";
    }
    else{
        email.style.border= "3px solid red";
        p1.innerHTML = "Invalid!";
        p1.style.color = "red";
    }
}
function valid_pwd(){
    let regexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(regexp.test(pwd.value)){
        pwd.style.border= "3px solid green";
        p2.innerHTML = "Satisfied!";
        p2.style.color = "green";
    }
    else{
        pwd.style.border= "3px solid red";
        p2.innerHTML = "Minimum 8 characters - atleast one uppercase, lowercase, number and special character!";
        p2.style.color = "red";  
    }
}