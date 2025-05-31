jQuery(document).ready(function(){ 

	"use strict";
		// Preloader
		$(window).on("load", function () {
			$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
			$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(333);
			injectImages();
		});

		setTimeout(
		    function() {
		      var tabs = $('#menu-filter li a');
			var firstTab = tabs.first();
			firstTab.click();
			//console.log("Done2");
		    }, 10000);

		function injectImages(){
			let arr = ['img/portfolio/aea (1).png', 'img/portfolio/aea (2).png', 'img/portfolio/aea (3).png', 'img/portfolio/aea (4).png', 'img/portfolio/aea (5).png', 'img/portfolio/aea (6).png', 'img/portfolio/app (1).jpg', 'img/portfolio/app (2).jpg', 'img/portfolio/app (3).jpg', 'img/portfolio/app (4).jpg', 'img/portfolio/app (5).jpg', 'img/portfolio/app (6).jpg', 'img/portfolio/triplyte (1).jpg', 'img/portfolio/triplyte (2).jpg', 'img/portfolio/triplyte (3).jpg', 'img/portfolio/triplyte (4).jpg', 'img/portfolio/triplyte (5).jpg', 'img/portfolio/triplyte (6).jpg', 'img/portfolio/myweb (1).png', 'img/portfolio/myweb (2).png', 'img/portfolio/myweb (3).png', 'img/portfolio/social (1).png', 'img/portfolio/social (2).png', 'img/portfolio/social (3).png', 'img/portfolio/social (4).png', 'img/portfolio/ai (1).jpg', 'img/portfolio/ai (2).jpg', 'img/portfolio/ai (3).jpg', 'img/portfolio/ai (4).jpg', 'img/portfolio/ai (5).jpg', 'img/portfolio/ai (6).jpg', 'img/portfolio/ai (7).jpg', 'img/portfolio/ai (8).jpg', 'img/portfolio/ai (9).jpg', 'img/portfolio/ai (10).jpg', 'img/portfolio/ai (11).jpg', 'img/portfolio/ai (12).jpg', 'img/portfolio/ai (13).jpg', 'img/portfolio/ai (14).jpg', 'img/portfolio/ai (15).jpg', 'img/portfolio/ai (16).jpg', 'img/portfolio/ai (17).jpg', 'img/portfolio/bio (1).png', 'img/portfolio/bio (2).png', 'img/portfolio/bio (3).png', 'img/portfolio/bio (4).png', 'img/portfolio/bio (5).png', 'img/portfolio/bio (6).png', 'img/portfolio/bio (7).png', 'img/portfolio/bio (8).png', 'img/portfolio/bio (9).png', 'img/portfolio/ecom (1).png', 'img/portfolio/ecom (2).png', 'img/portfolio/ecom (3).png', 'img/portfolio/ecom (4).png', 'img/portfolio/ecom (5).png', 'img/portfolio/ABAQUS.png', 'img/portfolio/BILLRO (1).png', 'img/portfolio/BILLRO (2).png', 'img/portfolio/BILLRO (3).png', 'img/portfolio/BILLRO (4).png', 'img/portfolio/BILLRO (5).png', 'img/portfolio/BILLRO (6).png', 'img/portfolio/BILLRO (7).png', 'img/portfolio/BILLRO (8).png', 'img/portfolio/CATIA.png', 'img/portfolio/CHATBOT (1).png', 'img/portfolio/CHATBOT (2).png', 'img/portfolio/CHATBOT (3).png', 'img/portfolio/CHATBOT (4).png', 'img/portfolio/CHATBOT (5).png', 'img/portfolio/HILLTOP (1).png', 'img/portfolio/HILLTOP (2).png', 'img/portfolio/HILLTOP (3).png', 'img/portfolio/HILLTOP (4).png', 'img/portfolio/HILLTOP (5).png', 'img/portfolio/HILLTOP (6).png', 'img/portfolio/HILLTOP (7).png', 'img/portfolio/HILLTOP (8).png', 'img/portfolio/HILLTOP (9).png', 'img/portfolio/HOSPINOX (1).png', 'img/portfolio/HOSPINOX (2).png', 'img/portfolio/HOSPINOX (3).png', 'img/portfolio/HOSPINOX (4).png', 'img/portfolio/HOSPINOX (5).png', 'img/portfolio/HOSPINOX (6).png', 'img/portfolio/HOSPINOX (7).png', 'img/portfolio/HOSPINOX (8).png', 'img/portfolio/HOSPINOX (9).png', 'img/portfolio/MATLAB (1).png', 'img/portfolio/MATLAB (2).png', 'img/portfolio/SIMULINK.png', 'img/portfolio/TRAVSIFY (1).jpg', 'img/portfolio/TRAVSIFY (1).png', 'img/portfolio/TRAVSIFY (2).jpg', 'img/portfolio/TRAVSIFY (2).png', 'img/portfolio/TRAVSIFY (3).jpg', 'img/portfolio/TRAVSIFY (4).jpg', 'img/portfolio/TRAVSIFY (5).jpg', 'img/portfolio/TRAVSIFY (6).jpg', 'img/portfolio/TRAVSIFY (7).jpg', 'img/portfolio/TRAVSIFY (8).jpg', 'img/portfolio/TRAVSIFYB2B (1).png', 'img/portfolio/TRAVSIFYB2B (2).png', 'img/portfolio/TRAVSIFYB2B (3).png', 'img/portfolio/TRAVSIFYB2B (4).png', 'img/portfolio/TRAVSIFYB2B (5).png', 'img/portfolio/TRAVSIFYB2B (6).png', 'img/portfolio/VSI (1).png', 'img/portfolio/VSI (2).png', 'img/portfolio/VSI (3).png', 'img/portfolio/VSI (4).png', 'img/portfolio/VSI (5).png', 'img/portfolio/VSI (6).png'];
			let div = document.getElementById("portfolio");
			let img = div.getElementsByTagName('img');
			let i=0;     
			for(let el of arr){
				img[i++].setAttribute('src', el);
				if (el == arr.slice(-1)){
					var tabs = $('#menu-filter li a');
					var firstTab = tabs.first();
					firstTab.click();
					//console.log("Done");
				}
			}
		}

		// Header Sticky
		
			$(window).scroll( function() {
				$(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
			})
			  
			  $(document).on("click", ".navbar-collapse.show", function(e) {
				$(e.target).is("a") && $(this).collapse("hide")
			}) 
			  
			 $(".navbar-nav a, .scroll_down a").click( function(e) {
				var a = $(this);
				$("html, body").stop().animate({
					scrollTop: $(a.attr("href")).offset().top - 0
				}, 1500, "easeInOutExpo"), e.preventDefault()
			}) 
			  
			  $("#navbarCollapse").scrollspy({
				offset: 20
			})

			function disablebut(){
				document.getElementById("Button").disabled = true;
			}

			
			
        /* ==================================================
            # Smooth Scroll
         =============================================== */
		 
		// Sections Scroll
		if($("body").hasClass("side-header")){
			$('.smooth-scroll').click( function() {
				event.preventDefault();
				var sectionTo = $(this).attr('href');
				$('html, body').stop().animate({
				  scrollTop: $(sectionTo).offset().top}, 1500, 'easeInOutExpo');
			});
		   }
		 else {
			$('.smooth-scroll').click( function() {
				event.preventDefault();
				var sectionTo = $(this).attr('href');
				$('html, body').stop().animate({
				  scrollTop: $(sectionTo).offset().top - 10}, 1500, 'easeInOutExpo');
			});
		}

		 /* ==================================================
            # Scroll to top
         =============================================== */
			//Get the button
			var mybutton = document.getElementById("scrtop");

			// When the user scrolls down 20px from the top of the document, show the button
			window.onscroll = function() {scrollFunction()};

			function scrollFunction() {
			  if (document.body.scrollTop >10 || document.documentElement.scrollTop > 10) {
				mybutton.style.display = "block";
			  } else {
				mybutton.style.display = "none";
			  }
			}

		
		 /* ==================================================
            # Youtube Video Init
         ===============================================*/
        $('.player').mb_YTPlayer();
		
		/* ==================================================
			# Portfolio Menu
		 =============================================== */
		 
		$(window).on("load", function() {
			var e = $(".work-filter"),
				a = $("#menu-filter");
			e.isotope({
				filter: "web",
				layoutMode: "masonry",
				animationOptions: {
					duration: 750,
					easing: "linear"
				}
			}), 
			
			a.find("a").click( function() {
				var o = $(this).attr("data-filter");
				return a.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({
					filter: o,
					animationOptions: {
						animationDuration: 750,
						easing: "linear",
						queue: !1
					}
				}), !1
			})
		}), 

		$(".img-zoom").magnificPopup({
			type: "image",
			closeOnContentClick: !0,
			mainClass: "mfp-fade",
			gallery: {
				enabled: !0,
				navigateByImgClick: !0,
				preload: [0, 1]
			}
		}),

		/*------------------------------------
			Typed
		-------------------------------------- */

		$(".typed").each(function() {
		var typed = new Typed('.typed', {
			stringsElement: '.typed-strings',
			loop: true,
			typeSpeed: 20,
			backSpeed: 10,
			backDelay: 3000,
		});
		});
		

		/*------------------------------------
			WOW animation
		-------------------------------------- */

		$(".wow").each(function() {
		 if ($(window).width() > 767) {
		   var wow = new WOW({
			 boxClass: 'wow',
			 animateClass: 'animated',
			 offset: 0,
			 mobile: true,
			 live: true
		   });
		  new WOW().init();
		 }
		});		
		

        /* ==================================================
            # Magnific popup init
         ===============================================*/

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });


        /* ==================================================
            # Feedback Slider
         =================================================*/
	   
	   $('.feed-sldr').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
			arrows: false,
			dots: true,
			autoplaySpeed: 4000,
			responsive: [{
					breakpoint: 1199,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						arrows: false
					}
				}
			]
		});
		        
        /* ==================================================
            # Blog Slider
         ================================================*/
		
	   $('.blog-sldr').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			arrows: false,
			dots: true,
			autoplaySpeed: 4000,
			responsive: [{
					breakpoint: 1150,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						arrows: false
					}
				}
			]
		});
		
        /* ==================================================
            # Fun Factor Init
        ===============================================*/
        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });
		
	/* ==================================================
		Contact Form Validations
	================================================== */

		$(function() {

			// Get the form.
			var form = $('#contact-form');

			// Get the messages div.
			var formMessages = $('.form-message');

			// Set up an event listener for the contact form.
			$(form).submit(function(e) {
				// Stop the browser from submitting the form.
				e.preventDefault();

				// Serialize the form data.
				var formData = $(form).serialize();

				// Submit the form using AJAX.
				$.ajax({
					type: 'POST',
					url: $(form).attr('action'),
					data: formData
				})
				.done(function(response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text(response);

					// Clear the form.
					$('#contact-form input,#contact-form textarea').val('');
				})
				.fail(function(data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');

					// Set the message text.
					if (data.responseText !== '') {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text('Oops! An error occured and your message could not be sent.');
					}
				});
			});

		});				
		
        /* ==================================================
            Preloader Init
         ===============================================*/
		 
        $(window).on("load", function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
        });
        
		
		 /* ==================================================
            Mouse Animation
        ================================================== */

			function theme_tm_cursor(){

				var myCursor	= jQuery('.mouse-cursor');

				if(myCursor.length){
					if ($("body")) {
					const e = document.querySelector(".cursor-inner"),
						t = document.querySelector(".cursor-outer");
					let n, i = 0,
						o = !1;
					window.onmousemove = function (s) {
						o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
					}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
						e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
					}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
						$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
					}), e.style.visibility = "visible", t.style.visibility = "visible"
				}
				}
			};
			theme_tm_cursor()	
		
}); // end document ready function
