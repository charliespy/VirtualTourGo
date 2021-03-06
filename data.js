
var data;
var allData; // data = allData[index]
var dataToParse; 
var school_mapping = {}; // ( school_name : index)



$( function() {

  $.ajaxSetup({
      async: false
      });

  $.getJSON( "data.json", function( response ) {  
    data = response.data[0];
    allData = response.data;
    for (let i = 0 ; i < response.data.length ; i++)
    {
       school_mapping[response.data[i]["school_name"]] = i ;
    }
  });

});

