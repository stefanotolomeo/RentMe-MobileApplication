
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

function loadStuff(){
    $(".selected").css("color","blue");


    var idClient =  getUrlParameters("id", "", true);
    console.log(idClient);
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
}



/*function parseGetVars()
{
  // creo una array
  var args = new Array();
  // individuo la query (cioè tutto quello che sta a destra del ?)
  // per farlo uso il metodo substring della proprietà search
  // dell'oggetto location
  var query = window.location.search.substring(1);
  // se c'è una querystring procedo alla sua analisi
  if (query)
  {
    // divido la querystring in blocchi sulla base del carattere &
    // (il carattere & è usato per concatenare i diversi parametri della URL)
    var strList = query.split('&');
    // faccio un ciclo per leggere i blocchi individuati nella querystring
    for(str in strList)
    {
      // divido ogni blocco mediante il simbolo uguale
      // (uguale è usato per l'assegnazione del valore)
      var parts = strList[str].split('=');
      // inserisco nella array args l'accoppiata nome = valore di ciascun
      // parametro presente nella querystring
      args[unescape(parts[0])] = unescape(parts[1]);
    }
  }
  return args;
}


var get = parseGetVars();
var userId=get['id'];


function getUserData(){
//    var get = parseGetVars();
//    var idCategory=get['idCat'];

    //alert(idCategory);
    console.log(userId);
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://rentme.altervista.org/Home/home.php",

        data: { 'id' : userId},
        success: function(response) {
                console.log(response);
                var category=JSON.parse(response);
                //alert(category[0]);
               //$(".nameCategory").html(category[0].name);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}*/











