$(document).ready(login);
//$(document).domain = 'www.facebook.com';
function login(){
    console.log("dentro login");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true,
        url: "http://rentme.altervista.org/1353/index.php", //Relative or absolute path to file.php file
        //url : "http://hypermediabiggym.altervista.org/Location/getLocation.php",
        //data: {email:emailLogin , pw:pwLogin},
        success: function(response) {
            console.log("dentro ajax");
            console.log(response);
            var loca=JSON.parse(response);
            $(".prova").html(loca[0].prova);

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
   // */
    console.log("fine login");
    return false;
}


