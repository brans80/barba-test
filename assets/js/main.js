var $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320;

$(document).ready(function ($) {
	$body = $('body');
	$mainTitle = $('.section_title');
	$mainTitle = $('.section_title');
	$mainContent = $('.js-main');
	$nav = $('.header_nav_w');

	barba.init({

		transitions: [{
			appear(data) { // Хук перехода с null на страницу
				let path = data.current.url.path;
				let $curLink = $nav.find("[href='" + path + "']");
				$curLink.addClass('active_mod');
				let tl = new TimelineMax({});
				tl
					.from($mainContent, 1.2, {
						autoAlpha: 0,
						scale: 1.3,
					});
			},

			before(data) { // Хук выполняется перед всеми действиями
				$('.header_nav_link').addClass('disabled_mod').removeClass('active_mod');
				let path = data.next.url.path;
				let $curLink = 	$(data.trigger);
				$curLink.addClass('active_mod');
			},

			after(data) { // Хук выполняется после всех действий
				$('.header_nav_link').removeClass('disabled_mod');
			},

			leave(data) { // Хук ухода со страницы
				let $container = $(data.current.container)
				let $title = $container.find('.section_title');
				let $text = $container.find('.section_text');
				let $bg = $container.find('.section_bg');

				var done = this.async();
				var tl = new TimelineMax({});

				tl
					.to([$title], 0.4, {
						autoAlpha: 0,
						y: -100,
					})
					.to([$text], 0.4, {
						autoAlpha: 0,
						y: 100,
					}, -0.6)
					.to($bg, 0.6, {
						autoAlpha: 0,
						scale: 1.5,
					})
					.to($container, 0.2, {
						autoAlpha: 0,
						onComplete: done,
					});
			},
			enter(data) { // Хук входа на  страницу
				let $container = $(data.next.container);
				let $title = $container.find('.section_title');
				let $text = $container.find('.section_text');
				let $bg = $container.find('.section_bg');

				console.log(data.target);

				var done = this.async();
				var tl = new TimelineMax({
					onComplete: done,
				});

				tl
					.from($container, 0.3, {
						autoAlpha: 0,
					})
					.from($bg, 0.6, {
						autoAlpha: 0,
						scale: 1.5,
					})
					.from([$title], 0.4, {
						autoAlpha: 0,
						y: -100,
					})
					.from([$text], 0.4, {
						autoAlpha: 0,
						y: 100,
					});
			},
		}, ],
	});

	//developer funcitons
	// pageWidget(['index']);
	// getAllClasses('html','.elements_list');
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {}

function resizeFunc() {
	updateSizes();
}

function scrollFunc() {}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
			(image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

			image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
		});
	});
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}