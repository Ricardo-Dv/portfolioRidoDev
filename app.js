//function for the slider
$(document).ready(function(){
    $('.slider1').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      mode: 'fade',
    });
    $('.slider2').bxSlider({
      mode: 'fade',
    });
    $('.slider3').bxSlider({
      mode: 'fade',
    });
  });

//scrollanimation for the page
ScrollReveal().reveal('.one-third', { delay: 500});
ScrollReveal().reveal('.left-col', { delay: 150});
ScrollReveal().reveal('.sidebar', { delay: 150});
ScrollReveal().reveal('.one-third-padding', { delay: 150});
ScrollReveal().reveal('.left-col-contact', { delay: 150});
ScrollReveal().reveal('.sidebar-contact', { delay: 150});

//scrollanimation for icon-text-icon
ScrollReveal().reveal('.icon-text-home', { delay: 100});
ScrollReveal().reveal('.icon-text-skills', { delay: 160});
ScrollReveal().reveal('.icon-text-portfolio', { delay: 220});
ScrollReveal().reveal('.icon-text-services', { delay: 280});
ScrollReveal().reveal('.icon-text-contact', { delay: 340});

//scrollanimation for the web social icon
ScrollReveal().reveal('.fa-envelope-square', { delay: 250});
ScrollReveal().reveal('.fa-facebook-square', { delay: 310});
ScrollReveal().reveal('.fa-twitter-square', { delay: 370});
ScrollReveal().reveal('.fa-youtube-square', { delay: 430});
ScrollReveal().reveal('.fa-instagram-square', { delay: 490});
