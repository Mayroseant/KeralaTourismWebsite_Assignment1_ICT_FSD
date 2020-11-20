var email = document.getElementById("inputEmail4");
const pwd = document.getElementById("inputPassword4");
var ph_no = document.getElementById("inputPhone");

// Upon Submission of the form
function validate(){
    let regexp_email = /^([a-zA-Z0-9\.\-])+\@([a-zA-Z0-9])+\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexp_pwd = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let regexp_phone = /^([0-9]{3})(\.\-)?([0-9]{3})(\.\-)?([0-9]{4})$/;

    if(email.value.trim() == "" || pwd.value.trim() == "" || ph_no.value.trim() == ""){
        alert("Email, Password and Phone Number Fields cannot be empty!");
        return false;
    }
    else if(regexp_email.test(email.value) && regexp_pwd.test(pwd.value) && regexp_phone.test(ph_no.value)){
        return true;
    }
    else{
        alert("Credentials not proper!");
        return false;
    }
}

// Validating Email
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

// Validating Password
function valid_pwd(){
    const indicator = document.querySelector(".indicator");
    const weak = document.querySelector(".weak");
    const medium = document.querySelector(".medium");
    const strong = document.querySelector(".strong");
    const text = document.querySelector(".text");
    const showBtn = document.querySelector(".showBtn");
    
    let regexp_weak = /[a-z]+/;
    let regexp_medium = /\d+/;
    let regexp_strong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]+/;

    if(pwd.value != ""){
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if(pwd.value.length <= 3 && (pwd.value.match(regexp_weak) || pwd.value.match(regexp_medium) || pwd.value.match(regexp_strong)))no = 1;
        if(pwd.value.length >= 8 && ((pwd.value.match(regexp_weak) && pwd.value.match(regexp_medium)) || (pwd.value.match(regexp_medium) && pwd.value.match(regexp_strong)) || (pwd.value.match(regexp_weak) && pwd.value.match(regexp_strong))))no = 2;
        if(pwd.value.length >= 8 && pwd.value.match(regexp_weak) && pwd.value.match(regexp_medium) && pwd.value.match(regexp_strong))no = 3;
        if(no == 1){
            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "Minimum 8 characters - atleast one uppercase, lowercase, number and special character!"
            text.classList.add("weak");
            pwd.style.border= "3px solid red";
        }
        if(no == 2){
            medium.classList.add("active");
            text.textContent = "Minimum 8 characters - atleast one uppercase, lowercase, number and special character!"
            text.classList.add("medium");
            pwd.style.border= "3px solid orange";
        }
        else{
            medium.classList.remove("active");
            text.classList.remove("medium");
        }
        if(no == 3){
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Strong!"
            text.classList.add("strong");
            pwd.style.border= "3px solid green";
        }
        else{
            strong.classList.remove("active");
            text.classList.remove("strong");
        }
        showBtn.style.display = "block";
        showBtn.onclick = function(){
            if(pwd.type == "password"){
                pwd.type = "text";
                icon.className = 'fa fa-eye';
            }
            else{
                pwd.type = "password";
                icon.className = 'fa fa-eye-slash';
            }
        }
    }
    else{
        indicator.style.display = "none";
        text.style.display = "none";
        showBtn.style.display = "none";
        pwd.style.border = "none";
    }
}

// Validating Phone Number
function valid_phone(){
    let regexp_phone = /^([0-9]{3})(\.\-)?([0-9]{3})(\.\-)?([0-9]{4})$/;

    if(regexp_phone.test(ph_no.value)){
        ph_no.style.border= "3px solid green";
        p2.innerHTML = "Valid!";
        p2.style.color = "green";
    }
    else{
        ph_no.style.border= "3px solid red";
        p2.innerHTML = "Invalid!";
        p2.style.color = "red";
    }
}