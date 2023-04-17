function validateForm() {
    let x = document.getElementById("name").value;
    if (x == "") {
        alert("Name must be filled out");
    }

    let y = document.getElementById("phone").value;
    if (y == "") {
        alert("Phone number must be filled out");
    }

    let z = document.getElementById("email").value;
    if (z == "") {
        alert("Email must be filled out");
    }
}

function phoneCheck(){
    let y = document.getElementById("phone").value;
    if(y == ""){
        return false;
    }
    if(y.length != 10 || y.length != 11){
        alert("Phone number must be 10 or 11 digits");
    }
}

function mailCheck(){
    let z = document.getElementById("email").value;
    if(z == ""){
        return false;
    }
    if(z.indexOf("@") == -1){
        alert("Email must contain @");
    }
}

document.getElementById("submit-btn").addEventListener("click", validateForm);
document.getElementById("submit-btn").addEventListener("click", phoneCheck);
document.getElementById("submit-btn").addEventListener("click", mailCheck);


