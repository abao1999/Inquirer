	$(document).ready(function (){
		$("video").attr("preload","none");
		$(".detailed-services dt.opened").next().slideToggle('fast');
		$(".widget-contacts dt.opened").next().slideToggle('fast');
/*		$("#slider .ls-slide").attr('data-ls','transition2d:5;slidedelay:5000;');
		$("#slider .ls-l").attr('data-ls','offsetyin:top;delayin:0;durationin:1000;');*/
		$(".widget-departments dt.opened").next().slideToggle('fast');
		composer_include();
		milestone_counter();
		progress_bar_loader ();
		contact_form_init();
		chart_circle_init();
		sticky ()
		$(document).scroll(milestone_counter);
		$(document).scroll(progress_bar_loader);
		$(document).scroll(chart_circle_init);
		/* retina-animating-blocks */
		if (!is_mobile())
			{
				window.scrollTo(0,1);
				var control = $.superscrollorama({
					triggerAtCenter:true,
					playoutAnimations:true,
					reverse:false
				});
				var ofs = $(window).height()/2;

				/* 1st animating block */
				control.addTween(target='#animating-block-1',
						TweenMax.from($('#animating-block-1 img[src*="iphone"]'), 0.5 , {css:{left:'0',opacity:'0'}}),duration=0,offset=-ofs);
				control.addTween(target='#animating-block-1',
						TweenMax.from($('#animating-block-1 img[src*="ipad"]'), 0.5 , {css:{right:'0',opacity:'0'}}),duration=0,offset=-ofs);
				control.addTween(target='#animating-block-1',
						TweenMax.from($('#animating-block-1 img[src*="monitor"]'), 0.5 , {css:{opacity:'0'}}),duration=0,offset=-ofs);
				/* 1st animating block */


				/* 2nd animating block */
				control.addTween(target="#animating-block-3",
					TweenMax.from($("#animating-block-3 img[src*='mac']"),1,{css:{'margin-top':'50%',opacity:0}}),offset=-ofs);
				/* 2nd animating block */

				/* 3rd animating block */
				control.addTween(target="#animating-block-4",
					TweenMax.from($('#animating-block-4 img[src*="color-6"]'), 0.2 , {css:{'left':'50%',opacity:'0'}}),offset=-ofs);
				control.addTween(target="#animating-block-4",
					TweenMax.from($('#animating-block-4 img[src*="color-5"]'), 0.2 , {css:{'left':'50%',opacity:'0',display:'none'},delay:0.15}),offset=-ofs);
				control.addTween(target="#animating-block-4",
					TweenMax.from($('#animating-block-4 img[src*="color-4"]'), 0.2 , {css:{'left':'50%',opacity:'0',display:'none'},delay:0.35}),offset=-ofs);
				control.addTween(target="#animating-block-4",
					TweenMax.from($('#animating-block-4 img[src*="color-3"]'), 0.2 , {css:{'left':'50%',opacity:'0',display:'none'},delay:0.55}),offset=-ofs);
				control.addTween(target="#animating-block-4",
					TweenMax.from($('#animating-block-4 img[src*="color-2"]'), 0.2 , {css:{'left':'50%',opacity:'0',display:'none'},delay:0.75}),offset=-ofs);
				control.addTween(target="#animating-block-4",
					TweenMax.from($('#animating-block-4 img[src*="color-1"]'), 0.2 , {css:{'left':'50%',opacity:'0',display:'none'},delay:0.95}),offset=-ofs);
				/* 3rd animating block */

				/* 4th animating block */
				control.addTween(target="#animating-block-7",
					TweenMax.from($("#animating-block-7 img[src*='one-page']"),1,{css:{width:'0'}}),offset=-ofs);
				/* 4th animating block */

				/* 5th animating block */

				/* 5th animating block */
				control.addTween(target="#animating-block-8",
					TweenMax.from($("#animating-block-8 img[src*='LayerSlider']"),1,{css:{'transform':'rotateY(180deg)'}}),offset=-ofs);
				/* 5th animating block */


			}
			/* retina-animating-blocks */
	});

	/* twitter */
	if ($('.latest-tweets').length) {
		$('.latest-tweets').tweet({
			username: 'Creative_WS',
			count: 3,
			loading_text: 'loading twitter feed...',
			template: "<li><div class='pic'><i class='fa fa-twitter'></i></div><p><a href='{user_url}'>@{screen_name}</a>{join}{text}<br>{time}</p></li>"
			/* etc... */
		});
	};
		$('#latest-tweets-carousel').tweet({
			username: 'Creative_WS',
			count: 5,
			loading_text: 'loading twitter feed...',
			template: "<div class='pic'><i class='fa fa-twitter'></i></div><p><a href='{user_url}'>@{screen_name}</a>{join}{text}<br>{time}</p>"
			/* etc... */
		});
		$('#latest-tweets-carousel .tweet_list').addClass("owl-carousel");
		$('#latest-tweets-carousel2').tweet({
			username: 'Creative_WS',
			count: 5,
			loading_text: 'loading twitter feed...',
			template: "<p><a href='{user_url}'>@{screen_name}</a>{join}{text}<br>{time}</p>"
			/* etc... */
		});
		$('#latest-tweets-carousel2 .tweet_list').addClass("owl-carousel");
		twitter_carousel_init();
