var opened=false;


$(document).ready(action);


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
        });

        /*var prevDiv=$(this).siblings().find("#closeButton");
        $(".a").not(this).click(function(){
            //console.log("altro div");
            if(opened==true){
                console.log("chiudi div");
                //closeDiv(prevDiv);
                //return;
            }
        });*/
    });
}

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
