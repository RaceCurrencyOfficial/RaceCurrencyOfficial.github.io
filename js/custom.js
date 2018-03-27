/* global $, document, window, navigator */
$(document).ready(function () {

    'use strict';
    
    /*-------------------------------------
    Detect IE
    -------------------------------------*/
    function msieversion() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            $('html').addClass('client-ie');
        } else // If another browser, return 0
        {
            $('html').removeClass('client-ie');
        }

        return false;
    }
    msieversion();

    /*-------------------------------------
    Smooth Scroll
    -------------------------------------*/
    $('.crypto-navbar').each(function () {
        $(this).onePageNav({
            filter: ':not(.external)'
        });
    });

    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    $('.change-language').selectpicker({
        style: 'btn-info',
        size: 4
    });



    /*-------------------------------------
    Sticky NabBar
    -------------------------------------*/

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            $('.crypto-header').addClass('fixed');
        } else {
            $('.crypto-header').removeClass('fixed');
        }
    });



    /*-------------------------------------
    Navbar Toggle for Mobile
    -------------------------------------*/
    function navbarCollapse() {
        if ($(window).width() < 992) {
            $(document).on('click', function (event) {
                var clickover = $(event.target);
                var opened = $("#navbar-collapse").hasClass("in");
                if (opened === true && !(clickover.is('.dropdown'))) {
                    $("button.navbar-toggle").trigger('click');
                }
            });

            $('.dropdown').unbind('click');
            $('.dropdown').on('click', function () {
                $(this).children('.dropdown-menu').slideToggle();
            });

            $('.dropdown *').on('click', function (e) {
                e.stopPropagation();
            });
        }
    }
    navbarCollapse();

    /*-------------------------------------
      Horizontal Scroll
    -------------------------------------*/
    if ($('#timiline-wrapper').length > 0) {
        var ps = new PerfectScrollbar('#timiline-wrapper', {
            wheelSpeed: 2,
            wheelPropagation: true,
            maxScrollbarLength: 400,
            suppressScrollY: true
        });
    }


    /*-------------------------------------
      Owl Carousel
      -------------------------------------*/

    if ($(".cpico-slider-classic").length > 0) {
        $(".cpico-slider-classic").owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            pagination: false
        });
    }

    if ($(".partner-slider").length > 0) {
        $(".partner-slider").owlCarousel({
            singleItem: false,
            items: 5,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 3],
            itemsMobile: [479, 1],
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            pagination: false,
            paginationNumbers: false
        });
    }

    if ($(".cpch-testimonial").length > 0) {
        $(".cpch-testimonial").owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            pagination: true,
            paginationNumbers: false
        });
    }

    if ($(".testimonial-slider").length > 0) {
        $(".testimonial-slider").owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            pagination: true,
            paginationNumbers: false
        });
    }

    if ($(".pricing-slider").length > 0) {
        $(".pricing-slider").owlCarousel({
            singleItem: false,
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 2],
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            pagination: true,
            paginationNumbers: false
        });
    }

    if ($(".advisory-board-slider").length > 0) {
        $(".advisory-board-slider").owlCarousel({
            singleItem: false,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            pagination: true,
            paginationNumbers: false
        });
    }

    if ($("#cripto-rate-slider").length > 0) {
        $("#cripto-rate-slider").owlCarousel({
            singleItem: false,
            items: 10,
            itemsDesktop: [1199, 10],
            itemsDesktopSmall: [979, 7],
            itemsTablet: [768, 5],
            itemsMobile: [479, 3],
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            pagination: false
        });
    }

    if ($(".post-slider").length > 0) {
        $(".post-slider").owlCarousel({
            singleItem: false,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            pagination: true,
            paginationNumbers: false
        });
    }

    /*-------------------------------------
      Plyr Js  
    -------------------------------------*/

    plyr.setup();

    /*-------------------------------------------
      CountDown
    -------------------------------------------*/
    $('.countdown-time').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            $(this).html(tm.strftime('<span class="section_count"><span class="tcount days">%D </span><span class="text">Days</span></span><span class="section_count"><span class="tcount hours">%H</span><span class="text">Hours</span></span><span class="section_count"><span class="tcount minutes">%M</span><span class="text">Minutes</span></span><span class="section_count"><span class="tcount seconds">%S</span><span class="text">Seconds</span></span>'));
        });
    });



    /*-------------------------------------
      Progress Bar
      -------------------------------------*/
    function animateProgressBar(pb) {
        if ($.fn.visible && $(pb).visible() && !$(pb).hasClass('animated')) {
            $(pb).css('width', $(pb).attr('aria-valuenow') + '%');
            $(pb).addClass('animated');
        }
    }

    function initProgressBar() {
        var progressBar = $('.progress-bar');
        progressBar.each(function () {
            animateProgressBar(this);
        });
    }

    initProgressBar();


    /*-------------------------------------
      jQuery Ui Range Slider
    -------------------------------------*/

    if ($(".post-slider").length > 0) {
        $("#slider").slider({
            max: 100,
            min: 1,
            value: 55
        });
    }

    /*-------------------------------------
      Magnific PopUp
    -------------------------------------*/
    $('.featured-video-play').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true,
        },
    });

    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

    /*-------------------------------------
      Chart.Js
    -------------------------------------*/
    var barChartData = {
        labels: ["2013", "2014", "2015", "2016", "2017"],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: window.chartColors.red,
            data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ]
    }, {
            label: 'Dataset 2',
            backgroundColor: window.chartColors.blue,
            data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ]
    }]
    };

    if ($('#canvas').length) {
        var ctx = document.getElementById("canvas").getContext("2d");
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                title: {
                    display: false
                },
                gridLines: {
                    display: false
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
          }],
                    yAxes: [{
                        stacked: true,
          }]
                }
            }
        });
    }

    /*-----------------------------------
    Subscription
    -----------------------------------*/
    $(".ico-subscription").ajaxChimp({
        callback: mailchimpResponse,
        url: "http://codepassenger.us10.list-manage.com/subscribe/post?u=6b2e008d85f125cf2eb2b40e9&id=6083876991" // Replace your mailchimp post url inside double quote "".  
    });

    function mailchimpResponse(resp) {
        if (resp.result === 'success') {

            $('.newsletter-success').html(resp.msg).fadeIn().delay(3000).fadeOut();

        } else if (resp.result === 'error') {
            $('.newsletter-error').html(resp.msg).fadeIn().delay(3000).fadeOut();
        }
    }

    $(window).on('scroll', function () {
        initProgressBar();
    });

});


$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})
