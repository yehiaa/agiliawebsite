$(function () {

"use strict";  


  /* Scroll-Top functionality */
  var sc; 
  // Show & hide the scrolltop icon
	$(window).on("scroll", function(){	
  		
      sc = $(window).scrollTop();

  		if( sc > 50){
  			$(".scroll-top").fadeIn(); 
         console.log(sc); 		
  		}
  		else{
  			$(".scroll-top").fadeOut();
  		}
	});	
  // delegate the scrollTop 
  $(".scroll-top").on("click",function(){

          if( sc != 0)
          {
             $('html, body').animate( {scrollTop:0} , 800);            
          }           
  });


  // attache .active class to Navbar
  $(".navbar .nav-item").on("click",function(){

    $(this).addClass("active").siblings().removeClass("active");    
    
  });

  /* Adjustment window height */
  $("#header").height($(window).height());


  // Adjustment intro Padding-top
  var introPadding = ($(window).height() - $("#header .intro").height() - $(".navbar").height())  / 2;
  $("#header .intro").css("padding-top", introPadding);  


});