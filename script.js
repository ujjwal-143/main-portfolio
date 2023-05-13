$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $('.portfolio .button-container .btn').click(function() {

        let filter = $(this).attr('data-filter');

        if (filter == 'all') {
            $('.portfolio .image-container .box').show('400')
        } else {
            $('.portfolio .image-container .box').not('.' + filter).hide('200');
            $('.portfolio .image-container .box').filter('.' + filter).show('400');
        }

    });

    $('#theme-toggler').click(function() {
        $(this).toggleClass('fa-sun');
        $('body').toggleClass('dark-theme');
    });

    // smooth scrolling 

    $('a[href*="#"]').on('click', function(e) {

        e.preventDefault();

        $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top,

            },
            500,
            'linear'
        );

    });

});

var typed = new Typed(".typing", {
    strings: [
        "<span style='color:crimson;'>Web Developer </span>",
        "<span style='color:#00a8ff;'>Front-End Developer </span>",
        "<span style='color:#00b894;'>Back-End Developer</span>",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});