function twitter_carousel_init (){
	$('#latest-tweets-carousel .tweet_list,#latest-tweets-carousel2 .tweet_list').owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: false,
		slideSpeed: 400,
		paginationSpeed: 400,
		rewindSpeed: 400,
		autoHeight: true
  });
}
	/* twitter */



/**/
/* google map */
/**/

function init_map()
{
	var coordLat = -37.81261128155935;
	var coordLng = 144.96260404586792;
	if( jQuery(window).width() < 756 )
	{
		delta = 0;
	}

	var point = new google.maps.LatLng(coordLat,coordLng);
	var center = new google.maps.LatLng(coordLat,coordLng);

	var mapOptions = {
		zoom: 15,
		center: center,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var image = 'images/gmap_default.png';
  var beachMarker = new google.maps.Marker({
  	map: map,
  	position: point
  });
}

/**/
/* on resize event */
/**/
$(window).resize(function()
{

	sticky ()
	/**/
	/* benefits */
	/**/
	$('.benefits .text').css('padding-bottom', 51);
	if( $(window).width() > 767 )
	{
		$('.benefits li').each(function()
		{
			if( $(this).outerHeight() < $('.benefits').outerHeight() )
			{
				$(this).find('.text').css('padding-bottom', $('.benefits').outerHeight() - $(this).outerHeight() + 51);
			}
		});
	}
	else if( $(window).width() > 479 )
	{
		$('.benefits li:nth-child(even)').each(function()
		{
			elem = $(this);
			if( elem.outerHeight() < elem.prev().outerHeight() )
			{
				elem.find('.text').css('padding-bottom', elem.prev().outerHeight() - elem.outerHeight() + 51);
			}
			else if( $(this).outerHeight() > $(this).prev().outerHeight() )
			{
				elem.prev().find('.text').css('padding-bottom', elem.outerHeight() - elem.prev().outerHeight() + 51);
			}
		});
	}


	/**/
	/* doctors */
	/**/
	$('#doctors .grid').isotope({
		masonry: {columnWidth: $('#doctors .item').outerWidth()}
	});


	/**/
	/* news */
	/**/
	$('#news .grid').isotope({
		masonry: {columnWidth: $('#news .item').outerWidth()}
	});


	/**/
	/* photo tour */
	/**/
	$('#photo-tour .grid').isotope({
		masonry: {columnWidth: $('#photo-tour .item').outerWidth()}
	});
});


/**/
/* on load event */
/**/
$(function()
{
	/**/
	/* fancybox */
	/**/
	$(".fancybox").fancybox();


	/**/
	/* mobile main nav */
	/**/
	$('#mobile-main-nav').on('click', 'i', function()
	{
		$(this).nextAll('ul').slideToggle('fast');
	});
	$('#mobile-main-nav').on('click', '.opener', function()
	{
		$(this).next('ul').slideToggle('fast');
		return false;
	});


	/**/
	/* quick search */
	/**/
	$('#quick-search-switcher').on('click', function()
	{
		$('#quick-search').toggleClass('quick-search-visible');
	});

	 var docs = [
	 { value: 'Dr. Butcher House', data: 'staff-page.html' },
	 { value: 'Dr. Brick Wall', data: 'staff-page.html' },
	 { value: 'Dr. Sno White', data: 'staff-page.html' },
	 { value: 'Dr. Mangle Taleebin', data: 'staff-page.html' },
	 { value: 'Dr. Grim Frog', data: 'staff-page.html' },
	 { value: 'Dr. Earlene Milone', data: 'staff-page.html' },
	 { value: 'Dr. Grim Reaper', data: 'staff-page.html' },
	 { value: 'Dr. Jane Doe', data: 'staff-page.html' }];

	 // setup autocomplete function pulling from docs[] array
	 $('#docname').autocomplete({
	  lookup: docs,
	  onSelect: function(suggestion) {
	            var url = suggestion.data;
	            if(url != '#') {
	                location.href = url;
	            }
	        }
	 });

	/**/
	/* slider */
	/**/
     $("#slider").layerSlider({
            width : '100%',
            height : '680px',
            responsive : true,
            responsiveUnder : 1920,
            sublayerContainer : 1920,
            autoStart : true,
            pauseOnHover : true,
            firstLayer : 1,
            animateFirstLayer : true,
            randomSlideshow : false,
            twoWaySlideshow : true,
            loops : 0,
            forceLoopNum : true,
            autoPlayVideos : true,
            autoPauseSlideshow : 'auto',
            touchNav : true,
            skin : 'fullwidth',
            skinsPath : 'css/',
            navPrevNext : false,
            showBarTimer : false,
            showCircleTimer : true,
            thumbnailNavigation : 'disabled',
            imgPreload : true,
            yourLogoLink : false,
            yourLogoTarget : '_self',
            cbInit : function(element) { },
            cbStart : function(data) { },
            cbStop : function(data) { },
            cbPause : function(data) { },
            cbAnimStart : function(data) { },
            cbAnimStop : function(data) { },
            cbPrev : function(data) { },
            cbNext : function(data) { }
        });

	$('#slider .next').on('click', function()
	{
		$('#slider').layerSlider('next');
		return false;
	});
	$('#slider .prev').on('click', function()
	{
		$('#slider').layerSlider('prev');
		return false;
	});


	/**/
	/* doctors */
	/**/
	$('#doctors .grid').isotope({
		itemSelector : '.item',
		masonry: {columnWidth: $('#doctors .item').eq(0).outerWidth()}
	});
	$('#doctors .filter').on('change', function()
	{
		$('#doctors .grid').isotope(
	 	{
	 		filter: $(this).val()
		});
	});


	/**/
	/* doctors carousel */
	/**/
	$('#doctors-carousel').owlCarousel({
		items: 4,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: [980,3],
		itemsTabletSmall: [767,2],
		itemsMobile: [479,1],
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: false
  });

	/**/
	/* wellness doctors carousel */
	/**/
	$('#wellness-doctors-carousel').owlCarousel({
		items: 3,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: [980,2],
		itemsTabletSmall: false,
		itemsMobile: [479,1],
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: false
  });

	/**/
	/* news carousel 3 */
	/**/
	/**/
	$('#news-carousel-3').owlCarousel({
		items: 3,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: [980,2],
		itemsTabletSmall: false,
		itemsMobile: [479,1],
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: false
  });

	/* services carousel */
	$('#services-carousel').owlCarousel({
		items: 2,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsTabletSmall: false,
		itemsMobile: [479,1],
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: false
  });
	/* services carousel */

	/**/
	/* news */
	/**/
	var $container = $('#news .grid').isotope({
		itemSelector : '.item',
		masonry: {columnWidth: $('#news .item').outerWidth()}
	});

	// Layout Isotope againe after all images have loaded
	$container.imagesLoaded(function(){
		$container.isotope();
	})
	$('#news').on('click', '.more', function()
	{
		loader = $(this);
		page = $(this).data('page');
		template = $(this).data('template');

		$.get('ajax/' + template + page + '.html').done(function(data)
		{
			$('#news .grid').isotope('insert', $(data));
			loader.data('page', ++page);

			$.get('ajax/' + template + page + '.html').fail(function()
			{
				$('#news .more').addClass('button-disabled');
			});
		}).fail(function()
		{
			$('#news .more').addClass('button-disabled');
		});

		return false;
	});


	/**/
	/* photo tour */
	/**/
	$('#photo-tour .grid').isotope({
		itemSelector : '.item',
		masonry: {columnWidth: $('#photo-tour .item').outerWidth()}
	});
	$('#photo-tour .filter').on('change', function()
	{
		$('#photo-tour .grid').isotope(
	 	{
	 		filter: $(this).val()
		});
	});
	$('#photo-tour').on('click', '.more', function()
	{
		loader = $(this);
		page = $(this).data('page');
		template = $(this).data('template');

		$.get('ajax/' + template + page + '.html').done(function(data)
		{
			$('#photo-tour .grid').isotope('insert', $(data));
			loader.data('page', ++page);

			$.get('ajax/' + template + page + '.html').fail(function()
			{
				$('#photo-tour .more').addClass('button-disabled');
			});
		}).fail(function()
		{
			$('#photo-tour .more').addClass('button-disabled');
		});

		return false;
	});


	/**/
	/* map */
	/**/
	if( document.getElementById('map') )
	{
		var script = document.createElement('script');
	 	script.type = 'text/javascript';
	 	script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=init_map';
	 	document.body.appendChild(script);
 	}


	/**/
	/* widget calendar */
	/**/
	$('#calendar').datepicker({
		prevText: '<i class="fa fa-angle-left"></i>',
		nextText: '<i class="fa fa-angle-right"></i>'
	});


	/**/
	/* widget departments */
	/**/
	$('.widget-departments').on('click', 'dt', function()
	{
		$(this).toggleClass('opened').next().slideToggle('fast');
	});


	/**/
	/* widget contacts */
	/**/
	$('.widget-contacts').on('click', 'dt', function()
	{
		$(this).toggleClass('opened').next().slideToggle('fast');
	});


	/**/
	/* widget comments */
	/**/
	$('#comments-carousel').owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: false,
		slideSpeed: 200,
		paginationSpeed: 200,
		rewindSpeed: 200,
		transitionStyle : 'fade',
		autoHeight: true
  });


	/**/
	/* widget help */
	/**/
	$('#help-carousel').owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		pagination: false,
		slideSpeed: 200,
		paginationSpeed: 200,
		rewindSpeed: 200,
		transitionStyle : 'fade',
		autoHeight: true
  });


	/**/
	/* progress bar */
	/**/
  $('.vc_bar').each(function()
  {
	  $(this).append('<em style="left: ' + $(this).data('value') + '%">' + $(this).data('value') + '%</em>');
  });


	/**/
	/* services */
	/**/
	$('.detailed-services').on('click', 'dt', function()
	{
		$(this).toggleClass('opened').next().slideToggle('fast');
	});
	if( location.hash != '' )
	{
		$('.detailed-services ' + location.hash).trigger('click');
	}


	/**/
	/* chart graph */
	/**/
	if( $(".chart-graph").length )
	{
		var data=[];
		$(".chart-graph").each(function (){
			var sub_arr = $(this).attr("data-coords").split(";");
			for (var i=0;i<sub_arr.length;i+=1){
				sub_arr[i] = sub_arr[i].split("/");
				data[i]=[sub_arr[i][0],sub_arr[i][1]];
			}
			if ($(this).hasClass("type-2"))	{
				$.plot(this, [data], {
					series: {
						bars: {
							show: true,
							barWidth: 0.4,
							align: "center"
						}
					},
					xaxis: {
						mode: "categories",
						tickLength: 0
					},
					grid: {
						borderColor: '#fffff'
					},
					colors: [$(this).attr("data-color")]
				});
			}
			else{

				$.plot(this, [data], {
					points: { show: true },
					lines: { show: true },
					xaxis: {
						color: '#e3e3e3'
					},
					yaxis: {
						color: '#e3e3e3'
					},
					grid: {
						borderColor: '#fffff'
					},
					colors: [$(this).attr("data-color")]
				});
			}
		});
	}

	/**/
	/* chart pie */
	/**/
	if( $(".chart-pie").length )
	{
		var data=[];
		var custom_colors=[];
		$(".chart-pie").each(function (){
			var sub_arr = $(this).attr("data-sections").split(";");
			for (var i=0;i<sub_arr.length;i+=1){
				sub_arr[i] = sub_arr[i].split("/");
				data[i]={
					data:sub_arr[i][0],
					label:""
				}
				custom_colors[i] = sub_arr[i][1];
			}
			$.plot(this, data, {
				series: {
					pie: {
						show: true,
						radius: 1,
						label: {
							show: true,
							radius: 3/4
						}
					}
				},
				legend: {
					show: false
				},
				colors: custom_colors
			});
		});
	}


	/**/
	/* messages */
	/**/
	$('.wpb_alert').on('click', function()
	{
		$(this).fadeOut();
	});



	/**/
	/* back to top */
	/**/
	$('#top-link').click(function()
	{
		$('html, body').animate({scrollTop: 0});
		return false;
	});
});


