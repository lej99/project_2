$(function () {

    $('#popup>li:nth-of-type(1)').click(function () {
        $('.hidden:nth-of-type(1)').fadeIn();
        $('.hidden').not(':nth-of-type(1)').hide();
    });
    $('#popup>li:nth-of-type(2)').click(function () {
        $('.hidden:nth-of-type(2)').fadeIn();
        $('.hidden').not(':nth-of-type(2)').hide();
    });
    $('#popup>li:nth-of-type(3)').click(function () {
        $('.hidden:nth-of-type(3)').fadeIn();
        $('.hidden').not(':nth-of-type(3)').hide();
    });
    $('#popup>li:nth-of-type(4)').click(function () {
        $('.hidden:nth-of-type(4)').fadeIn();
        $('.hidden').not(':nth-of-type(4)').hide();
    });
    $('#popup>li:nth-of-type(5)').click(function () {
        $('.hidden:nth-of-type(5)').fadeIn();
        $('.hidden').not(':nth-of-type(5)').hide();

    });

    $('.hidden').click(function () {
        $('.hidden').hide();
    });

    if (window.matchMedia("(max-width: 400px)").matches) {

        var page = 0;
        $('.prev').click(function () {
            page--;
            if (page < 0) {
                page = 0;
                return;
            }
            $('.slide').stop().animate({ marginLeft: -300 * page }, 800);
        });
    
        $('.next').click(function () {
            page++;
            if (page > $('.slide > div').length - 1) {
                page = $('.slide > div').length - 1;
                return;
            }
            $('.slide').stop().animate({ marginLeft: -300 * page }, 800);
        });

    } else if (window.matchMedia("(min-width: 960px)").matches) {

    var page = 0;
    $('.prev').click(function () {
        page--;
        if (page < 0) {
            page = 0;
            return;
        }
        $('.slide').stop().animate({ marginLeft: -450 * page }, 800);
    });

    $('.next').click(function () {
        page++;
        if (page > $('.slide > div').length - 2) {
            page = $('.slide > div').length - 2;
            return;
        }
        $('.slide').stop().animate({ marginLeft: -450 * page }, 800);
    });

    } else {

        var page = 0;
        $('.prev').click(function () {
            page--;
            if (page < 0) {
                page = 0;
                return;
            }
            $('.slide').stop().animate({ marginLeft: -450 * page }, 800);
        });
    
        $('.next').click(function () {
            page++;
            if (page > $('.slide > div').length - 1) {
                page = $('.slide > div').length - 1;
                return;
            }
            $('.slide').stop().animate({ marginLeft: -450 * page }, 800);
        });

    }

});