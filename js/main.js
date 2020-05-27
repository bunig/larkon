jQuery(function($){
	"use strict";

    // Slider Main Block
    if($('.slider_main').length){
		$('.slider_main').slick({
			arrows: true,
            dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 7000,
            appendArrows: $('.nav_main_slider'),
			prevArrow: "<span class=\"top\"><i class=\"fas fa-chevron-left\"></i></span>",
			nextArrow: "<span class=\"down\"><i class=\"fas fa-chevron-right\"></<i></span>",
		});
	}
	
	// Slider Portfolio
    if($('.slick_posrtfolio').length){
		$('.slick_posrtfolio').slick({
			arrows: true,
            dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 7000,
            appendArrows: $('.nav_slick'),
			prevArrow: "<span class=\"top\"><i class=\"fas fa-chevron-left\"></i></span>",
			nextArrow: "<span class=\"down\"><i class=\"fas fa-chevron-right\"></<i></span>",
			responsive: [
			    {
			      breakpoint: 780,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
				},
				{
					breakpoint: 480,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1
					}
				  }
			]
		});
	}
	
	// Open Menu Mobail 
	$('#openMenu').on('click', function() {
		$('.header_mobail').css({
			'left':'0px',
			'transition':'all 300ms'
		});
	});
	$('#openClose').on('click', function() {
		$('.header_mobail').css({
			'left':'500px',
			'transition':'all 300ms'
		});
	});

	// Tabs Header
	$('#buttonWomanPrice').on('click', function() {
		$('#buttonWomanPrice').addClass('active');
		$('#buttonManPrice').removeClass('active');
		$('#manPrice').css({
			'display':'none'
		});
		$('#womanPrice').css({
			'display':'flex'
		});
	})
	$('#buttonManPrice').on('click', function() {
		$('#buttonWomanPrice').removeClass('active');
		$('#buttonManPrice').addClass('active');
		$('#manPrice').css({
			'display':'flex'
		});
		$('#womanPrice').css({
			'display':'none'
		});
	})

	// Tabs Open Price
	$('#man1').on('click', function() {
		$('#manPrice1').css({
			'display':'block'
		});
		$('#manPrice2').css({
			'display':'none'
		});
		$('#manPrice3').css({
			'display':'none'
		});
		$('#manPrice4').css({
			'display':'none'
		});
		$('#womanPrice1').css({
			'display':'none'
		});
		$('#womanPrice2').css({
			'display':'none'
		});
		$('#womanPrice3').css({
			'display':'none'
		});
		$('#womanPrice4').css({
			'display':'none'
		});
		$('#womanPrice5').css({
			'display':'none'
		});
	});

	$('#man2').on('click', function() {
		$('#manPrice1').css({
			'display':'none'
		});
		$('#manPrice2').css({
			'display':'block'
		});
		$('#manPrice3').css({
			'display':'none'
		});
		$('#manPrice4').css({
			'display':'none'
		});
		$('#womanPrice1').css({
			'display':'none'
		});
		$('#womanPrice2').css({
			'display':'none'
		});
		$('#womanPrice3').css({
			'display':'none'
		});
		$('#womanPrice4').css({
			'display':'none'
		});
		$('#womanPrice5').css({
			'display':'none'
		});
	});

	$('#man3').on('click', function() {
		$('#manPrice1').css({
			'display':'none'
		});
		$('#manPrice2').css({
			'display':'none'
		});
		$('#manPrice3').css({
			'display':'block'
		});
		$('#manPrice4').css({
			'display':'none'
		});
		$('#womanPrice1').css({
			'display':'none'
		});
		$('#womanPrice2').css({
			'display':'none'
		});
		$('#womanPrice3').css({
			'display':'none'
		});
		$('#womanPrice4').css({
			'display':'none'
		});
		$('#womanPrice5').css({
			'display':'none'
		});
	});

	$('#man4').on('click', function() {
		$('#manPrice1').css({
			'display':'none'
		});
		$('#manPrice2').css({
			'display':'none'
		});
		$('#manPrice3').css({
			'display':'none'
		});
		$('#manPrice4').css({
			'display':'block'
		});
		$('#womanPrice1').css({
			'display':'none'
		});
		$('#womanPrice2').css({
			'display':'none'
		});
		$('#womanPrice3').css({
			'display':'none'
		});
		$('#womanPrice4').css({
			'display':'none'
		});
		$('#womanPrice5').css({
			'display':'none'
		});
	});

	$('#woman1').on('click', function() {
		$('#manPrice1').css({
			'display':'none'
		});
		$('#manPrice2').css({
			'display':'none'
		});
		$('#manPrice3').css({
			'display':'none'
		});
		$('#manPrice4').css({
			'display':'none'
		});
		$('#womanPrice1').css({
			'display':'block'
		});
		$('#womanPrice2').css({
			'display':'none'
		});
		$('#womanPrice3').css({
			'display':'none'
		});
		$('#womanPrice4').css({
			'display':'none'
		});
		$('#womanPrice5').css({
			'display':'none'
		});
		$('html,body').stop().animate({ scrollTop: $('#womanPrice1').offset().top }, 1000);
	});

	$('#woman2').on('click', function() {
		$('#manPrice1').css({
			'display':'none'
		});
		$('#manPrice2').css({
			'display':'none'
		});
		$('#manPrice3').css({
			'display':'none'
		});
		$('#manPrice4').css({
			'display':'none'
		});
		$('#womanPrice1').css({
			'display':'none'
		});
		$('#womanPrice2').css({
			'display':'block'
		});
		$('#womanPrice3').css({
			'display':'none'
		});
		$('#womanPrice4').css({
			'display':'none'
		});
		$('#womanPrice5').css({
			'display':'none'
		});
		$('html,body').stop().animate({ scrollTop: $('#womanPrice2').offset().top }, 1000);
	});

	$('#woman3').on('click', function() {
		$('#manPrice1').css({
			'display':'none'
		});
		$('#manPrice2').css({
			'display':'none'
		});
		$('#manPrice3').css({
			'display':'none'
		});
		$('#manPrice4').css({
			'display':'none'
		});
		$('#womanPrice1').css({
			'display':'none'
		});
		$('#womanPrice2').css({
			'display':'none'
		});
		$('#womanPrice3').css({
			'display':'block'
		});
		$('#womanPrice4').css({
			'display':'none'
		});
		$('#womanPrice5').css({
			'display':'none'
		});
		$('html,body').stop().animate({ scrollTop: $('#womanPrice3').offset().top }, 1000);
	});

	$('#woman4').on('click', function() {
		$('#manPrice1').css({
			'display':'none'
		});
		$('#manPrice2').css({
			'display':'none'
		});
		$('#manPrice3').css({
			'display':'none'
		});
		$('#manPrice4').css({
			'display':'none'
		});
		$('#womanPrice1').css({
			'display':'none'
		});
		$('#womanPrice2').css({
			'display':'none'
		});
		$('#womanPrice3').css({
			'display':'none'
		});
		$('#womanPrice4').css({
			'display':'block'
		});
		$('#womanPrice5').css({
			'display':'none'
		});
		$('html,body').stop().animate({ scrollTop: $('#womanPrice4').offset().top }, 1000);
	});

	$('#woman5').on('click', function() {
		$('#manPrice1').css({
			'display':'none'
		});
		$('#manPrice2').css({
			'display':'none'
		});
		$('#manPrice3').css({
			'display':'none'
		});
		$('#manPrice4').css({
			'display':'none'
		});
		$('#womanPrice1').css({
			'display':'none'
		});
		$('#womanPrice2').css({
			'display':'none'
		});
		$('#womanPrice3').css({
			'display':'none'
		});
		$('#womanPrice4').css({
			'display':'none'
		});
		$('#womanPrice5').css({
			'display':'block'
		});
		$('html,body').stop().animate({ scrollTop: $('#womanPrice5').offset().top }, 1000);
	});

	const button = $('.header_mobail ul li a');

	button.on('click', function() {
		$('.header_mobail').css({
			'left':'500px',
			'transition':'all 300ms'
		});
	});

});


$(document).ready(function() {
   var margin = 100; // переменная для контроля докрутки
   $("a").click(function() { // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 800, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });
});

function closeModal() {
	$('.modal').hide(300);
}

function openModal(id) {
	$(`#modal${id}`).show(300);
}