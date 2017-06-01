$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    event.preventDefault();
    var contact1Input = $("input#contact1").val();
    var address1Input = $("input#address1").val();
    var contact2Input = $("input#contact2").val();
    var address2Input = $("input#address2").val();
    var contact3Input = $("input#contact3").val();
    var address3Input = $("input#address3").val();

    $("#contacts").show();
    $("#blanks").hide();
  });
});
