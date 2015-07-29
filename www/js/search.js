$(document).ready(loadStuff);

function loadStuff(){
    $(".selected").css("color","blue");
}

var latMilano=45.465454;
var longMilano=9.186515999999983;

function initialize() {
        var mapOptions = {
          center: { lat: latMilano, lng: longMilano},
          zoom: 12,
          mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID]
                    }, // here´s the array of controls
          disableDefaultUI: true,
        };
        var map = new google.maps.Map(document.getElementById('googleMap'),
            mapOptions);

    }
      google.maps.event.addDomListener(window, 'load', initialize);
