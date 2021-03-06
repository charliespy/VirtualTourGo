// document.write('<script type="text/javascript" src="new_view_controller.js" ></script>');

$( document ).ready(function() {
    // for(var i = 0; i < places_list.length; i++) {
    //   $("#menu_bar_index").append('<a class="dropdown-item" onclick="switchWindowWithIndex(' + i + ')">' + places_list[i].title + '</a>');
    // }
    
    var schools = [];
   
    for (const [school, index] of Object.entries(school_mapping)) {
      schools.push(school)
    }

     $( "#schoolInput" ).autocomplete({
      source: schools,
      delay: 600
    });

    $("#startVirtualTour").click(function(){
      var school = $("#schoolInput").val();
      var indexForTheSchool = school_mapping[school];
      
      dataToParse = allData[indexForTheSchool];
      function goToNewPage() {
          
          url = 'new_view.html?index=' + indexForTheSchool;

          document.location.href = url;
      }
      goToNewPage();

    });



});

function switchWindowWithIndex(gotoIndex) {
    // index=gotoIndex
    window.location.href = "new_view.html";
}  


