
//Button on
$(function () {
    $('#on').click(function(){
      $(".elem").addClass('filled');
  });

  // Button off
  $('#off').click(function(){
    $(".elem").removeClass('filled');
  });

  // Toggle Element
  $('.circle').click(function(){
      $(this).toggleClass('filled');
  });

  // Fill each line 
  
  
  $('#square1').click(function(){
    if($(this).hasClass('filled')){
    $('.row1').removeClass('filled');
    }else{
      $('.row1').addClass('filled');
    }
  });
  
  $('#square2').click(function(){
    if($(this).hasClass('filled')){
    $('.row2').removeClass('filled');
    }else{
      $('.row2').addClass('filled');
    }
  });
  
  $('#square3').click(function(){
    if($(this).hasClass('filled')){
    $('.row3').removeClass('filled');
    }else{
      $('.row3').addClass('filled');
    }
  });
  
  $('#square4').click(function(){
    if($(this).hasClass('filled')){
    $('.row4').removeClass('filled');
    }else{
      $('.row4').addClass('filled');
    }
  });

  // Fill the cross

  $('#losange').click(function(){
    if($(this).hasClass('filled')){
    $('.cross').removeClass('filled');
    }else{
      $('.cross').addClass('filled');
    }
  });

});

