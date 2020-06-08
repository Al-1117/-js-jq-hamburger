

// COMPARSA DEL HAMBURGER MENU
var hamburger = false;

// Seleziono il collegamento all'hamburger menu e gli aggiungo il click
$('.header-right .fa-bars').click(
  function(){
    if (hamburger == false) {
      // Aggiungo la classe active già presente nel CSS per mostrarlo
      $('.hamburger-menu').addClass('active');

    hamburger = true;
    }

    // SCOMPARSA DELL'HAMBURGER MENU
    else if (hamburger == true) {
      // Aggiungo la funzione per nasconderlo
      $('.hamburger-menu').hide();

      hamburger = false;
    }

  }

);

// SCONPARSA DELL'HAMBURGE MENU
