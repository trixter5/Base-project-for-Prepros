

$(function () {
	$('.section--block-8__sliderNav').slick({
		slidesToScroll: 1,
		slidesToShow: 4,
		arrows: false,
		dots: false,
		centerPadding: 50,
		asNavFor: '.section--block-8__slider',
		infinite: true,
		//zIndex: 400,
		// fade: true,
		// useTransform: true,
		// initialSlide: 0
		// mobileFirst: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			}
			// {
			// 	breakpoint: 320,
			// 	settings: {
			// 		slidesToShow: 2
			// 	}
			// }
				
		]
	});
	$('.section--block-8__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		centerMode: true,
		variableWidth: false,
		centerPadding: 0,
		asNavFor: '.section--block-8__sliderNav',
		infinite: true,
		zIndex: 1001
		// fade: true,
		// useTransform: true,
		// initialSlide: 1

	});

	$('.section--block-7_tabs-nav a').on('click', function(e) {
		var tab = $($(this).attr('href'));
		var stock = $(this).attr('rel');
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');

		tab.addClass('active');
		tab.siblings().removeClass('active');
		$('.stock').html(stock);
	});
});