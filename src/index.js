document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('nav');
    const id = document.getElementById('navbar-default')
    const ul = id.querySelector('ul')
    const navLinks = ul.querySelectorAll("li");
    const logo_name = document.getElementById('logo_name')
  
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 0) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-white');
        logo_name.classList.remove('hidden')
        logo_name.classList.add('flex-col')

        navLinks.forEach((navLink) => {
            navLink.querySelector('a').classList.remove('text-white');
            navLink.querySelector('a').classList.add('text-slate-600')
          });

      } else {
        navbar.classList.remove('bg-white');
        navbar.classList.add('bg-transparent');
        logo_name.classList.remove('flex-col')
        logo_name.classList.add('hidden')

        navLinks.forEach((navLink) => {
            navLink.querySelector('a').classList.remove('text-slate-600');
            navLink.querySelector('a').classList.add('text-white');
          });
      }
    });
  });
  jQuery(document).ready(function($) {
    $(".myslider").slick({
      autoplay: true,
      autoplaySpeed: 2e3,
      dots: true,
      arrows: true,
      slidesToShow: 4,
      prevArrow: $(".slider-prev"),
      nextArrow: $(".slider-next"),
      responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]
    });
  });