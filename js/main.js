
    const swiper = new Swiper('.swiper', {
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      breakpoints: {
          320: {
              slidesPerView: 1,
              spaceBetween: 20
          },
          480: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
              slidesPerView: 3,
              spaceBetween: 40
          }
      }
  });
  
  
  
  
  
  
  
  
   $('.nav li:first').addClass('active');
  
          var showSection = function showSection(section, isAnimate) {
            var
            direction = section.replace(/#/, ''),
            reqSection = $('.section').filter('[data-section="' + direction + '"]'),
            reqSectionPos = reqSection.offset().top - 0;
  
            if (isAnimate) {
              $('body, html').animate({
                scrollTop: reqSectionPos },
              800);
            } else {
              $('body, html').scrollTop(reqSectionPos);
            }
  
          };
  
          var checkSection = function checkSection() {
            $('.section').each(function () {
              var
              $this = $(this),
              topEdge = $this.offset().top - 80,
              bottomEdge = topEdge + $this.height(),
              wScroll = $(window).scrollTop();
              if (topEdge < wScroll && bottomEdge > wScroll) {
                var
                currentId = $this.data('section'),
                reqLink = $('a').filter('[href*=\\#' + currentId + ']');
                reqLink.closest('li').addClass('active').
                siblings().removeClass('active');
              }
            });
          };
  
          $('.main-menu, .responsive-menu, .scroll-to-section').on('click', 'a', function (e) {
            e.preventDefault();
            showSection($(this).attr('href'), true);
          });
  
          $(window).scroll(function () {
            checkSection();
          });
    
