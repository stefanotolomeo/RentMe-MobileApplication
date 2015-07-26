function eraseLogin() {

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

function eraseSignUp(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("emailSignUp").value = "";
    document.getElementById("passwordSignUp").value = "";
    document.getElementById("password2SignUp").value = "";
    document.getElementById("male").checked=true;
    document.getElementById("female").checked=false;
}

function check(){
    var p1=document.getElementById("passwordSignUp").value;
    var p2=document.getElementById("password2SignUp").value;

    var name=document.getElementById("firstName").value;
    var surname=document.getElementById("lastName").value;
    var email=document.getElementById("emailSignUp").value;

    if(name==""){
        alert("scrivi nome");
    }


}
