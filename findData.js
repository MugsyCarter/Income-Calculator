//IIFE here
(function(module) {
  var census = {};
  var censusKey = '7a3aa9d2f7fafb092b5957d10b65c477719c4c4f';

//array of all site objects that
  census.allsites = [];

//ajax call here
  sites.request = function(callback) {
    $.ajax({
      method: 'GET',
      url: 'https://api.github.com/users/MugsyCarter/repos' + '?per_page=50&sort=updated',
      success: function(data, status, xhr){
        console.log('ajax call was a rousing success:', data);
        sites.allsites = data;
        callback();
      },
      error: function(xhr, settings, error){
        console.log('Ajax call failed:', error);
      }
    });
  };

  sites.withTheAttribute = function(myAttr) {
    return sites.allsites.filter(function(aSite) {
      return aSite[myAttr];
    });
  };

  module.sites = sites;
})(window);