$(window).load(function()
{
	/**/
	/* benefits */
	/**/
	$('.benefits .text').css('padding-bottom', 51);
	if( $(window).width() > 767 )
	{
		$('.benefits li').each(function()
		{
			if( $(this).outerHeight() < $('.benefits').outerHeight() )
			{
				$(this).find('.text').css('padding-bottom', $('.benefits').outerHeight() - $(this).outerHeight() + 51);
			}
		});
	}
	else if( $(window).width() > 479 )
	{
		$('.benefits li:nth-child(even)').each(function()
		{
			elem = $(this);
			if( elem.outerHeight() < elem.prev().outerHeight() )
			{
				elem.find('.text').css('padding-bottom', elem.prev().outerHeight() - elem.outerHeight() + 51);
			}
			else if( $(this).outerHeight() > $(this).prev().outerHeight() )
			{
				elem.prev().find('.text').css('padding-bottom', elem.outerHeight() - elem.prev().outerHeight() + 51);
			}
		});
	}
});




function contact_form_init(){
		if($('#contactform').length) {

			var $form = $('#contactform'),
			$loader = '<img src="php/preloader.gif" alt="Loading..." />';
			$form.find("fieldset").prepend('<div id="contact_form_responce">');

			var $response = $('#contact_form_responce');
			$response.append("<div class='wpb_alert'><div class='messagebox_text clearfix'><h1></h1><p></p></div></div>");
			$response.css("display","none");

			$form.submit(function(e){
				$response.css("display","block");
				$response.find('p').html($loader);

				var data = {
					action: "contact_form_request",
					values: $("#contactform").serialize()
				};

				//send data to server
				$.post("php/contact-send.php", data, function(response) {

					response = $.parseJSON(response);

					$(".wrong-data").removeClass("wrong-data");
					$response.find('img').remove();

					if(response.is_errors){
						$response.find('.wpb_alert').removeClass().addClass('wpb_alert');
						$.each(response.info,function(input_name, input_label) {

							$("[name="+input_name+"]").addClass("wrong-data");
							$response.find('p').append(input_label+ '</br>');
						});

					} else {
						if(response.info == 'success'){
							$response.find('.wpb_alert').removeClass().addClass('wpb_alert wpb_alert_confirm');
							$response.find('p').append('Your message has been successfully sent!');
								$response.find('p').delay(5000).hide(500, function(){
									$(this).removeClass().text("").fadeIn(500);
									$response.css("display","none");
								})
								$form.find('input:not(input[type="submit"], button), textarea, select').val('').attr( 'checked', false );
						}

						if(response.info == 'server_fail'){
							$response.find('.wpb_alert').removeClass().addClass('wpb_alert wpb_alert_error');
							$response.find('p').append('Server failed. Send later!');
						}
					}

					// Scroll to bottom of the form to show respond message
					var topPosition = $("#contact_form_responce").offset().top;

					if(($(document).scrollTop()-$(document).height()) < topPosition) {
						$('html, body').animate({
							scrollTop : topPosition
						});
					}

					if(!$('#contact_form_responce').css('display') == 'block') {
						$response.show(450);
					}

				});

				e.preventDefault();

			});

		}
}

