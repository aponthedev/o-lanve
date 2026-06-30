(function ($) {
  'use strict';

  //============================ Scroll To Top Js Start ========================
  var btn = $('.scroll-top');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      '300'
    );
  });
  //============================ Scroll To Top Js End ========================

  // ========================= Header Sticky Js Start ==============
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 300) {
      $('.header__area').addClass('fixed-header');
    } else {
      $('.header__area').removeClass('fixed-header');
    }
  });
  // ========================= Header Sticky Js End===================

  //============================ Offcanvas Js Start ============================
  $(document).on('click', '.menu__open', function () {
    $('.offcanvas__area, .overlay').addClass('active');
  });

  $(document).on('click', '.menu__close, .overlay', function () {
    $('.offcanvas__area, .overlay').removeClass('active');
  });

  //============================ Offcanvas Js End ==============================

  // ========================== Add Attribute For Bg Image Js Start =====================
  $('.bg--img').css('background-image', function () {
    var bg = 'url(' + $(this).data('background-image') + ')';
    return bg;
  });
  // ========================== Add Attribute For Bg Image Js End =====================

  // isInViewport helper function
  $.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // ========================= Odometer Js Start ===================
  if ($('.odometer').length > 0) {
    function startOdometer() {
      $('.odometer').each(function () {
        if ($(this).isInViewport()) {
          if (!$(this).data('odometer-started')) {
            $(this).data('odometer-started', true);
            this.innerHTML = $(this).data('odometer-final');
          }
        }
      });
    }

    $(window).on('scroll load', startOdometer);
    startOdometer();
  }
  // ========================= Odometer Js End ===================

  // ========================= Magnific Popup Js Start ===================
  $('.video-testimonial-item__play').magnificPopup({
    type: 'iframe',
  });
  // ========================= Magnific Popup Js End ===================

// ========================= Testimonial Swiper Js Start =====================
  const swiperTestimonials = new Swiper('.testimonial-slider', {
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.slider-next-v2',
      prevEl: '.slider-prev-v2',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },

      991: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  // ========================= Testimonial Swiper Js End =====================

  // ========================= Testimonials Section Swiper Js Start =====================
  if ($('.testimonials-section__slider').length) {
    new Swiper('.testimonials-section__slider', {
      loop: true,
      speed: 1200,
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      followFinger: false,
      threshold: 8,
      effect: 'creative',
      creativeEffect: {
        limitProgress: 2,
        perspective: false,
        prev: {
          translate: [0, '-100%', 0],
          opacity: 0,
          scale: 0.98,
        },
        next: {
          translate: [0, '100%', 0],
          opacity: 0,
          scale: 0.98,
        },
      },
      navigation: {
        nextEl: '.testimonials-section__nav--next',
        prevEl: '.testimonials-section__nav--prev',
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    });
  }
  // ========================= Testimonials Section Swiper Js End =====================

  // ========================= Cetagorey Swiper Js Start =====================
  if ($('.cetagorey__slider').length) {
    new Swiper('.cetagorey__slider', {
      loop: false,
      speed: 700,
      spaceBetween: 24,
      grabCursor: true,
      navigation: {
        nextEl: '.cetagorey__nav--next',
        prevEl: '.cetagorey__nav--prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 6,
        },
      },
    });
  }
  // ========================= Cetagorey Swiper Js End =====================

  // ========================= Talent Review Swiper Js Start =====================
  if ($('.talent-profile__reviews-slider').length) {
    new Swiper('.talent-profile__reviews-slider', {
      loop: true,
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      autoHeight: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.talent-profile__dots',
        clickable: true,
      },
    });
  }
  // ========================= Talent Review Swiper Js End =====================

  // ========================= Explore Proposal Toggle Js Start =====================
  $('.explore__bids').each(function () {
    const bidsSection = $(this);
    const button = bidsSection.find('.explore__load-more');
    const bidCount = bidsSection.find('.explore__bid').length;

    if (bidCount <= 4) {
      button.hide();
      return;
    }

    button.on('click', function () {
      const isExpanded = bidsSection
        .toggleClass('is-expanded')
        .hasClass('is-expanded');

      button.attr('aria-expanded', isExpanded);
      button.find('span').text(isExpanded ? 'Show Less' : 'Show More');
    });
  });
  // ========================= Explore Proposal Toggle Js End =====================

  // ========================= View Profile Description Toggle Js Start =====================
  $('.view-profile__desc-more').each(function () {
    const descBlock = $(this);
    const buttons = descBlock.find('.view-profile__desc-toggle');

    buttons.on('click', function () {
      const isExpanded = descBlock
        .toggleClass('is-expanded')
        .hasClass('is-expanded');

      buttons.attr('aria-expanded', isExpanded);
    });
  });
  // ========================= View Profile Description Toggle Js End =====================

  // ========================= View Profile Reviews Toggle Js Start =====================
  $('.review').each(function () {
    const reviewSection = $(this);
    const toggleButton = reviewSection.find('.review__toggle');

    toggleButton.on('click', function () {
      const isExpanded = reviewSection
        .toggleClass('is-expanded')
        .hasClass('is-expanded');

      toggleButton.attr('aria-expanded', isExpanded);
      toggleButton
        .find('span')
        .text(isExpanded ? 'Show less reviews' : 'Show more reviews');
    });
  });
  // ========================= View Profile Reviews Toggle Js End =====================

  // ========================= Select2 Js Start =====================
  if ($('.select2').length) {
    $('.select2').select2();
  }
  // ========================= Select2 Js End =====================

  // ========================= Show Hide Password Js Start ===================
  if ($('.password-show-hide').length) {
    $('.password-show-hide').each(function () {
      $(this).on('click', function () {
        let inputField = $(this).closest('.password__field').find('input');
        let openEye = $(this).find('.open-eye-icon');
        let closeEye = $(this).find('.close-eye-icon');

        if (inputField.attr('type') === 'password') {
          inputField.attr('type', 'text');
          openEye.show();
          closeEye.hide();
        } else {
          inputField.attr('type', 'password');
          openEye.hide();
          closeEye.show();
        }
      });
    });
  }
  // ========================= Show Hide Password Js End ===================

  // ========================= Scroll Reveal Js Start ===================
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
    reset: true,
  });

  sr.reveal('.class__name', {
    delay: 60,
    interval: 100,
    origin: 'bottom',
  });

  sr.reveal('.account-section__content', {
    origin: 'left',
    distance: '45px',
    duration: 1100,
    reset: false,
  });

  sr.reveal('.account-section__visual', {
    origin: 'right',
    distance: '45px',
    duration: 1100,
    delay: 180,
    reset: false,
  });
  // ========================= Scroll Reveal Js End ===================

  // ========================== Table Data Label Js Start =====================
  Array.from(document.querySelectorAll('table')).forEach((table) => {
    let heading = table.querySelectorAll('thead tr th');
    Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
      let columArray = Array.from(row.querySelectorAll('td'));
      if (columArray.length <= 1) return;
      columArray.forEach((colum, i) => {
        colum.setAttribute('data-label', heading[i].innerText);
      });
    });
  });
  // ========================== Table Data Label Js End =====================

  // ========================== Label Required Js Start =====================
  $.each($('input, select, textarea'), function (i, element) {
    if (element.hasAttribute('required')) {
      $(element)
        .closest('.form-group')
        .find('label')
        .first()
        .addClass('required');
    }
  });
  // ========================== Label Required Js End =====================

  // ========================= Preloader Js Start =====================
  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });
  // ========================= Preloader Js End=====================
})(jQuery);
