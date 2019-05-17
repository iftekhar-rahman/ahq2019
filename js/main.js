jQuery(document).ready(function($){

    // $(".header-area").sticky({ topSpacing: 0 });

    // jQuery for fixed menu
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
           $('.header-area').addClass('fixedheader');
        } else {
           $('.header-area').removeClass('fixedheader');
        }
        
        
    });

    $('#menu').slicknav();

    AOS.init({
        offset: 200,
        duration: 1000,
    });

    // homepage-slides-wrap
	$(".homepage-slides-wrap").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
        autoplay: false,
		autoplayTimeout:10000,
		autoplayHoverPause:true,	
        dotsData: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                dotsData: false,
            },
            // breakpoint from 480 up
            480 : {
                dotsData: false,
            },
            // breakpoint from 768 up
            720 : {
                dotsData: false,
            },
            960: {
                dotsData: true,
            },
        }
        
    });

    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('#return-to-top').fadeIn(300); 
        } else {
            $('#return-to-top').fadeOut(300); 
        }
    });
    $('#return-to-top').click(function() {
        $('body,html').animate({
            scrollTop : 0                    
        }, 500);
    });


   

});

