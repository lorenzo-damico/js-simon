// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
$(document).ready(function() {
  // Creo una funzione che generi dei numeri casuali da 1 a max.
  function randomNumber(max) {
    var numeroRandom = Math.floor(Math.random() * max) + 1;
    return numeroRandom;
  }

  var numeroMax = 100;

  // 1. Creo l'array in cui andrò ad inserire i numeri generati.
  var numeriGenerati = [];

  // 2. Creo ciclo per generare 5 numeri e pusharli nell'array solo se non già presenti.
  while (numeriGenerati.length < 5) {
    var numeroRandom = randomNumber(numeroMax);
    console.log(numeroRandom);

    if (numeriGenerati.includes(numeroRandom) == false) {
      numeriGenerati.push(numeroRandom);
      console.log(numeriGenerati);
    }
  }


});
