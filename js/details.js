 
 
  var vw = $(window).width();
  var bp = 768 //break point
  if(vw<bp){
    $('details').removeAttr('open').attr('close')
  }
  else{
    $('details').removeAttr('close').attr('open')
  }
