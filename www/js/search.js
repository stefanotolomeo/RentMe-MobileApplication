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

      // Create marker
        var marker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(latMilano, longMilano),
          title: 'Milano Centro'
        });

        // Add circle overlay and bind to marker
        var circle = new google.maps.Circle({
          map: map,
          radius: 900,    // 10 miles in metres
          fillColor: '#AA0000'
        });
        circle.bindTo('center', marker, 'position');

    }
      google.maps.event.addDomListener(window, 'load', initialize);

