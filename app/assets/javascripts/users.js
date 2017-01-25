/* global $, Stripe */
//Document ready
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-signup-btn');
  //Set Stripe public key
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  // When user clicks form submit btn
  submitBtn.click(function(event) {
    // Prevent default submission behavior
    event.preventDefault();
    //collect credit card fields
    var ccNum= $("#card_number").val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    //send the card info to stripe    
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
    
  });
  
  //collect credit card fields
  //send the card info to stripe
  //stripe will return a card token
  //inject card token as hidden field into form.
  //submit form to our rails app
  });