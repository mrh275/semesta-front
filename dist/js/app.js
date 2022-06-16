$(document).ready(function() {
    let menuMobile = document.querySelector('.menuMobile');
    let classMenu = menuMobile.getAttribute('class');

    // Popular post vertical carousel
    $("div.popular-post-wrapper").slick({
      vertical: true,
      accessibility: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
    });

    // Scrolltop button event
    $('.scrollTop').on('click', function(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    })
});

$('.search-button').on('click', function(){
  $('.search-box').toggleClass('invisible');
  $('.search-box').toggleClass('opacity-0', 300);
  $('.search-box').toggleClass('translate-y-8');
});

    // Darkmode toggle event
    $('button.toggleTheme').on('click', function () {
      $('.toggleTheme').toggleClass('activated');
      $('.darkMode').toggleClass('showDark', 300);
      $('.lightMode').toggleClass('showLight', 300);
      $('body').toggleClass('dark')
      $('.navbar').toggleClass('dark')
      $('.sambutan').toggleClass('dark')
      $('.card').toggleClass('dark')
      $('.page-card').toggleClass('dark')
      $('.side-card').toggleClass('dark')
      $('.month').toggleClass('dark')
      $('.gallery-wrapper').toggleClass('dark')
      $('.footer').toggleClass('dark')
      $('.menuMobile').toggleClass('dark')
    })

    // Scroll To Top Button Visible on Scroll
    window.addEventListener('scroll', function () { 
      const scrollBtn = document.querySelector('.scrollTop');
      scrollBtn.classList.toggle('show', window.scrollY > 400)
     })

    // Navbar sticky on scroll
    let lastScrollTop = 0;
    $(window).scroll(function(event){
      let st = $(this).scrollTop();
      if(st > lastScrollTop) {
        $('.navbar').removeClass('absolute');
        $('.navbar').addClass('fixed');
        $('.navbar').addClass('sticky');
      } else {
        $('.navbar').removeClass('sticky');
        $('.navbar').removeClass('fixed');
        $('.navbar').addClass('absolute');
      }
    });

    // Mobile Menu Toggle Animation
    $('.hbButton').click(function(){
      let mMenu = $('.hb-menu');
      if($('.menuMobile').hasClass('-left-full')) {
        mMenu.eq(0).toggleClass('change-1');
        mMenu.eq(1).toggleClass('change-2');
        mMenu.eq(2).toggleClass('change-3');
        
        $('.menuMobile').toggleClass('-left-full');
        $('.menuMobile').toggleClass('left-0');
      }
    })

    // Close Mobile Menu on Click outside element
    $(window).click(function() {
      if($('.menuMobile').css('left') == "0px") {
        let mMenu = $('.hb-menu');
        mMenu.eq(0).toggleClass('change-1');
        mMenu.eq(1).toggleClass('change-2');
        mMenu.eq(2).toggleClass('change-3');

        $('.menuMobile').toggleClass('-left-full');
        $('.menuMobile').toggleClass('left-0');
      }
    })

    // Search button mobile
    $('.search-btn').on('click', function(){
        $('input.search-input').toggleClass('w-0', 500);
        $('input.search-input').toggleClass('w-max', 500);
    })

    // Dropdown toggle
      $('ul.menu-nav').on('click', '.dropdown', function() {
          $(this).find('.dropdown-menu').toggleClass('expand', 300);
          $(this).find('.dropdown-menu').toggleClass('collapse', 300);
          $(this).find('.dropdown-menu').toggleClass('invisible', 500);
          $(this).find('.dropdown-menu').prev().toggleClass('active-open');
      })

      // Dropdown level 1 toggle
      $('.dropdown-menu li').on('click', '.dropdown-1', function() {
        $('.dropdown-menu li').find('.dropdown-menu-1').toggleClass('expand', 300);
        $('.dropdown-menu li').find('.dropdown-menu-1').toggleClass('collapse', 300);
        $('.dropdown-menu li').find('.dropdown-menu-1').toggleClass('invisible', 500);
        $('.dropdown-menu li').find('.dropdown-menu-1').prev().toggleClass('active-open');
    })

      // Prevent all unwanted click event
      $('.menuMobile').click(function(event) {
        event.stopPropagation();
      })

      $('.dropdown-menu').click(function(event) {
        event.stopPropagation();
      })

      // Dropdown hover level 1
        $('.menu-nav-lg .dropdown').mouseenter(function() {
          $(this).find('.dropdown-lg').toggleClass('invisible', 500);
          $(this).find('.dropdown-lg').toggleClass('expanded', 200);
          $(this).find('.dropdown-lg').toggleClass('collapse', 200);
        }).mouseleave(function () { 
          $(this).find('.dropdown-lg').toggleClass('expanded', 300);
          $(this).find('.dropdown-lg').toggleClass('collapse', 300);
          $(this).find('.dropdown-lg').toggleClass('invisible', 500);
        });

      // Dropdown hover level 2
        $('.dropdown-link-lg').mouseenter(function() {
          $(this).find('.drop-1-lg').toggleClass('invisible', 500);
          $(this).find('.drop-1-lg').toggleClass('expanded', 200);
          $(this).find('.drop-1-lg').toggleClass('collapse', 200);
        }).mouseleave(function () { 
          $(this).find('.drop-1-lg').toggleClass('expanded', 300);
          $(this).find('.drop-1-lg').toggleClass('collapse', 300);
          $(this).find('.drop-1-lg').toggleClass('invisible', 500);
        });

        $('.read-more').hover(function(){
          $('.hero-arrow').toggleClass('translate-x-1 transform')
        })

        // Swiper js
        const swiper = new Swiper('.swiper', {
          loop: true,
          // Autoplay hero images
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
        });

        const gallery = new Swiper('.gallery-content', {
          loop: true,
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        })

        
        