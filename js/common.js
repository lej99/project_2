$(function () {
    $("#icon").click(function () {
        $(".header_menu").slideToggle();
        $(this).toggleClass("active")
    });
});
$(window).resize(function () {
    if (window.innerWidth >= 768) {
        $("#icon").removeClass("active")
        $(".header_menu").hide();
    }
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $('.top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });
});

$(function () {
    $("#kero").click(function () {
        $(".info_in").slideToggle();
        $(this).toggleClass("active")
    });
});