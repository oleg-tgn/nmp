$('.js-contact-popup').fancybox({
    src  : '#hidden-content',
    btnTpl : {
    smallBtn : '<div data-fancybox-close class="fancybox-close-small modal-close"><i class="icon-close"></i></div>',
    beforeShow: function() { 
        $('.js-contact-success').hide();
        $('.js-contact-form')[0].reset();
        $('.js-contact-form').show();
    }
  }
});

jQuery(document).ready(function() {
    jQuery('.js-animate').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp slow', // Class to add to the elements when they are visible
        offset: 100,
        repeat: true    
       }); 
});


$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 80) {
        $('.header').addClass('fixed');
      } else {
        $('.header').removeClass('fixed');
      }


      function come(elem) {
          var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).height();

          return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
        $video = $('.js-video');

        if (come(".js-video")) {       
            console.log('come');

            if (!($video.hasClass('played'))) {
                $('.js-video').get(0).play();
                $('.js-video').addClass('played');
            }
        } else {
            console.log('not');
            if ($video.hasClass('played')) {
                $video.removeClass('played')
            }
        }
    });
});