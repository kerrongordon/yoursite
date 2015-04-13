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
			projects    = $('.projects'),
			projSlide   = $('.proj-slide'),
			close       = $('.close');

	pageLoad.load('projects/loading.html');

	proj.on('click', function() {
		var pageId      = $(this).attr('id');
		
		pageLoad.load('projects/' + pageId + '.html');

		console.log();

		projSlide.css('left', '-50%');

		projects.delay(500)
			.queue( function(next){ 
            	$(this).animate({height: '200px'}, 10);
            	location.href = '#projects'; 
            next();
        });

	});



	close.click(function() {

		projSlide.css('left', '0%');
		
		projects.css('height', 'auto')
		.delay(900)
			.queue( function(next){ 
            	pageLoad.load('projects/loading.html');
            next();
        });
	
	});


}

yoursite();