// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Show/Hide Nav when Scroll On Desktop Screen

// Owl Carousel - Quote Section
$('.says').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Show/Hide Nav on Scoll
$(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 740) {
            $('.desktop-nav').fadeIn();
        } else {
            $('.desktop-nav').fadeOut();
        }
    })
})



