$(document).ready(
    $(".portfolio").mouseenter(function(){
    $(this).children(".portfolio--title").addClass("portfolio--title__visible"); 
 }),
    $(".portfolio").mouseleave(function(){
    	$(this).children(".portfolio--title").removeClass("portfolio--title__visible")
    })
    );
    