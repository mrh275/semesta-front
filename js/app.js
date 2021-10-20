$(document).ready(function() {
    let menuMobile = document.querySelector('.menuMobile');
    let classMenu = menuMobile.getAttribute('class');

    // Mobile Menu Toggle Animation
    $('.hbButton').click(function(){
      let mMenu = $('.hb-menu');
      mMenu.eq(0).toggleClass('change-1');
      mMenu.eq(1).toggleClass('change-2');
      mMenu.eq(2).toggleClass('change-3');
      
      $('.menuMobile').toggleClass('-left-full');
      $('.menuMobile').toggleClass('left-0');
    })

    // Search button mobile
    $('.search-btn').on('click', function(){
        $('input.search-input').toggleClass('px-2', 100);
        $('input.search-input').toggleClass('w-0', 500);
        $('input.search-input').toggleClass('w-max', 500);
    })
    
    function showMenu() {
      $('.dropdown-menu').css('display', 'block');
      $('.dropdown-menu').removeClass('collapse', 300);
      $('.dropdown-menu').addClass('expand', 300);
    }

    function hideMenu() {
      $('.dropdown-menu').css('display', 'none');
      $('.dropdown-menu').addClass('collapse', 300);
      $('.dropdown-menu').removeClass('expand', 300);
    }


    // Dropdown toggle
      $('ul.menu-nav').on('click', '.dropdown', function() {
          $(this).find('.dropdown-menu').toggleClass('expand', 300);
          $(this).find('.dropdown-menu').toggleClass('collapse', 300);
          $(this).find('.dropdown-menu').toggleClass('invisible', 500);
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
      
    
  })