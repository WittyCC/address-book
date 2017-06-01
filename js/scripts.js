$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    event.preventDefault();
    var contact1Input = $("input#contact1").val();
    var address1Input = $("input#address1").val();
    var contact2Input = $("input#contact2").val();
    var address2Input = $("input#address2").val();
    var contact3Input = $("input#contact3").val();
    var address3Input = $("input#address3").val();

    $('.contact1').text(contact1Input);
    $('.address1').text(address1Input);
    $('.contact2').text(contact2Input);
    $('.address2').text(address2Input);
    $('.contact3').text(contact3Input);
    $('.address3').text(address3Input);

    $("#contacts").show();
    $("#blanks").hide();

    $('.contact1').click(function() {
      $('.address1').show();
    });
    $('.contact2').click(function() {
      $('.address2').show();
    });
    $('.contact3').click(function() {
      $('.address3').show();
    });

  });
});
