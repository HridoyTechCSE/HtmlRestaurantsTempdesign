$(document).ready(function(){
    $(".header_top").sticky({topSpacing:0});
	
	  $('.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '75';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        }); 
		
		
       $('.parallax-bg').scrolly({bgParallax: true});
	
	
  });