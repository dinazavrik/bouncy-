;
(function ($) {

	$(document).ready(function () {

		var $gridImg = $('.isotope').isotope({
			itemSelector: ".item",
            percentPosition: true,
			layoutMode: 'masonry',
			masonry: {
				columnWidth: 270,
				gutter: 5
			}
		});

		$("#filters button").click(function () {
			var $this = $(this);
			if (!$this.hasClass("is-checked")) {
				$this.parents("#options").find(".is-checked").removeClass("is-checked");
				$this.addClass("is-checked");
			}
			var selector = $this.attr("data-filter");
			$gridImg.isotope({
				filter: selector
			});
		});


		$('a[href*="#"]').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
				location.hostname == this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
				}
			}
		});

        $('.menu-icon').on('click', function () {
            $(this).toggleClass('menu-icon--open');
            $('.menu').toggleClass('menu--show');
        });


		$('.team__slider').slick({
			dots: true
		});

		$('.testimonials__slider').slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000
		});

	});
})(jQuery);
