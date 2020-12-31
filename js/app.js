$(document).ready(function() {
    var altura = $('.logo-nav').offset().top;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.logo-nav').addClass('black');
        } else {
            $('.logo-nav').removeClass('black');
            $('.logo-nav').addClass('top');
        }
    })
});