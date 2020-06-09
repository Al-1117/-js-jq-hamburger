

// var hamburger = false;

// Seleziono il collegamento all'hamburger menu e gli aggiungo il click
// MOSTRO L'HAMBURGER MENU

// if (hamburger == false) {
  $('.header-right > a').click(
    function(){

      $('.hamburger-menu').addClass('active');
      //
      // hamburger = true;

    }
  );


// }

// NASCONDO L'HAMBURGER MENU

// else if (hamburger == true) {

  $('.hamburger-menu > a').click(
    function(){

      $('.hamburger-menu').removeClass('active');

      // hamburger = false;

    }
  );


// }

//
// $('.header-right .fa-bars').click(
//   function(){
//
//     if (hamburger == false) {
//       // Aggiungo la classe active già presente nel CSS per mostrarlo
//
//
//
//     }
//
//
//     else if (hamburger == true) {
//       // Aggiungo la funzione per nasconderlo
//       $('.hamburger-menu').hide();
//
//     hamburger = false;
//     }
//
//   }
//
// );
//
// // SCONPARSA DELL'HAMBURGE MENU
