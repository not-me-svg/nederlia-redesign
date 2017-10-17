/* DOCUMENT READY */
$(document).ready(function() {

	$(window).scroll(function(){                          
        if ($(this).scrollTop() > 800) {
            $('.menu-fixed-button span').addClass('fixed');
        } else {
            $('.menu-fixed-button span').removeClass('fixed');
        }



        $(".case, .photo").each(function(i) {
      
			var objectBottom = $(this).offset().top;
		  	var windowBottom = $(window).scrollTop() + $(window).innerHeight();
		  
		  	if (objectBottom < windowBottom) { 
		    	$(this).delay(i*100).queue(function (next) {
		   		$(this).addClass('visible');
		    	next();
		  	});       
		  	} else  { 
		    	$(this).removeClass("visible");
		  	}
		});
    });

	/* DOCUMENT RESIZE */
	$(window).bind('resize', function() {	

	});

    // MICROINTERACTIONS
    $(window).scroll(function() {
      $('.animated').each(function(){
        if ($(this).visible( true )) {
          $(this).addClass('visible');  
        } else {
          $(this).removeClass('visible');
        }
      });
    });

	/* BACKSTRETCH */
	$.backstretch("img/main_bg.jpg");

	/* PARALLAX */
	$('.parallax').parallax({imageSrc: 'img/parallax-1.jpg'});

	$('.app-stores').parallax({imageSrc: 'img/parallax-2.jpg'});

	/* SMOOTH SCROLL */
	smoothScroll.init({
		speed: 1500, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutQuart', // Easing pattern to use
		offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
	});

	/* BIG SLIDE */
	$('.menu-link').bigSlide({
		easyClose: true,
		side: 'right',
		menuWidth: '300px',
		afterOpen: function() {
			$('.main-navigation span,.menu-fixed-button span').removeClass('ion-android-menu').addClass('ion-android-close');
			$('.panel').css('box-shadow','-5px 0 10px 0 rgba(0,0,0,.1),-5px 0 30px 0 rgba(0,0,0,.20)');
			},
		afterClose: function() {
			$('.main-navigation span,.menu-fixed-button span').removeClass('ion-android-close').addClass('ion-android-menu');
			$('.panel').css('box-shadow','');
		}
	});

	/* SLICK SLIDER */
	$('.slider-customers-box').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider-clients-box').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider-news-box').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
	});

	$('.team-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4
	});

	// MAGNIFIC POPUP
	$('.popup-link').magnificPopup({
		type:'inline',
		midClick: false,
		removalDelay: 300,
		fixedContentPos: true,
   		fixedBgPos: true,
		mainClass: 'mfp-fade'
	});

	// TWEETIE
	$('.followus .boxes').twittie({
		username: 'nederlia',
		count: 3,
		dateFormat: '%d %b %Y',
		hideReplies: true,
		template: '<p>{{screen_name}} {{tweet}} <span>&mdash; {{date}}</span></p>',
		apiPath: 'js/api/tweet.php'
	});

	/* TEAM MEMBER HOVER */
	$('.team-member .img-container').hover(function() {
		$(this).children('.team-member-mask').toggleClass('active');
	});

	/* COUNTER NUMBERS */
	$('.count').counterUp({
	    delay: 10,
	    time: 1000
	});
	
	/* FORM */
	$('.popup .btn').click(function() {
		$('.form__error').toggleClass('active');
	});
});
