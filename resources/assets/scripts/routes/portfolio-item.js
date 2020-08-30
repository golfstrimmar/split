'use strict';
import '../partials/btn-6';

export default {
  init() {
  //   $('.project__type-switch button').on('click', function () {
  //     if ($(this).hasClass('active'))
  //       return;
  //     $('.project__type-switch button').toggleClass('active');
  //   });
  //   $('#mobile').on('click', function () {
  //     $('.project__frame ').not('.mobile').hide();
  //     $('.mobile').show();
  //     $('.sm-visible').addClass('visible');
  //   });
  //   $('#desktop').on('click', function () {
  //     $('.mobile').hide();
  //     $('.project__frame ').not('.mobile').show();
  //     $('.sm-visible').removeClass('visible');
  //   });
  // },
   $(function () {
     $('.btn-6')
       .on('mouseenter', function (e) {
         var parentOffset = $(this).offset(),
           relX = e.pageX - parentOffset.left,
           relY = e.pageY - parentOffset.top;
         $(this).find('span').css({ top: relY, left: relX });
       })
       .on('mouseout', function (e) {
         var parentOffset = $(this).offset(),
           relX = e.pageX - parentOffset.left,
           relY = e.pageY - parentOffset.top;
         $(this).find('span').css({ top: relY, left: relX });
       });
     $('[href=#]').click(function () {
       return false;
     });
   });


    $('.project__type-switch button').on('click', function () {
      if ($(this).hasClass('active'))
        return;
      $('.project__type-switch button').toggleClass('active');
    });
    $('#mobile').on('click', function () {
      $('.project__frame ').not('.mobile').hide();
      $('.mobile').show();
      $('.sm-visible').addClass('visible');
    });
    $('#desktop').on('click', function () {
      $('.mobile').hide();
      $('.project__frame ').not('.mobile').show();
      $('.sm-visible').removeClass('visible');
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
