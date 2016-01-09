$(document).ready(function() {

	var xAnimationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	
	var headerSwiper = new Swiper('.splash.swiper-container', {
		autoplay: 2000,
		autoplayDisableOnInteraction: false,
		loop: true,
		effect: 'fade',
	});

	var galleryTop = new Swiper('.gallery-top', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 0,
		keyboardControl: true,
	});

	headerSwiper.stopAutoplay();

	$('body')
	.on('click', '.splash .arrow-down, .section-splash', function() {
		$('body').animate({
			scrollTop: $('.section-about').offset().top,
		}, function() {
			$('.header a[href="#section-about"]').click();
		});
	})
	.on('click', '.more', function() {
		var slide = $(this).closest('.swiper-slide');
		slide.addClass('overlay').find('.box').fadeIn()
		slide.find('.more').fadeOut();
		$('.header, .gallery-top .swiper-button-next, .gallery-top .swiper-button-prev').fadeOut();
		galleryTop.lockSwipes()
	}).on('click', '.less, .overlay', function() {
		var slide = $(this).closest('.swiper-slide')
		slide.removeClass('overlay').find('.box').fadeOut();
		slide.find('.more').fadeIn();
		$('.header, .gallery-top .swiper-button-next, .gallery-top .swiper-button-prev').fadeIn();
		galleryTop.unlockSwipes()
	})
	.on('click', 'a[lang]', function() {
		var lang = $(this).attr('lang');

		$('['+lang+']').each(function(i, item) {
			$(item).text($(item).attr(lang));
		});

		$('[only]').each(function(i, item) {
			if( $(item).attr('only') == lang ) {
				$(item).show();
			} else {
				$(item).hide();
			}
		});

		$('a[lang]').show();
		$('a[lang="'+lang+'"]').hide();

	})
	.on('click', '.header a', function(event) {

		event.preventDefault();

		var e = $(this);

		if(e.attr('href') && e.attr('href')[0] == '#') {

			var target = $('.' + e.attr('href').substr(1));

			$('.header .active').removeClass('active');
			e.addClass('active');

			$('body').animate({
				scrollTop: target.offset().top,
			}, function() {
				if( target.hasClass('with-header') ) {
					$('.header').fadeIn();
					$('.header').animate({ opacity: e.attr('href').substr(1) == 'section-work' ? 0.5 : 1 });
				} else {
					$('.header').fadeOut();
				}
			});	
		}
	});


	$('.header a[lang="en"]').click();
	$('.header').hide();
	$('body').animate({ scrollTop: 0 });
	$('.section-work .box').hide();

	$('.details h1').addClass('animated fadeOut').one(xAnimationEnd, function() {
		$('.details').addClass('animated fadeOut').one(xAnimationEnd, function() {
			$('.details').remove();
			headerSwiper.startAutoplay();
		});
	});

});