/* COMPOSER */

function composer_include (){
/*********************************************/
	document.documentElement.className += ' js_active ';
	document.documentElement.className += 'ontouchstart' in document.documentElement ? ' vc_mobile ' : ' vc_desktop ';
	(function(){
	    var prefix = ['-webkit-','-o-','-moz-','-ms-',""];
	    for (var i in prefix) { if(prefix[i]+'transform' in document.documentElement.style) document.documentElement.className += " vc_transform "; }
	})();
	/*
	   On document ready jQuery will fire set of functions.
	   If you want to override function behavior then copy it to your theme js file
	   with the same name.
	*/

	jQuery(window).load(function() {
	    jQuery('.wpb_flexslider').each(function() {
	        var this_element = jQuery(this);
	        var sliderSpeed = 800,
	            sliderTimeout = parseInt(this_element.attr('data-interval'))*1000,
	            sliderFx = this_element.attr('data-flex_fx'),
	            slideshow = true;
	        if ( sliderTimeout == 0 ) slideshow = false;

	        this_element.flexslider({
	            animation: sliderFx,
	            slideshow: slideshow,
	            slideshowSpeed: sliderTimeout,
	            sliderSpeed: sliderSpeed,
	            smoothHeight: true
	        });
	    });

	});
	jQuery(document).ready(function($) {
		vc_twitterBehaviour();
		vc_toggleBehaviour();
		vc_tabsBehaviour();
		vc_accordionBehaviour();
		vc_carouselBehaviour();
		vc_teaserGrid();
		vc_progress_bar();
		vc_waypoints();
	}); // END jQuery(document).ready

	/* Twitter
	---------------------------------------------------------- */
	if ( typeof window['vc_twitterBehaviour'] !== 'function' ) {
		function vc_twitterBehaviour() {
			jQuery('.wpb_twitter_widget .tweets').each(function(index) {
				var this_element = jQuery(this),
					tw_name = this_element.attr('data-tw_name');
					tw_count = this_element.attr('data-tw_count');

				this_element.tweet({
					username: tw_name,
					join_text: "auto",
					avatar_size: 0,
					count: tw_count,
					template: "{avatar}{join}{text}{time}",
					auto_join_text_default: "",
					auto_join_text_ed: "",
					auto_join_text_ing: "",
					auto_join_text_reply: "",
					auto_join_text_url: "",
					loading_text: '<span class="loading_tweets">loading tweets...</span>'
		        });
			});
		}
	}

	/* Progress bar
	---------------------------------------------------------- */
	if ( typeof window['vc_progress_bar'] !== 'function' ) {
	  function vc_progress_bar() {
	    if (typeof jQuery.fn.waypoint !== 'undefined') {

	    	jQuery('.vc_progress_bar').waypoint(function() {
		  		jQuery(this).find('.vc_single_bar').each(function(index) {
		        var $this = jQuery(this),
		            bar = $this.find('.vc_bar'),
		            val = bar.data('percentage-value');

		  		  setTimeout(function(){ bar.css({"width" : val+'%'}); }, index*200);
		    	});
			}, { offset: '85%' });
	    }
	  }
	}

	/* Waypoints magic
	---------------------------------------------------------- */
	if ( typeof window['vc_waypoints'] !== 'function' ) {
	  function vc_waypoints() {
		if (typeof jQuery.fn.waypoint !== 'undefined') {
		    jQuery('.wpb_animate_when_almost_visible').waypoint(function() {
				jQuery(this).addClass('wpb_start_animation');
			}, { offset: '85%' });
		}
	  }
	}

	/* Toggle
	---------------------------------------------------------- */
	if ( typeof window['vc_toggleBehaviour'] !== 'function' ) {
		function vc_toggleBehaviour() {
			jQuery(".wpb_toggle").click(function(e) {
				if ( jQuery(this).hasClass('wpb_toggle_title_active') ) {
					jQuery(this).removeClass('wpb_toggle_title_active').next().slideUp(500);
				} else {
					jQuery(this).addClass('wpb_toggle_title_active').next().slideDown(500);
				}
			});
			jQuery('.wpb_toggle_content').each(function(index) {
				if ( jQuery(this).next().is('h4.wpb_toggle') == false ) {
					jQuery('<div class="last_toggle_el_margin"></div>').insertAfter(this);
				}
			});
		}
	}

	/* Tabs + Tours
	---------------------------------------------------------- */
	if ( typeof window['vc_tabsBehaviour'] !== 'function' ) {
		function vc_tabsBehaviour() {
	            jQuery(function($){$(document.body).off('click.preview', 'a')});
	            jQuery('.wpb_tabs, .wpb_tour').each(function(index) {
	                var $tabs,
	                    interval = jQuery(this).attr("data-interval"),
	                    tabs_array = [];
	                //
	                $tabs = jQuery(this).find('.wpb_tour_tabs_wrapper').tabs({
	                    show: function(event, ui) {wpb_prepare_tab_content(event, ui);},
	                    activate: function(event, ui) {wpb_prepare_tab_content(event, ui);}
	                    }).tabs('rotate', interval*1000);

	                jQuery(this).find('.wpb_tab').each(function(){ tabs_array.push(this.id); });

	                jQuery(this).find('.wpb_tab a[href^="#"]').click(function(e) {
	                    e.preventDefault();
	                    if ( jQuery.inArray( jQuery(this).attr('href'), tabs_array) ) {
	                        $tabs.tabs("select", jQuery(this).attr('href'));
	                        return false;
	                    }
	                });

	                jQuery(this).find('.wpb_prev_slide a, .wpb_next_slide a').click(function(e) {
	                    e.preventDefault();
	                    var ver = jQuery.ui.version.split('.');
	                    if(parseInt(ver[0])==1 &&  parseInt(ver[1]) < 9) {
	                        var index = $tabs.tabs('option', 'selected');
	                        if ( jQuery(this).parent().hasClass('wpb_next_slide') ) { index++; }
	                        else { index--; }
	                        if ( index < 0 ) { index = $tabs.tabs("length") - 1; }
	                        else if ( index >= $tabs.tabs("length") ) { index = 0; }
	                        $tabs.tabs("select", index);
	                    } else {
	                        var index = $tabs.tabs( "option", "active"),
	                            length = $tabs.find('.wpb_tab').length;

	                        if ( jQuery(this).parent().hasClass('wpb_next_slide') ) {
	                            index = (index+1) >=length ? 0 : index+1;
	                        } else {
	                            index = index-1 < 0 ? length -1 : index-1;
	                        }

	                        $tabs.tabs( "option", "active", index );
	                    }

	                });

	            });
		}
	}

	/* Tabs + Tours
	---------------------------------------------------------- */
	if ( typeof window['vc_accordionBehaviour'] !== 'function' ) {
		function vc_accordionBehaviour() {
			jQuery('.wpb_accordion').each(function(index) {
				var $tabs,
					interval = jQuery(this).attr("data-interval"),
	                active_tab = !isNaN(jQuery(this).data('active-tab')) && parseInt(jQuery(this).data('active-tab')) >  0 ? parseInt(jQuery(this).data('active-tab'))-1 : false,
	                collapsible =  active_tab === false || jQuery(this).data('collapsible') === 'yes';
				//
				$tabs = jQuery(this).find('.wpb_accordion_wrapper').accordion({
					header: "> div > h3",
					autoHeight: false,
	                heightStyle: "content",
	                active: active_tab,
	                collapsible: collapsible,
	                navigation: true,
	                change: function(event, ui){
	                    if(jQuery.fn.isotope!=undefined) {
	                        ui.newContent.find('.isotope').isotope("reLayout");
	                    }
	                    vc_carouselBehaviour();
	                }
				});
				//.tabs().tabs('rotate', interval*1000, true);
			});
		}
	}

	/* Teaser grid: isotope
	---------------------------------------------------------- */
	if ( typeof window['vc_teaserGrid'] !== 'function' ) {
		function vc_teaserGrid() {
	        var layout_modes = {
	            fitrows: 'fitRows',
	            masonry: 'masonry'
	        }
	        jQuery('.wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)').each(function(){
	            var $container = jQuery(this);
	            var $thumbs = $container.find('.wpb_thumbnails');
	            var layout_mode = $thumbs.attr('data-layout-mode');
	            $thumbs.isotope({
	                // options
	                itemSelector : '.isotope-item',
	                layoutMode : (layout_modes[layout_mode]==undefined ? 'fitRows' : layout_modes[layout_mode])
	            });
	            $container.find('.categories_filter a').data('isotope', $thumbs).click(function(e){
	                e.preventDefault();
	                var $thumbs = jQuery(this).data('isotope');
	                jQuery(this).parent().parent().find('.active').removeClass('active');
	                jQuery(this).parent().addClass('active');
	                $thumbs.isotope({filter: jQuery(this).attr('data-filter')});
	            });
	            jQuery(window).bind('load resize', function() {
	                $thumbs.isotope("reLayout");
	            });
	        });

			var isotope = jQuery('.wpb_grid ul.thumbnails');
			if ( isotope.length > 0 ) {
				isotope.isotope({
					// options
					itemSelector : '.isotope-item',
					layoutMode : 'fitRows'
				});
				jQuery(window).load(function() {
					isotope.isotope("reLayout");
				});
			}
		}
	}

	function loadScript(url, $obj, callback){

	    var script = document.createElement("script")
	    script.type = "text/javascript";

	    if (script.readyState){  //IE
	        script.onreadystatechange = function(){
	            if (script.readyState == "loaded" ||
	                script.readyState == "complete"){
	                script.onreadystatechange = null;
	                callback();
	            }
	        };
	    } else {
	    }

	    script.src = url;
	    $obj.get(0).appendChild(script);
	}

	/**
	 * Prepare html to correctly display inside tab container
	 *
	 * @param event - ui tab event 'show'
	 * @param ui - jquery ui tabs object
	 */

	function wpb_prepare_tab_content(event, ui) {
	    var panel = ui.panel || ui.newPanel;
	    vc_carouselBehaviour();
	    var $ui_panel = jQuery(panel).find('.isotope'),
	        $google_maps = jQuery(panel).find('.wpb_gmaps_widget');
	    if ($ui_panel.length > 0) {
		    $ui_panel.isotope("reLayout");
	    }

	    if($google_maps.length && !$google_maps.is('.map_ready')) {
	        var $frame = $google_maps.find('iframe');
	        $frame.attr('src', $frame.attr('src'));
	        $google_maps.addClass('map_ready');
	    }
	}
  function vc_carouselBehaviour() {
    jQuery(".wpb_carousel").each(function() {
            var $this = jQuery(this);
            if($this.data('carousel_enabled') !== true && $this.is(':visible')) {
                $this.data('carousel_enabled', true);
                var carousel_width = jQuery(this).width(),
                    visible_count = getColumnsCount(jQuery(this)),
                    carousel_speed = 500;
                if ( jQuery(this).hasClass('columns_count_1') ) {
                    carousel_speed = 900;
                }
                /* Get margin-left value from the css grid and apply it to the carousele li items (margin-right), before carousele initialization */
                var carousele_li = jQuery(this).find('.wpb_thumbnails-fluid li');
                carousele_li.css({"margin-right": carousele_li.css("margin-left"), "margin-left" : 0 });

                jQuery(this).find('.wpb_wrapper:eq(0)').jCarouselLite({
                    btnNext: jQuery(this).find('.next'),
                    btnPrev: jQuery(this).find('.prev'),
                    visible: visible_count,
                    speed: carousel_speed
                })
                    .width('100%');//carousel_width

                var fluid_ul = jQuery(this).find('ul.wpb_thumbnails-fluid');
                fluid_ul.width(fluid_ul.width()+300);

                jQuery(window).resize(function() {
                    var before_resize = screen_size;
                    screen_size = getSizeName();
                    if ( before_resize != screen_size ) {
                        window.setTimeout('location.reload()', 20);
                    }
                });
            }

    });
        /*
        if(jQuery.fn.bxSlider !== undefined ) {
            jQuery('.bxslider').each(function(){
               var $slider = jQuery(this);
               $slider.bxSlider($slider.data('settings'));
            });
        }
        */
        if(window.Swiper !== undefined) {

            jQuery('.swiper-container').each(function(){
                var $this = jQuery(this),
                    my_swiper,
                    max_slide_size = 0,
                    options = jQuery(this).data('settings');

                    if(options.mode === 'vertical') {
                        $this.find('.swiper-slide').each(function(){
                            var height = jQuery(this).outerHeight(true);
                            if(height > max_slide_size) max_slide_size = height;
                        });
                        $this.height(max_slide_size);
                        $this.css('overflow', 'hidden');
                    }
                    jQuery(window).resize(function(){
                        $this.find('.swiper-slide').each(function(){
                            var height = jQuery(this).outerHeight(true);
                            if(height > max_slide_size) max_slide_size = height;
                        });
                        $this.height(max_slide_size);
                    });
                    my_swiper = jQuery(this).swiper(jQuery.extend(options, {
                    onFirstInit: function(swiper) {
                        if(swiper.slides.length < 2) {
                            $this.find('.vc-arrow-left,.vc-arrow-right').hide();
                        } else if(swiper.activeIndex === 0  && swiper.params.loop !== true) {
                            $this.find('.vc-arrow-left').hide();
                        } else {
                            $this.find('.vc-arrow-left').show();
                        }
                    },
                    onSlideChangeStart: function(swiper) {
                        if(swiper.slides.length > 1 && swiper.params.loop !== true) {
                            if(swiper.activeIndex === 0) {
                                $this.find('.vc-arrow-left').hide();
                            } else {
                                $this.find('.vc-arrow-left').show();
                            }
                            if(swiper.slides.length-1 === swiper.activeIndex) {
                                $this.find('.vc-arrow-right').hide();
                            } else {
                                $this.find('.vc-arrow-right').show();
                            }
                        }
                    }
                }));
                $this.find('.vc-arrow-left').click(function(e){
                    e.preventDefault();
                    my_swiper.swipePrev();
                });
                $this.find('.vc-arrow-right').click(function(e){
                    e.preventDefault();
                    my_swiper.swipeNext();
                });
                my_swiper.reInit();
            });

        }

	}

/********************************************/
}
/* COMPOSER */

