//$(document).ready(login);
//$(document).domain = 'www.facebook.com';

function login(){
    console.log("dentro login");
    /*document.location.href = "https://www.facebook.com/v2.2/dialog/oauth?client_id=867006893383189&state=8698fb4be8bc5683ca76da1c0a12c3b1&sdk=php-sdk-4.0.15&scope=email&redirect_uri=http://www.google.com";*/

   ///*
   $.ajax({
        //method: "GET",
        dataType: "text", //type of data
        //jsonp: 'jsonp',
        crossDomain: true,
        url: "http://rentme.altervista.org/1353/fbconfig.php", //Relative or absolute path to file.php file
        //url : "http://hypermediabiggym.altervista.org/Location/getLocation.php",
        //data: {email:emailLogin , pw:pwLogin},
        success: function(response) {
            console.log("dentro ajax");

            //window.location.href = "http://www.google.com";//response + "&redirect_uri=http://127.0.0.1:41103/www/index.html";
             console.log(response);
            document.location.href =response;
            //var loca=JSON.parse(response);

            //$(".prova").html(loca[0].prova);

        /*  var fbId=user[0].id;
            var fbFirst=user[0].first;
            var fbLast=user[0].last;
            var fbMail=user[0].mail;
        */
        },
        error: function(request,error)
        {
            console.log("ERRORE");
            console.log(request+":"+error);
        }
    });
    //*/
    console.log("fine login");
    return false;
}


