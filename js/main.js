//////////////////////////////////////////////////////  //
//    EVENTS ON DOCUMENT READY                          //
//////////////////////////////////////////////////////  //

$(document).ready(function () {
    "use strict";

    //// PRELOADER TRIGGER
    $(window).on('load', function () {
        $(".loading").animate({
            "top": "-100%"
        }, 700, function () {
            $(this).remove();
        });
    });
    
    //// FIXED NAVBAR
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });

    //// SMOTH SCROLL
    $.scrollIt({
        topOffset: -80
    });

    //// COLLAPSED MENU CLOSE ON CLICK
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    //// SCROLL SPY TRIGGER
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

   //// COUNT TO TRIGGER
    var eventFired = false,
    objectPositionTop = $('.about-pic').offset().top;
    $(window).on('scroll', function () {
        var currentPosition = $(document).scrollTop() + 400;
        if (currentPosition >= objectPositionTop && eventFired === false) {
            eventFired = true;
            $(".count").countTo({
                speed: 5000,
                refreshInterval: 80
            });
        }
    });

    //// ISOTOPE TRIGGER
    var $grid = $('.work-content').isotope({
      itemSelector: '.work-item',
      stagger: 30
    });
    $(window).on('load', function(){ $grid.isotope('layout') }); 
    $('.filter-work').on( 'click', '.button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'a', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });

    //// MASONRY
    $('.work-content').isotope({
      itemSelector: '.work-caption img',
      masonry: {
        columnWidth: 0
      }
    });

    //// MAGNIFIC POPUP TRIGGER
    $('.modal-image').magnificPopup({
      type: 'image'
    });

    // OWL CAROUSEL TRIGGER
    $('.test-car').owlCarousel({
      items: 3,
      margin: 40,
      loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
      dots: false,
      responsiveClass:true,
      responsive : {
        320  : {
            items: 1
        },
        360  : {
            items: 1
        }, 
        575  : {
            items: 1
        },
        768  : {
            items: 2
        },
      1024 : {
        items : 3
      }
        }
    });
    $('.client-car').owlCarousel({
      items: 4,
      margin: 10,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
        dots: false,
        responsiveClass:true,
        responsive : {
        320  : {
            items: 1
        },
        360  : {
            items: 1
        }, 
        575  : {
            items: 1
        },
        768  : {
            items: 3
        },
        1024 : {
          items : 4
        }
    }
     });

   //// PARSLEY TRIGGER
    $('.cont-fo').parsley();

});