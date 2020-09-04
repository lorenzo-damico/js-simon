// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
$(document).ready(function() {

  // Creo una funzione che generi dei numeri casuali da 1 a max.
  function randomNumber(max) {
    var numeroRandom = Math.floor(Math.random() * max) + 1;
    return numeroRandom;
  }
  
  // 1. Imposto due variabili per controllare la difficoltà del gioco.
  var numeroMax = 100;
  var quantitaNumeri = 5;

  // 2. Creo l'array in cui andrò ad inserire i numeri generati.
  var numeriGenerati = [];

  // 3. Creo un ciclo per generare 5( o eventualmente più) numeri e pusharli nell'array solo se non già presenti.
  while (numeriGenerati.length < quantitaNumeri) {
    var numeroRandom = randomNumber(numeroMax);
    console.log(numeroRandom);

    if (numeriGenerati.includes(numeroRandom) == false) {
      numeriGenerati.push(numeroRandom);
      console.log(numeriGenerati);
    }
  }

  // 4. Creo un messaggio con un ciclo che esponga i 5( o eventualmente più) numeri generati.
  var messaggio = "I numeri sono: "
  for (var i = 0; i < numeriGenerati.length; i++) {
    if (i == numeriGenerati.length - 1) {
      messaggio += numeriGenerati[i] + ".";
    } else {
      messaggio += numeriGenerati[i] + ", ";
    }
  }

  // 5. Scrivo il messaggio con l'alert.
  alert(messaggio);



});
