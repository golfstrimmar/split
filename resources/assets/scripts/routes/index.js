// import Instafeed from 'instafeed.js/dist/instafeed';

'use strict';

export default {
  init() {
    
    // $('h1').on('click', function () {
    //   let video = document.createElement('video');
    //   $(video).attr('class','home__banner__video');
    //   $(video).attr('data-poster','https://mk0trueagencygt2rhoj.kinstacdn.com/wp-content/uploads/2018/08/digital-agency-melbourne-true.jpg');
    //   $(video).attr('autoplay','true');
    //   $(video).attr('loop','true');
    //   $(video).attr('muted','true');
    //   let randomNumber = Math.floor((Math.random() * 4) + 1);
    //   video.innerHTML = '<source src="images/home-video/'+ randomNumber +'.m4v" type="video/mp4">';
    //   $('.home__banner')[0].appendChild(video);
    // });

//--------- instagram---------------    
function instagramFeed(container = '.instagram-feed') {
  const wrapper = document.querySelector(container);
  const username = wrapper.getAttribute('data-username');
  const count = wrapper.getAttribute('data-count');
  const host = 'https://www.instagram.com/';
  const url = host + username;
  const hostImageUrl = host + 'p/';

  let userFeed = {};

  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      // get content from script tag
      data = data.split('window._sharedData = ')[1].split('</script>')[0];
      data = JSON.parse(data.substr(0, data.length - 1));
      data = data.entry_data.ProfilePage;
      data = data[0].graphql.user;

      userFeed = {
        fullName: data.full_name,
        username: data.username,
        biography: data.biography,
        follow: data.edge_follow,
        followed: data.edge_followed_by,
        id: data.id,
        externalUrl: data.external_url,
        medias: [],
      };

      const medias = data.edge_owner_to_timeline_media.edges;
      medias.forEach((element) => {
        const imagesImgUrl = element.node.thumbnail_src;
        const imagesUrl = element.node.shortcode;
        const imagesCaption =
          element.node.edge_media_to_caption.edges[0].node.text;
        const imagesLike = element.node.edge_media_preview_like.count;
        const imagesComments = element.node.edge_media_to_comment.count;

        userFeed.medias.push({
          urlImage: imagesImgUrl,
          url: hostImageUrl + imagesUrl,
          caption: imagesCaption,
          likes: imagesLike,
          comments: imagesComments,
        });
      });

      return userFeed;
    })
    .then((userFeed) => {
      let htmlFeed = '';
      for (let i = 0; i < count; i++) {
        const media = userFeed.medias[i];

        htmlFeed += `<div class='instagram-images__item'>
                    <a href="${media.url}" target="_blank" class="instagram-images__item-image">
                        <img src="${media.urlImage}">
                    </a>
                </div>`;
      }

      wrapper.innerHTML = htmlFeed;
    });
}
// Feed 1
instagramFeed('.instagram-images');
// -----/instagram---------

// -----блоки качаются и меняют цвет по градиенту------
    $('.portfolio__tile')
      .on('mousemove', function(e){
        var itemContainer = $(this);
        var pageX = e.pageX;
        var pageY = e.pageY;
        var itemX = itemContainer.offset().left;
        var itemY = itemContainer.offset().top;
        var itemW = itemContainer.width();
        var itemH = itemContainer.height();

        var percentX = (pageX-itemX)/itemW*20;
        var percentY = (pageY-itemY)/itemH*20;

        var minY = 10, maxY = -10, diffY = minY-maxY;
        var rotateY = minY-percentX/20*diffY;
        rotateY = rotateY<maxY ? maxY : rotateY;
        rotateY = rotateY>minY ? minY : rotateY;
        var minX = -7, maxX = 7, diffX = minX-maxX;
        var rotateX = minX-percentY/20*diffX;
        rotateX = rotateX<minX ? minX : rotateX;
        rotateX = rotateX>maxX ? maxX : rotateX;
        var transform = 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)';
        itemContainer.css('transform', transform);
      })
      .on('mouseleave', function(){
        var itemContainer = $(this);
        itemContainer.css('transform', '');
      });

    $('.portfolio__tile').on('mousemove', function(e){
      var itemContainer = $(this);
      var pageX = e.pageX;
      var pageY = e.pageY;
      var itemX = itemContainer.offset().left;
      var itemY = itemContainer.offset().top;
      var itemW = itemContainer.width();
      var itemH = itemContainer.height();

      var bgCol = itemContainer.data('bg-col');
      var bgCenterCol = itemContainer.data('bg-center');

      var percentX = (pageX-itemX)/itemW*100;
      var percentY = (pageY-itemY)/itemH*100;

      var bg = 'radial-gradient(circle at '+percentX+'% '+percentY+'%, '+bgCenterCol+', '+bgCol+')';
      itemContainer.css('background', bg);
    });

    $('.portfolio__tile').on('mouseleave', function(){
      var itemContainer = $(this);
      itemContainer.css('background', itemContainer.data('bg-col'));
    });

