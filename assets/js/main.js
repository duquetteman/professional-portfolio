const express = require("express");
const compression = require("compression");
const app = express();
app.use(compression())

function initLazyImages() {
	// Gather all of our images into a variable
	const lazyImages = document.querySelectorAll(".lazy-image"); 
	function onIntersection(imageEntities) {
	  imageEntities.forEach(image => {
		// When the image begins to intersect viewport, execute the if code block
		if (image.isIntersecting) {
		  // Now that it is in viewport, we do not need to observe it anymore.
		  observer.unobserve(image.target);
		  // Set the image src to the image that has entered viewport.
		  image.target.src = image.target.dataset.src;
		}
	  });
	}
	// Create a new instance of Intersection Observer
	const observer = new IntersectionObserver(onIntersection);
	// Observe all images on load.
	lazyImages.forEach(image => observer.observe(image));
  }

	(function ($) {

		var $window = $(window),
			$body = $('body'),
			$nav = $('#nav');

		// Breakpoints.
		breakpoints({
			xlarge: ['1281px', '1680px'],
			large: ['981px', '1280px'],
			medium: ['737px', '980px'],
			small: [null, '736px']
		});

		// Play initial animations on page load.
		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-preload');
			}, 100);
		});

		// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function () { return $nav.height(); }
		});

	})(jQuery);