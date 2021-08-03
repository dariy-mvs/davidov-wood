$( document ).ready( () => {
  $( '.hamburger' ).on( 'click', function() {
    if ( !$( this ).hasClass( 'is-active' ) ) {
      $( this ).addClass( 'is-active' );
      $( '.header__nav_list' ).fadeIn( 500 );
    } else {
      $( this ).removeClass( 'is-active' );
      $( '.header__nav_list' ).fadeOut( 500 );
    }
  } );

  // slider в header

  $( '.header__slider' ).slick( {
    dots: true,
    dotsClass: 'header__slider_dots'
  } );

  // показ поля для поиска

  $( '.header__nav_search' ).on( 'click', () => {
    $( '.header__nav_field' ).show( 'slow' );
  } );

  // событие перехода по ссылке для блока каталога на главной
  $( '.catalog-home__chapters_list' ).on( 'click', ( event ) => {
    const item = event.target.closest( '.catalog-home__chapters_item' );
    if ( item && !event.target.closest( '.catalog-home__chapter_link' ) ) {
      const link = item.querySelector( '.catalog-home__chapter_link' );
      document.location.href = $( link ).attr( 'href' );
    }
  } );

  // если пользователь зашёл с телефона или планшета - показывать описание каталога всегда
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
    $( '.catalog-home__chapter_descr' ).each( function() {
      $( this ).addClass( 'chapterMobile' );
    } );
  }

  // слайдер блога на главной
  $( '.blog-home__list' ).slick( {
    dots: true,
    dotsClass: 'blog-home__list_dots',

    // infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  } );

  // пагинация для портфолио

  function pagination(parentSelector, itemSelector, itemPage) {
    const items = $( `${parentSelector} ${itemSelector}`);
    const numItems = items.length;
    const perPage = itemPage;

    items.slice( perPage ).hide();
    $( '.pagination-container' ).pagination( {
    items: numItems,
    itemsOnPage: perPage,
    prevText: '&laquo;',
    nextText: '&raquo;',
    onPageClick( pageNumber ) {
      const showFrom = perPage * ( pageNumber - 1 );
      const showTo = showFrom + perPage;
      items.hide().slice( showFrom, showTo ).show();
      $( 'html, body' ).animate( { scrollTop: 0 }, 100 );
    }
  } );
  };
  
  pagination('.portfolio__list', '.portfolio__item', 6);
  pagination('.blog-main__list', '.blog-home__item', 5);
  pagination('.catalog__list', '.catalog__item', 5);


  // popup для портфолио

  function popupImg(selector) {
    $( selector ).magnificPopup( {
      delegate: 'img',
      type: 'image',
      gallery: {
        enabled: true
      },
      callbacks: {
        elementParse( itemImg ) {
          const elem = itemImg;
          elem.src = elem.el.attr( 'src' );
        }
      }
    } );
  };

  popupImg('.portfolio__list');

  // показ поля комментов 

  $('.comments__write').on('click', () => {
    $('.comments__write_form').toggleClass('formHidden');
  });

  // слайдер для страницы продукта

  $('.product__big_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.product__slider'
  });
  $('.product__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.product__big_slider',
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, 
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // слайдер похожих работ

  $( '.product__anotherlist' ).slick( {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  } );

  // табы страницы продукта 

  $('.product__tabs_item').on('click', (event) => {
    let target = event.target;
    if (target.classList.contains('active')) {
      return;
    } else {
      let tab = target.closest('.product__tabs_item');
      let content = document.querySelector('.product__tabs_content');
      $('.active').removeClass('active');
      tab.classList.add('active');
      console.log(tab.dataset.tab);
      if (tab.dataset.tab === 'description') {
        console.log('a');
        content.innerHTML = '<p>Компания «Давыдов и Ко» активно развивается на рынке мебели и изделий для интерьера из натурального дерева Санкт-Петербурга. За годы своей деятельности мы сформировали коллектив высококвалифицированных сотрудников и развили партнёрские отношения с надёжными поставщиками. Развитие бизнеса и охват новых рынков побуждает нас расширять штат дизайнеров и архитекторов, а также строить доверительные отношения с производителями натуральной древесины, фурнитуры и лакокрасочных материалов.</p>'
      } else if (tab.dataset.tab === 'color') {
        console.log('b');
        content.innerHTML = '<p>Контент цветов</p>'
      } else if (tab.dataset.tab === 'review') {
        console.log('c');
        content.innerHTML = '<p>Контент отзывов</p>'
      } else if (tab.dataset.tab === 'video') {
        console.log('d');
        content.innerHTML = '<p>Контент video</p>'
      } 
    }
  });

  // отзывы popup для фото

  popupImg('.review__img_box');

  // пагинация для отзывов 

  pagination('.reviews__list', '.reviews__item', 5);

  // форма обратной связи

  function addPopup(selector) {
    $(selector).on('click', () => {
      $('.callback').css("display", "flex");
    });
  }
  addPopup('.header__nav_button');

  $('.callback').on('click', (event) => {
    let target = event.target;
    if (target.classList.contains('callback__esc')|| !target.closest('.callback__box')) {
      $('.callback').css("display", "none");
    }
  });
} );
