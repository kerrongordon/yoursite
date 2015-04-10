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

		//logo.css({ 'margin-top' : wScroll });
		logo.css('transform', 'translate(0,' + wScroll/2 + 'px )');

		overlay.css('opacity', wScroll /600 );

		if (wScroll <= header) {
	        skillBar.addClass('skill-level-0 fadeInWaterdrop');
	    } else {
	        skillBar.removeClass('skill-level-0 fadeInWaterdrop');
	    }

	});

		var waterdrop = $('.skill-bar'),
			skill     = $('.skill');

		waterdrop.each(function() {
			
			var waterSpan 	= $(this).find('span'),
			 	skillWidth 	= skill.width(),
			 	barWidth  	= $(this).width(),
			 	total 		= Math.floor((barWidth / skillWidth) * 100);

			waterSpan.text(total + '');

		});

		var proj        = $('.proj'),
			pageLoad 	= $('.page-load'),
			popupinfor  = $('.popupinfor'),
			projects    = $('.projects'),
			close       = $('.close');

	proj.on('click', function() {
		var pageId = $(this).attr('id');
		
		pageLoad.load('projects/' + pageId + '.html');

		console.log(pageId);

		//proj.addClass('hide-proj');

		projects.show().addClass('animated fadeOutLeft')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeOutLeft')
            .css({
            	opacity: '0',
            	transform: 'translate3d(-100%, 0, 0)'
            });
            next(); 
        });          

		popupinfor.show().addClass('animated fadeInRight')
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

		projects.show().css('display', 'flex');

		//proj.removeClass('hide-proj');

		projects.show().addClass('animated fadeInLeft')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeInLeft')
            .css({
            	opacity: '1',
            	transform: 'translate3d(-0%, 0, 0)'
            }); 
            next(); 
        }); 

		popupinfor.show().addClass('animated fadeOutRight')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeOutRight marup');
            next(); 
        });

        close.show().addClass('animated fadeOut')
          .delay(900)
          .queue( function(next){ 
            $(this).removeClass('animated fadeOut') 
            .css('display', 'none');
            next(); 
        });
	
	});

	//$('#slide-2').animatescroll({scrollSpeed:3000,easing:'easeOutElastic'});

	$('.s3').click(function(event) {
		event.preventDefault();
		$(this).animatescroll();
	});



}

yoursite();