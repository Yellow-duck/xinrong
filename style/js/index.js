;(function () {
	'use strict';
	var sliderMain = function() {
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "slide",
			slideshowSpeed: 5000,
			directionNav: true
	  	});

	};

	$(function(){
		sliderMain();	
		//内容加载后的运动效果
	    dataAnimate();	
		
		 $(".owl-carousel-carousel").owlCarousel({
			  autoPlay: 3000,
			  items : 5,
			  navigation:true,
			  pagination:false,
			  itemsDesktop : [1199,5],
			  itemsDesktopSmall : [979,4],
			  itemsTablet : [768,3],
			  itemsMobile: [479,2],
		  });

	});


}());
