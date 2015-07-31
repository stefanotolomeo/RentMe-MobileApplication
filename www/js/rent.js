$(document).ready(loadStuff);

function loadStuff(){
    $(".selected").css("color","blue");

}

var idClient=3;
var app = angular.module("rentApp", []);

app.controller("noticeListCtrl", function($scope, $http) {

  $http({
      url:"http://rentme.altervista.org/Rent/rent.php",
      method: "POST",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: $.param({idServer: idClient})
      }).success(function(data, status, headers, config) {
        console.log("annunci ok");

        if(data.length>0){
            $(".noticeList").css("display","block")
            $scope.annunci = data;
            //num=data.length;
            //$(".centralContent").css("height","block")

        }
        else{
            console.log("nessun annuncio");
        }
        }).
    error(function(data, status, headers, config) {
        console.log("Errore");
    });
});
