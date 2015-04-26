'use strict';

function yoursite() {

	var kgProj           = $('.proj'),
		kgPageLoad 	     = $('.page-load'),
		kgProjects       = $('.projects'),
		kgProjSlide      = $('.proj-slide'),
		kgClose          = $('.close'),
		kgWaterdrop      = $('.skill-bar'),
		kgSkill          = $('.skill'),
		kgSkillBar       = $('.skill-bar'),
		kgLogo           = $('.logo'),
		kgHeader         = $('header'),
		kgOverlay        = $('.overlay'),
		kgMenubar        = $('.menubar'),
		kgMenubarLink    = $('.menubar a'),
		kgProjectsLink   = $('#projects'),
		kgPage           = $('.page'),
		kgSlide          = $('.slide'),
		kgMenubutton     = $('.menubutton');


	//scroll page logo

	function logoScroll() {

		$(window).scroll(function() {
			var wScroll  = $(this).scrollTop(),
			    header   = kgHeader.height()/1.8;

			kgLogo.css('transform', 'translate(0,' + wScroll/2 + 'px )');

			kgOverlay.css('opacity', wScroll /600 );

			if (wScroll <= header) {
		        kgSkillBar.addClass('skill-level-0 animated fadeIn');
		    } else {
		        kgSkillBar.removeClass('skill-level-0 animated fadeIn');
		    }

		});

	}



	//Gets the skill level form class name

	function waterdropCount() {

		kgWaterdrop.each(function() {
				
			var waterSpan 	= $(this).find('span'),
			 	skillWidth 	= kgSkill.width(),
			 	barWidth  	= $(this).width(),
			 	total 		= Math.floor((barWidth / skillWidth) * 100);

				waterSpan.text(total + '');

		});

	}


	//Projects init load Page
	kgPageLoad.load('projects/loading.html');


	//Projects Open Proj

	function projectsOpen() {

		kgProj.on('click', function() {
			var pageId      = $(this).attr('id');
			
			kgPageLoad.load('projects/' + pageId + '.html');

			console.log();

			kgProjSlide.css('left', '-50%');

			kgProjects.delay(500)
				.queue( function(next){ 
	            	$(this).animate({height: '200px'}, 30);
	            	$('html,body').animate({scrollTop: kgProjectsLink.offset().top}, 1000);
	            next();
	        });

		});

	}


	//Projects Close button

	function projectsClose() {

		kgClose.click(function() {

			kgProjSlide.css('left', '0%');
			
			kgProjects.css('height', 'auto')
			.delay(900)
				.queue( function(next){ 
	            	kgPageLoad.load('projects/loading.html');
	            next();
	        });

		});

	}



	//page scroll to id 

	function pageScroll() {

			$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		     	}
		    }
		});

	}


	// open and close menu

	function mainmenubutton() {

		kgMenubutton.on('click', function() {
			kgMenubar.toggleClass('menu-open');
		});

		kgMenubarLink.on('click', function() {
			kgMenubar.removeClass('menu-open');
		});
		
		kgPage.on('click', function() {
			kgMenubar.removeClass('menu-open');
		});

	}

 	
 	function  kgcarousel() {
	
		$('.btn:nth-child(1)').addClass('accentcolor2'); //init button backround color 


		$('.carousel-buttons button').on('click', function(event) {
			event.preventDefault();

			var btn = $(this).val();

			var slide1 = $('#slide-1'),
				slide2 = $('#slide-2'),
				slide3 = $('#slide-3'),
				slide4 = $('#slide-4');

			var btn1 = $('.btn:nth-child(1)'),
				btn2 = $('.btn:nth-child(2)'),
				btn3 = $('.btn:nth-child(3)'),
				btn4 = $('.btn:nth-child(4)');

			//slide one 

			if (btn === 'slide-1') {
				btn1.addClass('accentcolor2');
				kgSlide.css('left', '0%');
				slide1.css('opacity', '1');
			} else {
				btn1.removeClass('accentcolor2');
				slide1.css('opacity', '0');
			}

			//slide two

			if (btn === 'slide-2') {
				btn2.addClass('accentcolor2');
				kgSlide.css('left', '-25%');
				slide2.css('opacity', '1');
			} else {
				btn2.removeClass('accentcolor2');
				slide2.css('opacity', '0');
			}

			//slide three

			if (btn === 'slide-3') {
				btn3.addClass('accentcolor2');
				kgSlide.css('left', '-50%');
				slide3.css('opacity', '1');
			} else {
				btn3.removeClass('accentcolor2');
				slide3.css('opacity', '0');
			}

			//slide four

			if (btn === 'slide-4') {
				btn4.addClass('accentcolor2');
				kgSlide.css('left', '-75%');
				slide4.css('opacity', '1');
			} else {
				btn4.removeClass('accentcolor2');
				slide4.css('opacity', '0');
			}

		});
	}

    
    
    	//call all functions 

		pageScroll();

		logoScroll();

		waterdropCount();

		projectsOpen();

		projectsClose();

		mainmenubutton();

		kgcarousel();

}


$(function() {

	yoursite();

});