/*
function getUrlParameters(parameter, staticURL, decode){

//    Function: getUrlParameters
//    Description: Get the value of URL parameters either from
//                 current URL or static URL
//    Author: Tirumal
//    URL: www.code-tricks.com

   var currLocation = (staticURL.length)? staticURL : window.location.search,
       parArr = currLocation.split("?")[1].split("&"),
       returnBool = true;

   for(var i = 0; i < parArr.length; i++){
        parr = parArr[i].split("=");
        if(parr[0] == parameter){
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true;
        }else{
            returnBool = false;
        }
   }

   if(!returnBool) return false;
}

$(document).ready(loadStuff);


function loadStuff(){

    // Non riesco a passare il parametro da index.js
    // Per il momento non lo passo e fisso io un valore per fare delle prove
    //var idClient =  getUrlParameters("id", "", true);

    var idClient=3;
    //console.log(idClient);
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://rentme.altervista.org/Home/home.php", //Relative or absolute path to file.php file
     data: { 'idServer' : idClient},
        success: function(response) {
                console.log(response);
                //console.log(JSON.parse(response));
                //var location=JSON.parse(response);
                //$(".courseName").html(location[0].nome);


        },
        error: function(request,error)
        {
            alert(error);
            console.log("Error");
        }
    });

    */


function changeNotice(){

}

$(document).ready(start);

function start(){
    //var myVar = setInterval(function () {changeNotice()}, 2000);


    $(".pageTitleDiv").click(function(){
        //$(".myContent").fadeOut("slow");

        $(".c1").animate({
            marginLeft: '-18em' ,
            opacity:0
        }, 500);
        //$(".c1").fadeTo("slow",0);
        $(".c2").fadeTo("slow",1);


    });

}








