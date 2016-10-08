var zipValue;

$('#zipCodeSubmit').on('click', function() {
  zipValue = $('#zipCodeInput').val();
  alert('Zipcode is ' + zipValue);

});
