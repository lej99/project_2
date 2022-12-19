$(function () {

  $(window).scroll(function () {
    let w_Scroll = $(window).scrollTop();
    let w_Height = $(window).height();

    $('#family').each(function(){
      if (w_Scroll > $(this).offset().top - w_Height / 2){
        $(this).addClass('show');
      } else {
        $(this).removeClass('show');
      }
    });

    $('#friends').each(function(){
      if (w_Scroll > $(this).offset().top - w_Height / 2){
        $(this).addClass('show');
      } else {
        $(this).removeClass('show');
      }
    });
  });
  
});