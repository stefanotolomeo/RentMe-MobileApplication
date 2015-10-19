$(document).ready(function(){
    $("#loginForm").submit(function(e) {
    e.preventDefault();
    });

    $("#registrationForm").submit(function(e) {
    e.preventDefault();
});
});


// NON TOCCARE
function signUp(){
    console.log("dentro signUp");

    var firstname=document.getElementById("name").value;
    var lastname=document.getElementById("surname").value;
    var email=document.getElementById("email").value;
    var registrationPassword=document.getElementById("password1").value;

    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(registrationPassword);

    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://rentme.altervista.org/Registrazione/registrazione.php", //Relative or absolute path to file.php file
        data: {name:firstname , surname:lastname , email:email, password:registrationPassword},

        success: function(response) {
            console.log(response);
        },

        error: function(request,error)
        {
            console.log(request+":"+error);
        }
    });
    console.log("fine signUp");
    //eraseSignUp();
    return false;
}


// NON TOCCARE
function login(){
    console.log("dentro login");
    //alert("start");

    var myEmail=document.getElementById("emailLogin").value;
    var myPassword=document.getElementById("pwLogin").value;

    console.log(myEmail);
    console.log(myPassword);

    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://rentme.altervista.org/Login/login.php", //Relative or absolute path to file.php file
        data: {email:myEmail , pw:myPassword},

        success: function(response) {
            console.log(response);

            var risposta=JSON.parse(response);


            //se login corretto
            if(risposta[0]==true){
                console.log("user "+risposta[1].id+": login riuscito");
                //setTimeout(function(){window.location.href='/html/home.html'},10);
                document.location.href="html/home.html";
            }
            else{
                console.log("username o password errati");
            }


        },

        error: function(request,error)
        {
            console.log(request+":"+error);
            //alert("Email o password errati");
        }
    });
    console.log("fine login");
    //return false;
}


function fbLogin(){

    console.log("start FB login");
    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://rentme.altervista.org/OLD/Images/scriptFB.php", //Relative or absolute path to file.php file
        data: {email:"rentme@dima.com" , password:"qwerty"},

        success: function(response) {
            console.log(response);

            var risposta=JSON.parse(response);


            console.log(risposta[0]);
            console.log(risposta[1]);



        },

        error: function(request,error)
        {
            console.log(request+":"+error);
            //alert("Email o password errati");
        }
    });
    console.log("end FB login");
    //return false;
}

function provaKrizna(){

    console.log("start KRIZNA");
    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://rentme.altervista.org/OLD/Images/scriptFB.php", //Relative or absolute path to file.php file
        //data: {email:"rentme@dima.com" , password:"qwerty"},

        success: function(response) {
            console.log(response);

            var risposta=JSON.parse(response);


            console.log(risposta[0]);
            console.log(risposta[1]);
            console.log(risposta[2]);


        },

        error: function(request,error)
        {
            console.log(request+":"+error);
            //alert("Email o password errati");
        }
    });
    console.log("end KRIZNA");
}

