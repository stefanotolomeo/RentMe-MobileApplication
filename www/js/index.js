

function eraseLogin() {

    document.getElementById("emailLogin").value = "";
    document.getElementById("passwordLogin").value = "";
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
    console.log("dentro signUp");

    var firstname=document.getElementById("firstName").value;
    var lastname=document.getElementById("lastName").value;
    var email=document.getElementById("emailSignUp").value;

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
    console.log("fine signUp");
    eraseSignUp();
    return false;
}

function login(){
    console.log("dentro login");

    var emailLogin=document.getElementById("emailLogin").value;
    var pwLogin=document.getElementById("passwordLogin").value;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true,
        url: "http://rentme.altervista.org/Login/login.php", //Relative or absolute path to file.php file
        data: {email:emailLogin , pw:pwLogin},

        success: function(response) {
            //console.log(response);
            var userId=JSON.parse(response);

            var myId=userId[0].id;

            console.log(myId);
            //document.location.href="html/home.html?id=myId";
        },

        error: function(request,error)
        {
            console.log(request+":"+error);
        }
    });
    console.log("fine login");
    eraseLogin();
    return false;
}
