import 'bootstrap'
import Typed from 'typed.js';
import Rellax from 'rellax/rellax.min'
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



    $('.nav-item a').click(function () {
      let name = $(this).attr('aria-controls');
      $('.filter-box__item').text(name);
    });
    //scroll bg
    function colorScroll() {
      function querySelectorArray(query, root){
        return Array.prototype.slice.call((root || document).querySelectorAll(query));
      }
      var elements = querySelectorArray('[data-scroll]'),
        bg = document.getElementById('bg');

      elements.forEach(function(color){
        var group = color.getAttribute('data-scroll'),
          sections = querySelectorArray('[data-' + group + ']');

        document.addEventListener('scroll', function(){

          var lastSection = false;
          sections.forEach(function(section){
            var offset = section.getBoundingClientRect();
            //the magic
            if(offset.top - (window.innerHeight/2) < 0 && offset.top > - offset.height ) lastSection = section.getAttribute('data-' + group + '');
          });
          bg.style.backgroundColor = lastSection || '';
        })
      });
    }
    colorScroll();
    $('.nav-item a').click(function () {
      let link = $(this).attr('data-name');
      let tabs = $('#' + link);
      let color = tabs.children('.position-relative').children('.container').children('.portfolio-all').children('.portfolio-all__item').attr('data-color-group');
      $('body').css('background-color', color);
      // Destroy and create again parallax with previous settings
      rellax.destroy();
      setTimeout(function(){
        // Start Rellax
        // eslint-disable-next-line no-unused-vars
        var rellax = new Rellax('.rellax', {
          speed: -2,
          wrapper: null,
          center: true,
          round: true,
          vertical: true,
          horizontal: false,
        });
      }, 200);
    });
    // eslint-disable-next-line no-unused-vars
    let typed = new Typed('#typed', {
      strings: ['comfortable.'],
      typeSpeed: 50,
      backDelay: 1500,
      loop : true,
      loopCount :  9999,
    });
    // eslint-disable-next-line no-unused-vars
    var rellax = new Rellax('.rellax', {
      speed: -2,
      wrapper: null,
      center: true,
      round: true,
      vertical: true,
      horizontal: false,
    });

    
    },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
