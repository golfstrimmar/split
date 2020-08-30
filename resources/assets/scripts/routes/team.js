import '../partials/btn-6';

'use strict';

export default {
  init() {
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
    
    
    $('.skills__content').on('mouseenter', function () {
      sinking(this);
    });

    function sinking(item) {
      $(item).addClass('skills__hovered');
      setTimeout(function () {
        $(item).removeClass('skills__hovered');
      }, 1500)
    }

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
