import typed from '../partials/typed'
import './../components/spincrement'
import '../partials/btn-6'
'use strict';

export default {
  init() {
    typed();

// ---------------counters-----------------

    $(document).ready(function () {
      var show = true;
      var countbox = '.numbers__wrapper';
      $(window).on('scroll resize', function () {
        if (!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $(countbox).outerHeight();

        if (
          w_top + 200 >= e_top ||
          w_height + w_top == d_height ||
          e_height + e_top < w_height
        ) {
          $('.spincrement').spincrement({
            thousandSeparator: '',
            duration: 8000,
          });

          show = false;
        }
      });
    });


// -----------смещение выезжающей должности по скролу----------------


  {
    let windowOffset;
    let viewPort = window.innerHeight;
    let Karpov = $('#Karpov-text');
    let Trigub = $('#Trigub-text'); 
    let Rudas = $('#Rudas-text'); 
    let Pozniakova = $('#Pozniakova-text'); 
    let Svystunov = $('#Svystunov-text'); 
    let Pazenko = $('#Pazenko-text'); 
    let Samusenko = $('#Samusenko-text'); 
    let Kravchenko = $('#Kravchenko-text'); 
    let Plichko = $('#Plichko-text'); 
    let RPazenko = $('#RPazenko-text'); 
    let Lozitskiy = $('#Lozitskiy-text'); 
    let Bogunenko = $('#Bogunenko-text'); 
    let IPazenko = $('#IPazenko-text'); 
    let Belookiy = $('#Belookiy-text'); 
    let Ivanchenko = $('#Ivanchenko-text'); 
    let lastScrollTop2 = 0;
    let lastScrollTop3 = 0;
    let lastScrollTop4 = 0;
    let lastScrollTop5 = 0;
    let lastScrollTop6 = 0;
    let lastScrollTop7 = 0;
    let lastScrollTop8 = 0;
    let lastScrollTop9 = 0;
    let lastScrollTop10 = 0;
    let lastScrollTop11 = 0;
    let lastScrollTop12 = 0;
    let lastScrollTop13 = 0;
    let lastScrollTop14 = 0; 
    let lastScrollTop15 = 0; 
    let lastScrollTop16 = 0; 
    let xKarpov = 0; 
    let xTrigub = 0; 
    let xRudas = 0; 
    let xPozniakova = 0; 
    let xSvystunov = 0; 
    let xPazenko = 0; 
    let xSamusenko = 0; 
    let xKravchenko = 0; 
    let xPlichko = 0; 
    let xRPazenko = 0; 
    let xLozitskiy = 0; 
    let xBogunenko = 0; 
    let xIPazenko = 0; 
    let xBelookiy = 0; 
    let xIvanchenko = 0; 


    $(window).on('scroll', function () {
      windowOffset = window.pageYOffset;
     
     
      if (
        windowOffset >= Karpov.offset().top - viewPort &&
        windowOffset <= Karpov.offset().top + 200
      ) {
        let st2 = $(this).scrollTop();
        if (st2 > lastScrollTop2) {
          xKarpov -= 2;
          Karpov.parent().css('transform', 'translateX(' + xKarpov + 'px)');
        } else {
          xKarpov += 2;
          Karpov.parent().css('transform', 'translateX(' + xKarpov + 'px)');
        }
        lastScrollTop2 = st2;
      }


      if (
        windowOffset >= Trigub.offset().top - viewPort &&
        windowOffset <= Trigub.offset().top + 200
      ) {
        let st3 = $(this).scrollTop();
        if (st3 > lastScrollTop3) {
          xTrigub -= 2;
          Trigub.parent().css('transform', 'translateX(' + xTrigub + 'px)');
        } else {
          xTrigub += 2;
          Trigub.parent().css('transform', 'translateX(' + xTrigub + 'px)');
        }
        lastScrollTop3 = st3;
      }
     
    


      if (
        windowOffset >= Rudas.offset().top - viewPort &&
        windowOffset <= Rudas.offset().top + 200
      ) {
        let st4 = $(this).scrollTop();
        if (st4 > lastScrollTop4) {
          xRudas -= 2;
          Rudas.parent().css('transform', 'translateX(' + xRudas + 'px)');
        } else {
          xRudas += 2;
          Rudas.parent().css('transform', 'translateX(' + xRudas + 'px)');
        }
        lastScrollTop4 = st4;
      }
     
    
    
    


      if (
        windowOffset >= Pozniakova.offset().top - viewPort &&
        windowOffset <= Pozniakova.offset().top + 200
      ) {
        let st5 = $(this).scrollTop();
        if (st5 > lastScrollTop5) {
          xPozniakova -= 2;
          Pozniakova.parent().css('transform', 'translateX(' + xPozniakova + 'px)');
        } else {
          xPozniakova += 2;
          Pozniakova.parent().css('transform', 'translateX(' + xPozniakova + 'px)');
        }
        lastScrollTop5 = st5;
      }
      

      if (
        windowOffset >= Svystunov.offset().top - viewPort &&
        windowOffset <= Svystunov.offset().top + 200
      ) {
        let st6 = $(this).scrollTop();
        if (st6 > lastScrollTop6) {
          xSvystunov -= 2;
          Svystunov.parent().css('transform', 'translateX(' + xSvystunov + 'px)');
        } else {
          xSvystunov += 2;
          Svystunov.parent().css('transform', 'translateX(' + xSvystunov + 'px)');
        }
        lastScrollTop6 = st6;
      }
      

      if (
        windowOffset >= Pazenko.offset().top - viewPort &&
        windowOffset <= Pazenko.offset().top + 200
      ) {
        let st7 = $(this).scrollTop();
        if (st7 > lastScrollTop7) {
          xPazenko -= 2;
          Pazenko.parent().css('transform', 'translateX(' + xPazenko + 'px)');
        } else {
          xPazenko += 2;
          Pazenko.parent().css('transform', 'translateX(' + xPazenko + 'px)');
        }
        lastScrollTop7 = st7;
      }

      if (
        windowOffset >= Samusenko.offset().top - viewPort &&
        windowOffset <= Samusenko.offset().top + 200
      ) {
        let st8 = $(this).scrollTop();
        if (st8 > lastScrollTop8) {
          xSamusenko -= 2;
          Samusenko.parent().css('transform', 'translateX(' + xSamusenko + 'px)');
        } else {
          xSamusenko += 2;
          Samusenko.parent().css('transform', 'translateX(' + xSamusenko + 'px)');
        }
        lastScrollTop8 = st8;
      }

      if (
        windowOffset >= Kravchenko.offset().top - viewPort &&
        windowOffset <= Kravchenko.offset().top + 200
      ) {
        let st9 = $(this).scrollTop();
        if (st9 > lastScrollTop9) {
          xKravchenko -= 2;
          Kravchenko.parent().css('transform', 'translateX(' + xKravchenko + 'px)');
        } else {
          xKravchenko += 2;
          Kravchenko.parent().css('transform', 'translateX(' + xKravchenko + 'px)');
        }
        lastScrollTop9 = st9;
      }
      
      if (
        windowOffset >= Plichko.offset().top - viewPort &&
        windowOffset <= Plichko.offset().top + 200
      ) {
        let st10 = $(this).scrollTop();
        if (st10 > lastScrollTop10) {
          xPlichko -= 2;
          Plichko.parent().css('transform', 'translateX(' + xPlichko + 'px)');
        } else {
          xPlichko += 2;
          Plichko.parent().css('transform', 'translateX(' + xPlichko + 'px)');
        }
        lastScrollTop10 = st10;
      }
    
      if (
        windowOffset >= RPazenko.offset().top - viewPort &&
        windowOffset <= RPazenko.offset().top + 200
      ) {
        let st11 = $(this).scrollTop();
        if (st11 > lastScrollTop11) {
          xRPazenko -= 2;
          RPazenko.parent().css('transform', 'translateX(' + xRPazenko + 'px)');
        } else {
          xRPazenko += 2;
          RPazenko.parent().css('transform', 'translateX(' + xRPazenko + 'px)');
        }
        lastScrollTop11 = st11;
      }
      if (
        windowOffset >= Lozitskiy.offset().top - viewPort &&
        windowOffset <= Lozitskiy.offset().top + 200
      ) {
        let st12 = $(this).scrollTop();
        if (st12 > lastScrollTop12) {
          xLozitskiy -= 2;
          Lozitskiy.parent().css('transform', 'translateX(' + xLozitskiy + 'px)');
        } else {
          xLozitskiy += 2;
          Lozitskiy.parent().css('transform', 'translateX(' + xLozitskiy + 'px)');
        }
        lastScrollTop12 = st12;
      }
    
      if (
        windowOffset >= Bogunenko.offset().top - viewPort &&
        windowOffset <= Bogunenko.offset().top + 200
      ) {
        let st13 = $(this).scrollTop();
        if (st13 > lastScrollTop13) {
          xBogunenko -= 2;
          Bogunenko.parent().css('transform', 'translateX(' + xBogunenko + 'px)');
        } else {
          xBogunenko += 2;
          Bogunenko.parent().css('transform', 'translateX(' + xBogunenko + 'px)');
        }
        lastScrollTop13 = st13;
      }
    
      if (
        windowOffset >= IPazenko.offset().top - viewPort &&
        windowOffset <= IPazenko.offset().top + 200
      ) {
        let st14 = $(this).scrollTop();
        if (st14 > lastScrollTop14) {
          xIPazenko -= 2;
          IPazenko.parent().css('transform', 'translateX(' + xIPazenko + 'px)');
        } else {
          xIPazenko += 2;
          IPazenko.parent().css('transform', 'translateX(' + xIPazenko + 'px)');
        }
        lastScrollTop14 = st14;
      }
      if (
        windowOffset >= Belookiy.offset().top - viewPort &&
        windowOffset <= Belookiy.offset().top + 200
      ) {
        let st15 = $(this).scrollTop();
        if (st15 > lastScrollTop15) {
          xBelookiy -= 2;
          Belookiy.parent().css('transform', 'translateX(' + xBelookiy + 'px)');
        } else {
          xBelookiy += 2;
          Belookiy.parent().css('transform', 'translateX(' + xBelookiy + 'px)');
        }
        lastScrollTop15 = st15;
      }
      if (
        windowOffset >= Ivanchenko.offset().top - viewPort &&
        windowOffset <= Ivanchenko.offset().top + 200
      ) {
        let st16 = $(this).scrollTop();
        if (st16 > lastScrollTop16) {
          xIvanchenko -= 2;
          Ivanchenko.parent().css('transform', 'translateX(' + xIvanchenko + 'px)');
        } else {
          xIvanchenko += 2;
          Ivanchenko.parent().css('transform', 'translateX(' + xIvanchenko + 'px)');
        }
        lastScrollTop16 = st16;
      }
    
    });
    }





     

    // --------sliding text------
    let timeOutSliding;
    //  ------------
      $('#Karpov').on('mouseenter', function () {
       let Karpov = $('#Karpov').offset().left;
              $('#Karpov-text').css({
                'transform':'translateX(-' + Karpov + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Karpov').on('mouseleave', function () {
              $('#Karpov-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Karpov-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Trigub').on('mouseenter', function () {
       let Trigub = $('#Trigub').offset().left;
              $('#Trigub-text').css({
                'transform':'translateX(-' + Trigub + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Trigub').on('mouseleave', function () {
              $('#Trigub-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Trigub-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Rudas').on('mouseenter', function () {
       let Rudas = $('#Rudas').offset().left;
              $('#Rudas-text').css({
                'transform':'translateX(-' + Rudas + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Rudas').on('mouseleave', function () {
              $('#Rudas-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Rudas-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Pozniakova').on('mouseenter', function () {
       let Pozniakova = $('#Pozniakova').offset().left;
              $('#Pozniakova-text').css({
                'transform':'translateX(-' + Pozniakova + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Pozniakova').on('mouseleave', function () {
              $('#Pozniakova-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Pozniakova-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Svystunov').on('mouseenter', function () {
       let Svystunov = $('#Svystunov').offset().left;
              $('#Svystunov-text').css({
                'transform':'translateX(-' + Svystunov + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Svystunov').on('mouseleave', function () {
              $('#Svystunov-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Svystunov-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Pazenko').on('mouseenter', function () {
       let Pazenko = $('#Pazenko').offset().left;
              $('#Pazenko-text').css({
                'transform':'translateX(-' + Pazenko + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Pazenko').on('mouseleave', function () {
              $('#Pazenko-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Pazenko-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Samusenko').on('mouseenter', function () {
       let Samusenko = $('#Samusenko').offset().left;
              $('#Samusenko-text').css({
                'transform':'translateX(-' + Samusenko + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Samusenko').on('mouseleave', function () {
              $('#Samusenko-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Samusenko-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Kravchenko').on('mouseenter', function () {
       let Kravchenko = $('#Kravchenko').offset().left;
              $('#Kravchenko-text').css({
                'transform':'translateX(-' + Kravchenko + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Kravchenko').on('mouseleave', function () {
              $('#Kravchenko-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Kravchenko-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Plichko').on('mouseenter', function () {
       let Plichko = $('#Plichko').offset().left;
              $('#Plichko-text').css({
                'transform':'translateX(-' + Plichko + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Plichko').on('mouseleave', function () {
              $('#Plichko-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Plichko-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Pazenko').on('mouseenter', function () {
       let Pazenko = $('#Pazenko').offset().left;
              $('#Pazenko-text').css({
                'transform':'translateX(-' + Pazenko + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Pazenko').on('mouseleave', function () {
              $('#Pazenko-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Pazenko-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------  
      $('#RPazenko').on('mouseenter', function () {
       let RPazenko = $('#RPazenko').offset().left;
              $('#RPazenko-text').css({
                'transform':'translateX(-' + RPazenko + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#RPazenko').on('mouseleave', function () {
              $('#RPazenko-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#RPazenko-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Lozitskiy').on('mouseenter', function () {
       let Lozitskiy = $('#Lozitskiy').offset().left;
              $('#Lozitskiy-text').css({
                'transform':'translateX(-' + Lozitskiy + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Lozitskiy').on('mouseleave', function () {
              $('#Lozitskiy-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Lozitskiy-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Bogunenko').on('mouseenter', function () {
       let Bogunenko = $('#Bogunenko').offset().left;
              $('#Bogunenko-text').css({
                'transform':'translateX(-' + Bogunenko + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Bogunenko').on('mouseleave', function () {
              $('#Bogunenko-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Bogunenko-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#IPazenko').on('mouseenter', function () {
       let IPazenko = $('#IPazenko').offset().left;
              $('#IPazenko-text').css({
                'transform':'translateX(-' + IPazenko + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#IPazenko').on('mouseleave', function () {
              $('#IPazenko-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#IPazenko-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Belookiy').on('mouseenter', function () {
       let Belookiy = $('#Belookiy').offset().left;
              $('#Belookiy-text').css({
                'transform':'translateX(-' + Belookiy + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Belookiy').on('mouseleave', function () {
              $('#Belookiy-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Belookiy-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })
    //  ------------
      $('#Ivanchenko').on('mouseenter', function () {
       let Ivanchenko = $('#Ivanchenko').offset().left;
              $('#Ivanchenko-text').css({
                'transform':'translateX(-' + Ivanchenko + 'px)',
              'opacity':'0.8',
             });
              clearInterval(timeOutSliding);
            });

      $('#Ivanchenko').on('mouseleave', function () {
              $('#Ivanchenko-text').css({'transform':'translateX(-500vw)'});
              timeOutSliding = setInterval(function () {
                $('#Ivanchenko-text').css({'transform':'translateX(-500vw)'});
              }, 500);
              clearInterval(timeOutSliding);
            })


  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {},
};
