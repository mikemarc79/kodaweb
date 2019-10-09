$(window).scroll(function(){
    if ($(window).scrollTop() >= 110) {
        $('header').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});

//* mobile nav
$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });