$(function(){
    $("#icon").click(function(){
        $(".header_menu").slideToggle();
        $(this).toggleClass("active")
    });
});
$(window).resize(function(){
    if(window.innerWidth>=768){
        $(".header_menu").show();
    } else {
        $(".header_menu").hide();
    }
});