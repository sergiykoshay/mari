 (function( $ ){
	
//// ---> Проверка на существование элемента на странице
jQuery.fn.exists = function() {
   return jQuery(this).length;
}

//	Phone Mask
$(function() {
  
  if($('#user_phone').exists()){
    
    $('#user_phone').each(function(){
      $(this).mask("(999) 999-99-99");
    });
    
  }
  
  if($('.phone_form').exists()){
    
    var form = $('.phone_form'),
      btn = $('.btn_submit');
    
    form.find('.rfield').addClass('empty_field');
  
    setInterval(function(){
    
      if($('#user_phone').exists()){
        var pmc = $('#user_phone');
        var un = $('#user_name');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' )  {
          pmc.addClass('empty_field');
        } else {
            pmc.removeClass('empty_field');
        }
        if ( un.val() == '' )  {
          un.addClass('empty_field');
        } else {
            un.removeClass('empty_field');
        }
      }
      
       var sizeEmpty = $('.empty_field').length;
      
      if(sizeEmpty > 0){
        if(btn.hasClass('btn-disabled')){
          return false
        } else {
          btn.addClass('btn-disabled')
        }
      } else {
        btn.removeClass('btn-disabled')
      }
      
    },200);

    $('.btn_submit').click(function(){
      if($(this).hasClass('btn-disabled')){
        return false
      } else {
        form.submit;
        
        
      }
    });
    
  }

});

})( jQuery );


function sender() {
  tel = "_Телефон:_ " + document.getElementById("user_phone").value;  
  user_name = "_Ім'я:_ " + document.getElementById("user_name").value;
  user_message = "_Коментар:_ " + document.getElementById("user_message").value;
  message = user_name + tel + user_message;
  $.get("https://api.telegram.org/bot291742143:AAHSB2FvlPMwcTatGxhRB51RpKfyZzY5w84/sendMessage?parse_mode=markdown&text=" + message + "&chat_id=-141035595");
  $("#user_phone").val("");
  $("#user_name").val("");
  $("#user_message").val("");
}




function formPhone()
{

  $('.box-form')
   .alignCenter()
   .toggleClass('hidden');
 $('#opaco').height($(document).height()).removeClass('hidden').fadeTo('fast', 0.5);
 
}

$.fn.alignCenter = function() {
   //get margin left
   var marginLeft = - $(this).width()/2 + 'px';
   //get margin top
   var marginTop = - $(this).height()/2 + 'px';
   //return updated element
   return $(this).css({'margin-left':marginLeft, 'margin-top':marginTop});
  };


  function closePopup()
{
  $('#opaco').toggleClass('hidden').removeAttr('style');
  $('.box-form').toggleClass('hidden');
  return false;
}

$(document).ready(function(){
  $('.img-box').each(function(index){
    var angle = Math.floor( Math.random() * 60 - 30 );
      $(this).css( 'transform', 'rotate(' + angle + 'deg)' );   
  $(this).css( '-moz-transform', 'rotate(' + angle + 'deg)' );   
  $(this).css( '-webkit-transform', 'rotate(' + angle + 'deg)' );
  });
});


/*
(function(){

  var date = new Date();
  var time = date.getHours();
  var day = date.getDay();
  var timeStart = 0;
  var timeEnd = 24;
  var lunchFlag = $("#lunch").is(':checked');
         if (time>=timeStart&&time<timeEnd&&day>0&&day<6&&+!lunchFlag){
           
           $('.telephone').addClass('telephone--active');
           //Менеджер зателефонує вам протягом 15 хвитилин
         } else{
           
           $('.telephone').removeClass('telephone--active');
           //Менеджер зателефонує вам в робочий час
         }; 
         
          

      })();
*/