
var count=0;
var menuVisible=false;
var opened=false;

$(document).ready(loadStuff);



function loadStuff(){
    $(".selected").css("color","blue");

    $(".a").click(function(){
        if(opened==false && menuVisible==false){
            openDiv(this);
            disappearOther(this);

        }

        $(this).siblings().find("#contactButton").click(function(){
            if (opened==true && menuVisible==false){
                console.log("contatta");
            }
        });

        $(this).siblings().find("#closeButton").click(function(){
            if(opened==true && menuVisible==false){
                closeDiv(this);
                appearOther(this);
            }
        });
    });

    $("#openSettingMenu").click(function() {
        $(".settingList").removeClass("settingListBolder");

        if(count%2==0){
            menuOpen();
        }
        else{
            menuClose();
        }
    });

    // Se schiaccio su centralContent:
    $(".centralContent").click(function (){

        if(menuVisible==true){
            console.log("cliccato centralContent")
            menuClose();
        }
    });

    // Se schiaccio sulla duplicated bottom navbar:
    $("#duplicatedBottomNavbar").click(function (){
        if(menuVisible==true){
            console.log("cliccato duplicated")
            menuClose();
        }
    });

    //******** MOSTRA IL SOTTOMENU DI "DATI"  **********
    $("#datiSetting").click(function(){
        if(menuVisible==true){
            // RIMUOVE GLI EVIDENZIATI ED EVIDENZIA IL CLICCATO
                $(".settingList").removeClass("settingListBolder");
                $(this).addClass("settingListBolder");

            // TOGLIE TUTTI I SOTTOMENU
                $(".child").css("display","none");

            // MOSTRA IL CORRETTO SOTTOMENU
                $(".childDati").css("display","inline-block");

            //ANIMAZIONE
                $('.settingMenu').animate({ marginLeft: '-40%' , opacity: 1 }, 500);
        }
    });

    //******** MOSTRA IL SOTTOMENU DI "IMPOSTAZIONI"  **********
    $("#impostazioniSetting").click(function(){
        if(menuVisible==true){
            // RIMUOVE GLI EVIDENZIATI ED EVIDENZIA IL CLICCATO
                $(".settingList").removeClass("settingListBolder");
                $(this).addClass("settingListBolder");

            // TOGLIE TUTTI I SOTTOMENU
                $(".child").css("display","none");

            // MOSTRA IL CORRETTO SOTTOMENU
                $(".childImpostazioni").css("display","inline-block");

            // ANIMAZIONE
                $('.settingMenu').animate({ marginLeft: '-40%' , opacity: 1 }, 500);
        }
    });

    //******** MOSTRA IL SOTTOMENU DI "LINGUA"  **********
    $("#linguaSetting").click(function(){
        if(menuVisible==true){
            // RIMUOVE GLI EVIDENZIATI ED EVIDENZIA IL CLICCATO
                $(".settingList").removeClass("settingListBolder");
                $(this).addClass("settingListBolder");

            // TOGLIE TUTTI I SOTTOMENU
                $(".child").css("display","none");

            // MOSTRA IL CORRETTO SOTTOMENU
                $(".childLingua").css("display","inline-block");

            // ANIMAZIONE
                $('.settingMenu').animate({ marginLeft: '-40%' , opacity: 1 }, 500);
        }
    });

    //******** MOSTRA IL SOTTOMENU DI "INFO"  **********
    $("#infoSetting").click(function(){
        if(menuVisible==true){
            // RIMUOVE GLI EVIDENZIATI ED EVIDENZIA IL CLICCATO
                $(".settingList").removeClass("settingListBolder");
                $(this).addClass("settingListBolder");

            // TOGLIE TUTTI I SOTTOMENU
                $(".child").css("display","none");

            // MOSTRA IL CORRETTO SOTTOMENU
                $(".childInfo").css("display","inline-block");

            // ANIMAZIONE
                $('.settingMenu').animate({ marginLeft: '-40%' , opacity: 1 }, 500);
        }
    });

}

function menuOpen(){
    $('.settingMenu').animate({ marginLeft: '-15%' , opacity: 1 }, 500);

    $(".centralContent").fadeTo( "slow" , 0.2);

    // Mostra la duplicated navbar e nasconde quella vera
    $("#bottomNavbar").css("display","none");
    $("#duplicatedBottomNavbar").css("display","block");

    count++;
    menuVisible=true;
    console.log("menu aperto");
}

function menuClose(){
    $('.settingMenu').animate({ marginLeft: '1em' , opacity: 1 }, 1000);

    $( ".centralContent" ).fadeTo( "slow" , 1);
    $( "#duplicatedBottomNavbar" ).fadeTo( "slow" , 1);

    $("#bottomNavbar").css("display","block");
    $("#duplicatedBottomNavbar").css("display","none");

    count++;
    menuVisible=false;

    console.log("menu chiuso");

}

/*
function action(){
    $(".a").click(function(){
        if(opened==false){
            openDiv(this);
            disappearOther(this);

        }

        $(this).siblings().find("#contactButton").click(function(){
            if (opened==true){
                console.log("contatta");
            }
        });

        $(this).siblings().find("#closeButton").click(function(){
            if(opened==true){
                closeDiv(this);
                appearOther(this);
            }
        });*/

/*var prevDiv=$(this).siblings().find("#closeButton");
        $(".a").not(this).click(function(){
            //console.log("altro div");
            if(opened==true){
                console.log("chiudi div");
                //closeDiv(prevDiv);
                //return;
            }
        });
    });
}*/

function openDiv(x){

            //Animazione su ".preferRow"
            $(x).parent().animate({
               height: '+=55%'
            });

            //Animazione su ".b"
            $(x).siblings().animate({
               height: '+=65%'
            });

            opened=true;

            $(x).siblings().css("display","block");

}

function closeDiv(y){

        $(y).closest(".b").css("display","none");

        $(y).closest(".preferRow").animate({
            height: '-=55%'
        });

        $(y).closest(".b").animate({
            height: '-=65%'
        });

        opened=false;

}

function disappearOther(aDiv){
    var allOtherDiv1=$(".preferRow").not($(aDiv).closest(".preferRow"));

    allOtherDiv1.fadeTo("slow", 0.3);
    allOtherDiv1.addClass("divNotClickable");

}

function appearOther(aDiv){
    var allOtherDiv2=$(".preferRow").not($(aDiv).closest(".preferRow"));

    allOtherDiv2.fadeTo("slow", 1);
    allOtherDiv2.removeClass("divNotClickable");

}

/*function closeAll(){

       $("#closeButton").closest(".b").css("display","none");

        $("#closeButton").closest(".preferRow").animate({
            height: '-=55%'
        });

        $("#closeButton").closest(".b").animate({
            height: '-=65%'
        });

        opened=false;
}*/
