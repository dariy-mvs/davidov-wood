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


  // popup для портфолио
  $( '.portfolio__list' ).magnificPopup( {
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
} );
