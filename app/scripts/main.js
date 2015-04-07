'use strict';


console.log('Hodd luck!');

function yoursite() {
	
	//header 
	$(window).scroll(function() {
		var wScroll  = $(this).scrollTop(),
		    skillBar = $('.skill-bar'),
		    logo     = $('.logo'),
		    header   = $('header').height()/1.8,
		    overlay  = $('.overlay');

		logo.css({ 'margin-top' : wScroll });

		overlay.css('opacity', wScroll /600 );

		if (wScroll <= header) {
	        skillBar.addClass('skill-level-0');
	    } else {
	        skillBar.removeClass('skill-level-0');
	    }

	});

		var waterdrop = $('.skill-bar'),
			skill     = $('.skill');

		waterdrop.each(function() {
			
			var waterSpan 	= $(this).find('span'),
			 	skillWidth 	= skill.width(),
			 	tesyou  	= $(this).width(),
			 	total 		= Math.floor((tesyou / skillWidth) * 100);

			waterSpan.text(total + '');

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
            $(this).removeClass('animated fadeOutLeft')
            .css('margin-left', '100%');
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

		projects.show().css('margin-left', 'auto').addClass('animated fadeInLeft')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeInLeft'); 
            next(); 
        });

		pageLoad.show().addClass('animated fadeOutRight')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeOutRight')
            .css('display', 'none');
            next(); 
        });

        close.show().addClass('animated fadeOutLeft')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeOutLeft') 
            .css('display', 'none');
            next(); 
        });
	
	});

}

yoursite();