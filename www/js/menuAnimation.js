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

            $("#bottomNavbar").css("display","none");
            $("#duplicatedBottomNavbar").css("display","block");

            comparsoPrimo=true;

        }
        else{
            $('.settingMenu').animate({ marginLeft: '1em' , opacity: 1 }, 1000);
            $( ".centralContent" ).fadeTo( "slow" , 1);
            $( "#duplicatedBottomNavbar" ).fadeTo( "slow" , 1);

            $("#bottomNavbar").css("display","block");
            $("#duplicatedBottomNavbar").css("display","none");

            comparsoPrimo=false;
        }

        count++;
    });

    if(comparsoPrimo==true){
            // Se c'è il menu e schiaccio su centralContent:
            $(".centralContent").click(function (){
                $('.settingMenu').animate({ marginLeft: '1em' , opacity: 1 }, 1000);
                $( ".centralContent" ).fadeTo( "slow" , 1);
                //$( "#bottomNavbar" ).fadeTo( "slow" , 1);
                //$(".barElement").removeClass("notClickable");

                $("#bottomNavbar").css("display","block");
                $("#duplicatedBottomNavbar").css("display","none");

                count++;
                comparsoPrimo=false;
            });

            $("#duplicatedBottomNavbar").click(function (){
                // Se c'è il menu e schiaccio sulla duplicated bottom navbar:
                $('.settingMenu').animate({ marginLeft: '1em' , opacity: 1 }, 1000);
                $( ".centralContent" ).fadeTo( "slow" , 1);

                $("#bottomNavbar").css("display","block");
                $("#duplicatedBottomNavbar").css("display","none");
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

        /*TESTO MODIFICABILE :)
            $('button').click(function(){
            var $div=$('div'), isEditable=$div.is('.editable');
            $('div').prop('contenteditable',!isEditable).toggleClass('editable')
*/
}
