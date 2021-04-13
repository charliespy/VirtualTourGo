// initilization 
var index = 0;
var schoolIndex ;
$( document ).ready(function() {
   schoolIndex = window.location.href.split("=")[1];
    console.log(index);
    console.log(allData);
    for(var i = 0; i < allData[schoolIndex]["buildings"].length; i++) {
      $("#menu_bar").append('<a class="dropdown-item" onclick="goToNextPlaceWithIndex(' + i + ')">' + allData[schoolIndex]["buildings"][i].title + '</a>');
    }

    $("#title").text(allData[schoolIndex]["buildings"][index].title);
    $("#description1").text(allData[schoolIndex]["buildings"][index].description1);
    $("#description2").text(allData[schoolIndex]["buildings"][index].description2);
    $("#heading").text('Virtourgo | ' + allData[schoolIndex]["buildings"][index].title);
    // $("#description2").attr("src", allData[schoolIndex]["buildings"][0].img);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: allData[schoolIndex]["buildings"][index].lat, lng: allData[schoolIndex]["buildings"][index].lng},
        pov: {
          heading: allData[schoolIndex]["buildings"][index].heading,
          pitch: allData[schoolIndex]["buildings"][index].pitch,
        }
      });
    map.setStreetView(panorama);
});

function goToNextPlace() {
  index++;
  if (index < allData[schoolIndex]["buildings"].length) {
    $("#title").text(allData[schoolIndex]["buildings"][index].title);
    $("#description1").text(allData[schoolIndex]["buildings"][index].description1);
    $("#description2").text(allData[schoolIndex]["buildings"][index].description2);
    $("#heading").text('Virtourgo | ' + allData[schoolIndex]["buildings"][index].title);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: allData[schoolIndex]["buildings"][index].lat, lng: allData[schoolIndex]["buildings"][index].lng},
        pov: {
          heading: allData[schoolIndex]["buildings"][index].heading,
          pitch: allData[schoolIndex]["buildings"][index].pitch,
        }
      });
    map.setStreetView(panorama);
  } else {
    window.location.href = "index.html";
  }
}

function initialize() {
  var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('pano'), {
      position: {lat: allData[schoolIndex]["buildings"][index].lat, lng: allData[schoolIndex]["buildings"][index].lng},
        pov: {
          heading: allData[schoolIndex]["buildings"][index].heading,
          pitch: allData[schoolIndex]["buildings"][index].pitch,
        }
    });
  map.setStreetView(panorama);
}

function goToNextPlaceWithIndex(gotoIndex) {
  if (index < allData[schoolIndex]["buildings"].length) {
    index = gotoIndex;
    $("#title").text(allData[schoolIndex]["buildings"][index].title);
    $("#description1").text(allData[schoolIndex]["buildings"][index].description1);
    $("#description2").text(allData[schoolIndex]["buildings"][index].description2);
    $("#heading").text('Virtourgo | ' + allData[schoolIndex]["buildings"][index].title);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: allData[schoolIndex]["buildings"][index].lat, lng: allData[schoolIndex]["buildings"][index].lng},
        pov: {
          heading: allData[schoolIndex]["buildings"][index].heading,
          pitch: allData[schoolIndex]["buildings"][index].pitch,
        }
      });
    map.setStreetView(panorama);
  }  
}