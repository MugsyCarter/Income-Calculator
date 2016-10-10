//IIFE here
(function(module) {
  var census = {};
  var censusKey = '7a3aa9d2f7fafb092b5957d10b65c477719c4c4f';
  var stateChoice;
//array of all site objects that
  census.allData = [];

  $('#test-button').on('click', function(){
    census.request(alert('census.request called'));
  });

  $('#state-choice').on('change', function(){
    stateChoice = $(this).val();
    alert(stateChoice);
  });

  function countyFilterMaker(counties){
    var source = $('#county-filter-template').html();
    var template = Handlebars.compile(source);
    var context = {county: counties};
    var html = template(context);
    $('#county-filter').append(html);
  };



//ajax call here
  census.request = function(callback) {
    $.ajax({
      method: 'GET',
      url: 'http://api.census.gov/data/timeseries/poverty/saipe?get=NAME,SAEMHI_PT,SAEPOVRTALL_PT&for=county:*&in=state:' + stateChoice + '&time=2012&key=7a3aa9d2f7fafb092b5957d10b65c477719c4c4f',
      success: function(data, status, xhr){
        console.log('ajax call was a rousing success:', data);
        data.forEach(function(county){
          if (county[0] !== 'NAME') {
            var $option = $('<option></option>');
            $option.text(county[0]);
            $('#county-filter').append($option);
            console.log(county[0]);
          }
          // countyFilterMaker(county[0]);
        });
        // countyFilterMaker();
      },
      error: function(xhr, settings, error){
        console.log('Ajax call failed:', error);
      }
    });
  };

  // sites.withTheAttribute = function(myAttr) {
  //   return sites.allsites.filter(function(aSite) {
  //     return aSite[myAttr];
  //   });
  // };

  module.census = census;
})(window);
