'use strict';


console.log('Hodd luck!');

function yoursite() {
	
	//header 
	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();

		$('.logo').css({ 'margin-top' : wScroll });

		$('.overlay').css('opacity', wScroll /600 );
	});

		var proj        = $('.proj'),
			pageLoad 	= $('.page-load'),
			projects    = $('.projects'),
			close       = $('.close');

	proj.on('click', function() {
		var pageId = $(this).attr('id');
		
		pageLoad.load('projects/' + pageId + '.html');

		console.log(pageId);

		projects.show().addClass('animated fadeOutLeft')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeOutLeft'); 
            //$(this).css('display', 'none');
            next(); 
        });

		pageLoad.show().addClass('animated fadeInRight')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeInRight'); 
            next(); 
        });

        close.show().addClass('animated fadeInLeft')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeInLeft'); 
            next(); 
        });

	});

	close.click(function() {

		projects.show().addClass('animated fadeInLeft')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeInLeft'); 
            next(); 
        });

		pageLoad.show().addClass('animated fadeOutRight')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeOutRight'); 
            $(this).css('display', 'none');
            next(); 
        });

        close.show().addClass('animated fadeOutLeft')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeOutLeft'); 
            $(this).css('display', 'none');
            next(); 
        });
	
	});

}

yoursite();