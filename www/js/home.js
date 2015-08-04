
function getUrlParameters(parameter, staticURL, decode){
   /*
    Function: getUrlParameters
    Description: Get the value of URL parameters either from
                 current URL or static URL
    Author: Tirumal
    URL: www.code-tricks.com
   */
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

var count=0;
var comparsoPrimo=true;

function loadStuff(){
    $(".selected").css("color","blue");

    $("#openSettingMenu").click(function() {

        $(".settingList").removeClass("settingListBolder");

        if(count%2==0){
            $('.settingMenu').animate({ marginLeft: '-15%' , opacity: 1 }, 500);
            $(".centralContent").fadeTo( "slow" , 0.2);
            $("#bottomNavbar").fadeTo( "slow" , 0);
            $("#bottomNavbar").addClass("notClickable");

            comparsoPrimo=true;

        }
        else{
            $('.settingMenu').animate({ marginLeft: '1em' , opacity: 1 }, 1000);
            $( ".centralContent" ).fadeTo( "slow" , 1);
            $( "#bottomNavbar" ).fadeTo( "slow" , 1);
            $("#bottomNavbar").removeClass("notClickable");


            comparsoPrimo=false;
        }

        count++;
    });

    if(comparsoPrimo==true){
            $(".centralContent").click(function (){
                $('.settingMenu').animate({ marginLeft: '1em' , opacity: 1 }, 1000);
                $( ".centralContent" ).fadeTo( "slow" , 1);
                $( "#bottomNavbar" ).fadeTo( "slow" , 1);
                $("#bottomNavbar").removeClass("notClickable");
                count++;
                comparsoPrimo=false;
            });

            //******** MOSTRA IL SOTTOMENU DI "DATI"  **********
            $("#datiSetting").click(function(){

                // RIMUOVE GLI EVIDENZIATI ED EVIDENZIA IL CLICCATO
                $(".settingList").removeClass("settingListBolder");
                $(this).addClass("settingListBolder");

                // TOGLIE TUTTI I SOTTOMENU
                $(".child").css("display","none");

                // MOSTRA IL CORRETTO SOTTOMENU
                $(".childDati").css("display","inline-block");

                //ANIMAZIONE
                $('.settingMenu').animate({ marginLeft: '-40%' , opacity: 1 }, 500);
            });


            //******** MOSTRA IL SOTTOMENU DI "IMPOSTAZIONI"  **********
            $("#impostazioniSetting").click(function(){

                // RIMUOVE GLI EVIDENZIATI ED EVIDENZIA IL CLICCATO
                $(".settingList").removeClass("settingListBolder");
                $(this).addClass("settingListBolder");

                // TOGLIE TUTTI I SOTTOMENU
                $(".child").css("display","none");

                // MOSTRA IL CORRETTO SOTTOMENU
                $(".childImpostazioni").css("display","inline-block");

                // ANIMAZIONE
                $('.settingMenu').animate({ marginLeft: '-40%' , opacity: 1 }, 500);
            });

            //******** MOSTRA IL SOTTOMENU DI "LINGUA"  **********
            $("#linguaSetting").click(function(){

                // RIMUOVE GLI EVIDENZIATI ED EVIDENZIA IL CLICCATO
                $(".settingList").removeClass("settingListBolder");
                $(this).addClass("settingListBolder");

                // TOGLIE TUTTI I SOTTOMENU
                $(".child").css("display","none");

                // MOSTRA IL CORRETTO SOTTOMENU
                $(".childLingua").css("display","inline-block");

                // ANIMAZIONE
                $('.settingMenu').animate({ marginLeft: '-40%' , opacity: 1 }, 500);
            });

            //******** MOSTRA IL SOTTOMENU DI "INFO"  **********
            $("#infoSetting").click(function(){

                // RIMUOVE GLI EVIDENZIATI ED EVIDENZIA IL CLICCATO
                $(".settingList").removeClass("settingListBolder");
                $(this).addClass("settingListBolder");

                // TOGLIE TUTTI I SOTTOMENU
                $(".child").css("display","none");

                // MOSTRA IL CORRETTO SOTTOMENU
                $(".childInfo").css("display","inline-block");

                // ANIMAZIONE
                $('.settingMenu').animate({ marginLeft: '-40%' , opacity: 1 }, 500);
            });
    }
        //TESTO MODIFICABILE :)
//            $('button').click(function(){
//    var $div=$('div'), isEditable=$div.is('.editable');
//    $('div').prop('contenteditable',!isEditable).toggleClass('editable')
}


    // Non riesco a passare il parametro da index.js
    // Per il momento non lo passo e fisso io un valore per fare delle prove
    //var idClient =  getUrlParameters("id", "", true);
/*
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













