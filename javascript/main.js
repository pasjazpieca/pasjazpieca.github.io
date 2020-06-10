/**
	* Scroll Calc
	* Init Header
	* Full Screen
	* Control Slider
	* Retina Logos
	* Gallery Isotope
	* Food Isotope
	* Blog Masonry
	* Testimonial
	* Simple Slider
	* Blog Slider
	* Toggles
	* Progress Bar
	* Responsive Menu
	* Animation
	* Effect Gallery
	* Go Top
	* Lastest Tweets
	* Ajax Contact Form
	* Flickr Feed
	* Count Down
	* Parallax
	* Team Carousel
	* Testimonial Carousel
	* Google Map
	* Custom Video
	* Top Video Background
*/

;(function($) {

   'use strict'

	var scrollCalc = function() {
		if ( $( window).scrollTop() > 100 ) {
			$('#header').addClass('float-header');
		} else {
			$('#header').removeClass('float-header');
		}
	};

	var init_header = function() {
	  var largeScreen = matchMedia('only screen and (min-width: 992px)').matches;
	  if ( largeScreen ) {
		 if ( $().sticky ) {
			$('header.header-sticky').sticky();
		 }
	  }

	  $('.one-page .mainnav ul > li > a').on('click',function() {
		 var anchor = $(this).attr('href').split('#')[1];
		 var headerHeight = 0;
		 var headerSmall = 80;
		 
		 if ( $( window).scrollTop() != 0 ) {
		 	headerSmall = 0;
		 }

		 if ( anchor ) {
			if ( $('#'+anchor).length > 0 ) {
			   if ( $('.header-sticky').length > 0 && largeScreen ) {
				  headerHeight = $('#header').outerHeight();
			   }
			   var target = $('#'+anchor).offset().top - headerHeight + headerSmall + 1;
			   $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
			}
		 }
		 return false;
	  }); // click on one-page menu
	  
	  $('.one-page .mainnav > ul > li > a').on( 'click', function() {
		 $( this ).addClass('active').parent().siblings().children().removeClass('active');
	  });
	};

	var fullScreen = function() {
	  (function() {
		 function setupSlider() {
			if( $('body').hasClass('full-screen') ) {
				$('.control-slider').css({ 'margin-top': 0, 'padding-bottom': 0 }); //reset slider

				var wHeight = $( window ).height(),
					contentHeight = $('.control-slider').outerHeight(),
					contactHeight = $('.contact-slider').outerHeight(),
					contactBottom = parseInt($('.contact-slider').css('bottom')),
					hHeader = $('.sticky-wrapper').outerHeight() + $('.sticky-wrapper').outerHeight() / 2,
					margin = ( wHeight - contentHeight - contactHeight - hHeader ) /2;

				$('.control-slider').css({ 'margin-top': margin, 'padding-bottom': margin + $('.sticky-wrapper').outerHeight() / 2 });
			}
		 }

		 $(window).on("resize", setupSlider);
		 $(document).on("ready", setupSlider);
	  })(); // set fullscreen and vertical align for content

	  (function() {
		 $('.btn-top').on('click',function() {
			var anchor = $(this).attr('href').split('#')[1];
			if ( anchor ) {
			   if ( $('#'+anchor).length > 0 ) {
				  var headerHeight = 0;
				  if ( $('.header-sticky').length > 0 ) {
					 headerHeight = $('#header').outerHeight();
				  }
				  var target = $('#'+anchor).offset().top - headerHeight;

				  $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
			   }
			}
			return false;
		 });
	  })();
	};

	var controlSlider = function() {
		if ( $().flexslider ) {
			$('.control-slider').each(function() {
				$(this).find('.flexslider').flexslider({
					animation: 'fade',
					animationLoop: true,
					slideshow: true,
					slideshowSpeed: 6000,
					animationSpeed: 800,
					pauseOnHover: true, 
					pauseOnAction:true,
					controlNav: true,
					directionNav: false,
					prevText: '<i class="fa fa-angle-left"></i>',
					nextText: '<i class="fa fa-angle-right"></i>',
					controlsContainer: '.flex-container'
				}); // end flexslider
			}); // end each
		} // end if
	};

	var retinaLogos = function() {
	  var retina = window.devicePixelRatio > 1 ? true : false;

	  if(retina) {
		 $('.logo img').attr({src:'./images/logo.png',width:'90',height:'35'});
	  }
	};

	var galleryIsotope = function() {
	  if ( $().isotope ) {
		 var $container = $('.gallery-wrap');

		 $container.imagesLoaded(function(){
			$container.isotope({
			   itemSelector: '.gallery-item',
			   transitionDuration: '1s'
			}); // end isotope
		 });

		 $('.gallery-filter li').on('click',function() {
			$('.gallery-filter li').removeClass('active');
			$(this).addClass('active');
			var selector = $(this).find("a").attr('data-filter');
			$container.isotope({ filter: selector });
			return false;
		 }); // end filter
		 $('.gallery-filter li:nth-child(2)').trigger('click');
	  };
	};

	var foodIsotope = function() {
		if ( $().isotope ) {
			var $container = $('.food-wrap');

			$container.imagesLoaded(function() {
				$container.isotope({
					itemSelector: '.food-item',
					transitionDuration: '0.6s',
					hiddenStyle: { opacity: 0 },
					visibleStyle: { opacity: 1 }
				}); // end isotope
			});

			$('.food-filter li').on('click',function() {
				var selector = $(this).find("a").attr('data-filter');

				$('.food-filter li').removeClass('active');
				$(this).addClass('active');
				$container.isotope({ filter: selector });

				return false;
			}); // end filter

			$('.food-filter li:nth-child(1)').trigger('click');
		};
	};
   

	var simpleSlider = function() {
	if ( $().flexslider ) {
		$('.roll-slider').each(function() {
			var $this = $(this);
			var easing = ( $this.data('effect') == 'fade' ) ? 'linear' : 'easeInOutExpo';
			$this.find('.flexslider').flexslider({
				animation      :  $this.data('effect'),
				direction      :  $this.data('direction'), // vertical
				pauseOnHover   :  true,
				useCSS         :  false,
				easing         :  easing,
				animationSpeed :  500,
				slideshowSpeed :  5000,
				controlNav     :  true,
				directionNav   :  true,
				smoothHeight   :  true,
				slideshow      :  $this.data('auto'),
				prevText    :  '<i class="fa fa-angle-left"></i>',
				nextText    :  '<i class="fa fa-angle-right"></i>'
			}); // end flexslider
		}); // end roll-slider
	}
	};


	var toggles = function() {
	  var args = {easing : 'easeOutExpo', duration: 600};
	  $('.toggle .toggle-title.active').siblings('.toggle-content').show();

	  $('.toggle.toggle-enable .toggle-title').on('click', function() {
		 $(this).closest('.toggle').find('.toggle-content').slideToggle(args);
		 $(this).toggleClass('active');
	  }); // toggle 

	  $('.accordion .toggle-title').on('click',function () {
		 if( !$(this).is('.active') ) {
			$(this).closest('.accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
			$(this).toggleClass('active');
			$(this).next().slideToggle(args);
		 } else {
			$(this).toggleClass('active');
			$(this).next().slideToggle(args);
		 }     
	  }); // accordion
	};

	

	var ResponsiveMenu = {

	  menuType: 'desktop',

	  initial: function(winWidth) {
		 ResponsiveMenu.menuWidthDetect(winWidth);
		 ResponsiveMenu.menuBtnClick();
		 ResponsiveMenu.parentMenuClick();
	  },

	  menuWidthDetect: function(winWidth) {
		 var currMenuType = 'desktop';

		 if (matchMedia('only screen and (max-width: 978px)').matches) {
			currMenuType = 'mobile';
		 } // change menu type

		 if ( currMenuType !== ResponsiveMenu.menuType ) {
			ResponsiveMenu.menuType = currMenuType;

			if ( currMenuType === 'mobile' ) {
			   var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
			   $('#header').find('.header-wrap').after($mobileMenu);
			   var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
			   hasChildMenu.children('ul').hide();
			   hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
			   $('.btn-menu').removeClass('active');
			 } else {
			   var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
			   $desktopMenu.find('.sub-menu').removeAttr('style');
			   $('#header').find('.span10').after($desktopMenu);
			   $('.btn-submenu').remove();
			 }
		 } // clone and insert menu
	  },

	  menuBtnClick: function() {
		 $('.btn-menu').on('click', function() {
			$('#mainnav-mobi').slideToggle(300);
			$(this).toggleClass('active');
		 });
	  }, // click on moblie button

	  parentMenuClick: function() {
		 $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
			if ( $(this).has('ul') ) {
			   e.stopImmediatePropagation()
			   $(this).next('ul').slideToggle(300);
			   $(this).toggleClass('active');
			}
		 });
	  } // click on sub-menu button
	};

	

	var orAnimation = function() {
	  $('.orches-animation').each( function() {
	  var orElement = $(this),
		 orAnimationClass = orElement.data('animation'),
		 orAnimationDelay = orElement.data('animation-delay'),
		 orAnimationOffset = orElement.data('animation-offset');

		 orElement.css({
			'-webkit-animation-delay':  orAnimationDelay,
			'-moz-animation-delay':     orAnimationDelay,
			'animation-delay':          orAnimationDelay
		 });
		
		 orElement.waypoint(function() {
			orElement.addClass('animated').addClass(orAnimationClass);
			},{
			   triggerOnce: true,
			   offset: orAnimationOffset
		 });
	  });
	};

	var effectGallery = function() {
	  var effect = $('.gallery-wrap').data('portfolio-effect');
	  $('.gallery-item').children('.item-wrap').addClass('orches-animation');

	  $('.gallery-wrap').waypoint(function(direction) {
		 $('.gallery-item').children('.item-wrap').each(function(idx, ele) {
			setTimeout(function() {
			   $(ele).addClass('animated ' + effect);
			}, idx * 150);
		 });
	  }, {
		 offset: '50%'
	  });
	};

	var goTop = function() {
	  $(window).scroll(function() {
		 if ( $(this).scrollTop() > 800 ) {
			$('.go-top').addClass('show');
		 } else {
			$('.go-top').removeClass('show');
		 }
	  }); 
	  
	  $('.go-top').on('click', function() {
		 $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
		 return false;
	  });
	};


	var parallax = function() {
		$('.parallax-bg1').parallax("50%", 0.5);
		$('.parallax-bg2').parallax("50%", 0.5);
		$('.parallax-bg4').parallax("50%", 0.3);
		$('.parallax-bg5').parallax("50%", 0.5);
		$('.parallax-bg7').parallax("50%", 0.7);
		$('.parallax-bg9').parallax("50%", 0.4);
		$('.parallax-bg12').parallax("50%", 0.4);
	};



    var googleMap = function() {
        if ( $().gmap3 ) {
            $("#map").gmap3({
                map:{
                    options:{
                        zoom: 14,
                        mapTypeId: 'zupa_style',
                        mapTypeControlOptions: {
                            mapTypeIds: ['zupa_style', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: false
                    }
                },
                getlatlng:{
                    address:  "Zygmuntowska 1 44-100 Gliwice Polska",
                    callback: function(results) {
                        if ( !results ) return;
                        $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,
                                options:{
                                	//icon: 'https://dl.dropboxusercontent.com/u/778631/logo/logo_map.png'
									icon: './img/logo_map.png'
                                }
                            }
                        });
                    }
                },
                styledmaptype:{
                    id: "zupa_style",
                    options:{
                        name: "Mapa"
                    },
                },
            });
        }
    };



	// Dom Ready
	$(function() {
		init_header();
		fullScreen();
		simpleSlider();
		controlSlider();
		foodIsotope();
		//teamCarousel();
		//customVideo();
		//topVideoBg();
	
		$(window).scroll(function(){scrollCalc();})
		$(document).ready(function(){scrollCalc();})

		$("#wi-top-area.type-fullscreen-slider .super").each(function(){
		  var $this = $(this);
		  var number = $this.data('number');
		  number = parseInt(number);

		  var i = 1;
		  var slides = [];
		  while( i <= number ) {
			slides.push({image:$this.data('image-'+i)});
			i++;
			}
		  $this.supersized({
			autoplay    : true,
				slide_interval  : 4000,
				transition    : $this.data('effect'),
				transition_speed: 700,
				slides: slides,
			fit_portrait  : false,
			}); // supersized
		});

		$('.datepick').on('click', function(){
			$(this).siblings('input').focus();
			return false;
		});

		retinaLogos();
		galleryIsotope();
		//blogMasonry();
		//testimonial();
		toggles();
		//progressBar();
		orAnimation();
		effectGallery();
		goTop()
		//ajaxContactForm();
		//orCountdown();
		//ajaxSubscribe.eventLoad();
		parallax();
		// Initialize responsive menu
		ResponsiveMenu.initial($(window).width());
		$(window).resize(function() {
		 	ResponsiveMenu.menuWidthDetect($(this).width());
		});

		// Detect elements into viewport
		$('[data-waypoint-active="yes"]').waypoint(function() {
		 	$(this).trigger('on-appear');
		}, { offset: '90%' });

		$(window).on('load', function() {
			setTimeout(function() {
				$.waypoints('refresh');
			}, 100);
		});
		$(window).load(function(){
			//lastestTweets();
			googleMap();
			//testiCarousel();
			//blogSlider();  	
		})
   	});

})(jQuery);