// -----/блоки качаются и меняют цвет по градиенту------


    /*
     *  this is function for scrolling
     *  when scrolling, the text moves horizontally
     */
    //! нужно переделать, лишний код
    {
      let windowOffset;
      let viewPort = window.innerHeight;
      let portfolio = $('#portfolio');
      let design = $('#design');
      let about = $('#about');
      let lastScrollTop2 = 0;
      let lastScrollTop3 = 0;
      let xDesign = 0;
      let xAbout = 0;


      $(window).on('scroll', function () {
        windowOffset = window.pageYOffset;

        //Design
        if (windowOffset >= (design.offset().top - viewPort) && windowOffset <= (design.offset().top + 200)) {
          let st2 = $(this).scrollTop();
          if (st2 > lastScrollTop2) {
            xDesign += 2;
            design.parent().css('transform', 'translateX(' + xDesign + 'px)');
          } else {
            xDesign -= 2;
            design.parent().css('transform', 'translateX(' + xDesign + 'px)')
          }
          lastScrollTop2 = st2;
        }

        //About Us
        if (windowOffset >= (about.offset().top - viewPort) && windowOffset <= (about.offset().top + 200)) {
          let st3 = $(this).scrollTop();
          if (st3 > lastScrollTop3) {
            xAbout += 2;
            about.parent().css('transform', 'translateX(' + xAbout + 'px)');
          } else {
            xAbout -= 2;
            about.parent().css('transform', 'translateX(' + xAbout + 'px)')
          }
          lastScrollTop3 = st3;
        }


        //Portfollio
        if (windowOffset >= (portfolio.offset().top - viewPort) && windowOffset <= (portfolio.offset().top + 200)) {
          let st3 = $(this).scrollTop();
          if (st3 > lastScrollTop3) {
            xAbout += 2;
            portfolio.parent().css('transform', 'translateX(' + xAbout + 'px)');
          } else {
            xAbout -= 2;
            portfolio.parent().css('transform', 'translateX(' + xAbout + 'px)')
          }
          lastScrollTop3 = st3;
        }

        var timeOutDesign;
        var timeOutFrontend;
        var timeOutBackend;
        $('.design').on('mouseleave', function () {
          $('#design').css({'transform':'translateX(-100vw)','opacity':'0'});
          timeOutDesign = setInterval(function () {
            $('#design').css({'transform':'translateX(100vw)','transition':'0'});
          }, 500);
        })

        $('.design').on('mouseenter', function () {
          $('#design').css({'transform':'translateX(0)','transform-origin':'100vw','opacity':'0.43','transition':'0.5s'});
          clearInterval(timeOutDesign);
        });

        $('.frontend').on('mouseleave', function () {
          $('#frontend').css({'transform':'translateX(-100vw)','opacity':'0'});
          timeOutFrontend = setInterval(function () {
            $('#frontend').css({'transform':'translateX(100vw)','transition':'0'});
          }, 500);
        })

        $('.frontend').on('mouseenter', function () {
          $('#frontend').css({'transform':'translateX(0)','transform-origin':'100vw','opacity':'0.43','transition':'0.5s'});
          clearInterval(timeOutFrontend);
        });

        $('.backend').on('mouseleave', function () {
          $('#backend').css({'transform':'translateX(-100vw)','opacity':'0'});
          timeOutBackend = setInterval(function () {
            $('#backend').css({'transform':'translateX(100vw)','transition':'0'});
          }, 500);
        })

        $('.backend').on('mouseenter', function () {
          $('#backend').css({'transform':'translateX(0)','transform-origin':'100vw','opacity':'0.43','transition':'0.5s'});
          clearInterval(timeOutBackend);
        });

      });
    }

    //------*     Section of Floating Icons     *------//
    //Select Elements
    let icons = document.querySelectorAll('.home__use__specifies__icons');

    //Amplitude
    let amplitude = 16;

    //Interval Array
    var interval = [];
    let counter = 0;

    //RunSpeed
    let runSpeed = 0.6;

    //Init Function
    for (let i = 0; i < icons.length; i++) {
      for (let z = 0; z < icons[i].children.length; z++, counter++) {
        setTimeout(floating(i, z, counter), Math.random() * 2000);
      }
    }

    //Set Floating Elements through interval
    function floating(i, z, counter) {
      interval[counter] = setInterval(function () {
        //Get random X
        let x = Math.floor(Math.random() * amplitude);
        if (Math.random() < 0.5) {
          x = -x;
        }

        //Get random Y
        let y = Math.floor(Math.random() * amplitude);
        if (Math.random() < 0.5) {
          y = -y;
        }
        $(icons[i].children[z]).css('transform', 'translate(' + x + 'px, ' + y + 'px)');
        $(icons[i].children[z]).on('mouseenter mousemove', function (e) {
          clearInterval(interval[counter]);
          let x1 = $(this).offset().left + 34;
          let y1 = $(this).offset().top + 34;

          if ((e.pageX >= x1) && (e.pageY >= y1)) {
            $(icons[i].children[z]).css({'transform': 'translate(' + -amplitude + 'px, ' + -amplitude + 'px)', 'transition': '' + runSpeed + 's'});
          }
          else if ((e.pageX >= x1) && (e.pageY <= y1)) {
            $(icons[i].children[z]).css({'transform': 'translate(' + -amplitude + 'px, ' + amplitude + 'px)', 'transition': '' + runSpeed + 's'});
          }
          else if ((e.pageX <= x1) && (e.pageY <= y1)) {
            $(icons[i].children[z]).css({'transform': 'translate(' + amplitude + 'px, ' + amplitude + 'px)', 'transition': '' + runSpeed + 's'});
          }
          else if ((e.pageX <= x1) && (e.pageY >= y1)) {
            $(icons[i].children[z]).css({'transform': 'translate(' + amplitude + 'px, ' + -amplitude + 'px)', 'transition': '' + runSpeed + 's'});
          }
        });
        $(icons[i].children[z]).on('mouseleave', function () {
          interval[counter] = setInterval(function () {
            if (Math.random() < 0.5) {
              x = -x;
            }

            if (Math.random() < 0.5) {
              y = -y;
            }
            $(icons[i].children[z]).css({'transform': 'translate(' + x + 'px, ' + y + 'px)', 'transition': '3.5s'});
          }, 3500);
        });
      }, 3500);
    }
//------*    The End of the Floating Icons Section    *------//


    // let userFeed = new Instafeed({
    //   accessToken: 'IGQVJVeWQtUUVjNHFhUjlPX2FXN2RHYkNZATy1WLU5Rc3B4THlSdjZAwNGNOLWt5OEFOYTc1ZA2hIYy1JRHB5UmpzX3RwWWdJbjZAGODR4cWVVWnlBdTQwWU5WTktraU9kOElRV0s4WFV1bE15RHVxMU1CVgZDZD',
    //   // get: 'user',
    //   // userId: '11179338496',
    //   // clientId: '924f677fa3854436947ab4372ffa688d',
    //   // accessToken: '11179338496.1677ed0.a35a43c2888841ecacd5e7b8723f1d20',
    //   resolution: 'standard_resolution',
    //   template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" class="img" /></a></div>',
    //   // sortBy: 'most-recent',
    //   limit: 3,
    //   links: false,
    // });
    // userFeed.run();
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