function milestone_counter (){
	if (!is_mobile()){
		$(".milestone").each(function (){
			if ($(this).attr("data-counted")!="yes"){
				var el = this;
				if (is_visible(el)){
					$(el).attr("data-counted","yes");
					var str_count = $(el).find(".title").text();
					var count = parseInt(str_count);
					var digits = 0;
					var digits = str_count.length;
					var i = 0;
					var str_i = "";
					for (var k=0;k<digits;k+=1){
						str_i = str_i+"0";
					}
					var flag = false;
					var timer = setInterval(function (){
						for (var j=0;j<digits-1;j+=1){
							if (parseInt(str_i.charAt(digits-1-j)) != parseInt(str_count.charAt(digits-1-j))){
								var number = Math.pow(10,j);
								i+=number;
								flag = true;
							}
							if (parseInt(str_i.charAt(0))<parseInt(str_count.charAt(0))){
								var number = Math.pow(10,digits-2);
								i+=number;
								flag = true;
							}
						}
						if (flag == true){
							str_i = String(i);
							$(el).find(".title").text(str_i);
						}
						flag = false;
						if (i>=count){
							clearInterval(timer);
						}
					},85);
				}
			}
		});
	}
}
function progress_bar_loader (){
	if (!is_mobile()){
			$(".vc_bar").each(function(){
				var el = this;
				if (is_visible(el)){
					if ($(el).attr("processed")!="true"){
						$(el).css("width","0%");
						$(el).attr("processed","true");
						var val = parseInt($(el).attr("data-value"));
						var fill = 0;
						var timer = setInterval(function (){
							if (fill<val){
								fill += 1;
								$(el).css("width",String(fill)+"%");
								var ind = $(el).find("em");
								$(ind).text(fill+"%");
								ind.css("left",String(fill)+"%");
							}
						},10);
					}
				}
			});
		}
	else{
			$(".vc_bar").each(function(){
				var el=this;
				var fill = $(el).attr("data-value");
				$(el).css('width',fill+'%');
			});
	}

}

