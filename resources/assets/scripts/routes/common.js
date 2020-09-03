import Typed from 'typed.js';

export default {
  init() {
    //* correct height
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    // global CONST
    const body = document.querySelector('body');

    window.onscroll = function () {
  let header = $('#header');
  let headerWhite = $('#header-white');
     
      if (window.pageYOffset > 50)
{
header.css({
  'background-color': 'rgba(0, 0, 0, 0.8)',
  'padding': '10px 0',
  'opacity': '0.9',
});
headerWhite.css({
  'background-color': '#f1f1f1',
  'padding': '10px 0',
  'opacity': '0.9',
});
}
      else
{
header.css({
  'background-color': 'transparent',
  'padding': '24px 0',
  'opacity': '1',
});
headerWhite.css({
  'background-color': 'transparent',
  'padding': '24px 0',
  'opacity': '1',
});
}
    }

    // document.querySelector('.header__menu__icon').addEventListener('click', function (e) {
    //   e.preventDefault();
    //   if (window.innerWidth <=991) {
    //     document.querySelector('.menu-main--mob').classList.add('show');
    //   }
    // });

    //* open mobile menu
    {
      (function () {
        const burger = document.querySelector('.burger-menu'),
              header = document.querySelector('.header'),
              header_menu = document.querySelector('.menu'),
              btn_close = document.querySelector('.menu__close'),
              homeBanner = document.querySelector('.home-banner');

        burger.addEventListener('click', function () {
          header.classList.add('js-opened');
          header_menu.classList.add('js-opened');
          body.classList.add('hidden');
          homeBanner.classList.remove('close-menu');
          homeBanner.classList.add('open-menu');
        });
        btn_close.addEventListener('click', function () {
          header.classList.remove('js-opened');
          header_menu.classList.remove('js-opened');
          body.classList.remove('hidden');
          homeBanner.classList.remove('open-menu');
          homeBanner.classList.add('close-menu');
        });

        // const checkBody = () => (e) => {
        //   if (!header_menu.contains(e.target)) {
        //     if (header_menu.classList.contains('js-opened')) {
        //       header_menu.classList.remove('js-opened');
        //       body.classList.remove('hidden');
        //     }
        //   }
        // };

        $(window).resize(function () {
          if ($(window).width() > 768) {
            header_menu.classList.remove('js-opened');
            body.classList.remove('hidden');
          }
        });
        if ($(window).width() > 768) {
          header_menu.classList.remove('js-opened');
          body.classList.remove('hidden');
        }

        // document.addEventListener('touchend', checkBody(true));
        // document.addEventListener('mouseup', checkBody(true));
      })();


    }

    //* rotate letters
    {
      //rotate letters in page section
      const letters = document.querySelectorAll('.animation-letters');

      const letterRotate = (blinkTextMenuLinks) => {
        blinkTextMenuLinks.forEach(link => {
          let letters = link.textContent.split('');
          link.textContent = '';
          letters.forEach((letter, i) => {
            i += 1;
            let span = document.createElement('span');
            let delay = i / 20;
            if (i % 2 === 0) {
              delay -= 0.1;
            } else {
              delay += 0.05;
            }
            let letterOut = document.createElement('span');
            letterOut.textContent = letter;
            letterOut.style.transitionDelay = `${delay}s`;
            letterOut.classList.add('out');
            span.append(letterOut);
            let letterIn = document.createElement('span');
            letterIn.textContent = letter;
            letterIn.style.transitionDelay = `${delay}s`;
            letterIn.classList.add('in');
            span.append(letterIn);
            link.append(span);
          });
        });
      }

      letterRotate(letters);
    }

    /*
    * this is function for 'typedText'
    */
    {
      let typedText = $('#typed').attr('data-typed-text');

      if (typedText) {
        typedText = typedText.split(',');
        // eslint-disable-next-line no-unused-vars
        let typed = new Typed('#typed', {
          strings: typedText,
          typeSpeed: 50,
          backDelay: 1500,
          loop: true,
          loopCount: 9999,
        });
      }
    }

    let fileName = 'Add attachment';
    let Default = 'Add attachment';

    $('.custom-file-input').on('change', function () {
      fileName = $('.custom-file-input').val().split('\\').pop();
      $('.name__text').text(fileName);
      if($('#customFile').val() != '') {
        $('.custom-file__lb').addClass('close')
      }
    });

    $('.custom-file__lb').on('click', function() {
      if($('#customFile').val() != '') {
        $(this).removeClass('close');
        $('.name__text').text(Default);
        $('#customFile').val('');
      } else {
        $('#customFile').click();
      }
    });

    //smooth scroll
    $('#toTop').click(function () {
      $('html, body').animate({scrollTop: 0}, 700);
    });

    // ==========ibg=========
function ibg() {
  $.each($('.ibg-js'), function () {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

ibg();

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
    //Shift + M - opens the sitemap
    document.onkeyup = (e) => {
      if (e.shiftKey && e.which === 77)
        window.location = '/sitemap.html'
    }
  },
};

