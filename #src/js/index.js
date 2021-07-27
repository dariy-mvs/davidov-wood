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
  };

  // слайдер блога на главной
  $( '.blog-home__list' ).slick( {
    dots: true,
    dotsClass: 'blog-home__list_dots',
    //infinite: false,
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
      },
    ]
  } );
} );
