
$( document ).ready( () => {
  console.log( 'a' );

  $( '.hamburger' ).on( 'click', function() {
    if (!$(this).hasClass('is-active')) {
      $( this ).addClass( 'is-active' );
      $( '.header__nav_list' ).fadeIn(500);
    } else {
      $( this ).removeClass( 'is-active' );
      $( '.header__nav_list' ).fadeOut(500);
    }
   });

  // slider в header

  $( '.header__slider' ).slick({
    dots: true,
    dotsClass: 'header__slider_dots'
  });

  // показ поля для поиска

  $('.header__nav_search').on('click', () => {
    $('.header__nav_field').show('slow');
  });
} );