function is_visible (el){
	var w_h = $(window).height();
	var dif = $(el).offset().top - document.body.scrollTop;
	if ((dif > 0) && (dif<w_h)){
		return true;
	}
	else{
		return false;
	}

}
function chart_circle_init (){
	var animate;
	if (is_mobile()){
		animate = false
	}
	else{
		animate=2000;
	}
	$('.chart-circle').each(function (){
		if (is_visible(this)){
			$(this).append("<span class='value' style='color:"+$(this).attr("data-color")+"'>"+$(this).attr("data-percent")+"%"+"</span>")
			if ($(this).hasClass("type-2")){
			    $(this).easyPieChart({
			        animate: animate,
			        lineWidth: 20,
			        size: 250,
			        scaleColor:'#fff',
			        trackColor:'#e2e2e2',
			        barColor:$(this).attr("data-color"),
			        lineCap:'butt'
			    });
			}
			else if ($(this).hasClass("type-3")){
			    $(this).easyPieChart({
			        animate: animate,
			        lineWidth: 10,
			        size: 250,
			        scaleColor:'#fff',
			        trackColor:'#e2e2e2',
			        barColor:$(this).attr("data-color"),
			        lineCap:'butt'
			    });
			}
			else{
			    $(this).easyPieChart({
			        animate: animate,
			        lineWidth: 40,
			        size: 250,
			        scaleColor:'#fff',
			        trackColor:'#e2e2e2',
			        barColor:$(this).attr("data-color"),
			        lineCap:'butt'
			    });
			}
		}
	});

    //update instance after 5 sec
}
function is_mobile (){
		if (($(window).width()<767) || (navigator.userAgent.match(/(iPhone|iPod|iPad)/))){
			return true;
		}
		else{
			return false;
		}
}
/*work*/


function sticky (){
	var sticky_container = $(".sticky-container")
	var sticky = $(".sticky")
	var sticky_height = $(".sticky").outerHeight();
	var offset_top_sticky = sticky.offset().top
	if ($(window).width()>767) {
		if (!$(".sticky>.sticky-container").hasClass("second-sticky")) {
			$(sticky).append($(sticky_container)[0].outerHTML)
		}
		$(sticky).find(">.sticky-container").addClass("second-sticky");
		$(window).scroll(function (){
			if (jQuery(document).scrollTop()>(offset_top_sticky + (2*sticky_height))) {
				$(sticky).addClass("show");
			}else{
				$(sticky).removeClass("show");
			}
			if ($(window).width()<767){
				$(sticky).removeClass("show");
			}
		});
	}else{
		$(sticky).removeClass("show")
		$(".sticky>.sticky-container").remove()
	}
}
