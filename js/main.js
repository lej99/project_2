$(function () {

    var page = 0;
    $('.prev').click(function () {
        page--;
        if (page < 0) {
            page = 0;
            return;
        }
        $('.slide').stop().animate({ marginLeft: -350 * page }, 800);
    });

    $('.next').click(function () {
        page++;
        if (page > $('.slide > div').length - 2) {
            page = $('.slide > div').length - 2;
            return;
        }
        $('.slide').stop().animate({ marginLeft: -350 * page }, 800);
    });

});