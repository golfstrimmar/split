import typed from '../partials/typed'
import './../components/spincrement'
import '../partials/btn-6'
'use strict';

export default {
  init() {
    typed();

     $(window).scroll( function () {
      let height = document.documentElement.clientHeight;
      let topobgj = $('.numbers__wrapper').offset().top - height;
      console.log(height);
      let scrol = pageYOffset;
      if (topobgj < scrol) {
        $('.spincrement').spincrement({
          duration: 8000,
          thousandSeparator: '', 
        });
      }
    });

    // --------sliding text------
    let timeOutSliding;
    //  ------------
      $('#Karpov').on('mouseenter', function () {
       let Karpov = $('#Karpov').offset().left;
              $('#Karpov-text').css({
                'transform':'translateX(-' + Karpov + 'px)',
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
              'opacity':'0.6',
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
