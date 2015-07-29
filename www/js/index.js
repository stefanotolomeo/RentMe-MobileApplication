$(document).ready(signUp);

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


function signUp(){
    console.log("dentro");
    $("#confirmButton").on("click",function(){
        var firstname=$(".firstName").val();
        var lastname=$(".lastName").val();
        var email=$(".email").val();

        $.ajax({
            method: "POST",
            //dataType: "json", //type of data
            crossDomain: true,
            url: "http://rentme.altervista.org/Registrazione/registrazione.php", //Relative or absolute path to file.php file
            data: {name:firstname , surname:lastname , email:email},

            success: function(response) {
                console.log(response);
            },
            error: function(request,error)
            {
                console.log(request+":"+error);
            }
        });
        return false;
    });
}
