// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
$(document).ready(function() {

  // Creo una funzione che generi dei numeri casuali da 1 a max.
  function randomNumber(max) {
    var numeroRandom = Math.floor(Math.random() * max) + 1;
    return numeroRandom;
  }

  // 1. Imposto variabili per controllare la difficoltà del gioco.
  var numeroMax = 100;
  var quantitaNumeri = 5;
  var tempoAttesa = 30000;

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
  var messaggio = "Cerca di ricordare i seguenti numeri: ";
  for (var i = 0; i < numeriGenerati.length; i++) {
    if (i == numeriGenerati.length - 1) {
      messaggio += numeriGenerati[i] + ".";
    } else {
      messaggio += numeriGenerati[i] + ", ";
    }
  }

  // 5. Scrivo il messaggio con l'alert.
  alert(messaggio);

  // 6. Imposto un timeout per far partire la funzione di gioco.
  setTimeout(
    function() {
      // 7. Creo un array dove inserire tutti i numeri immessi dall'utente e uno dove inserire solo i numeri indovinati.
      var numeriUtente = [];
      console.log("Numeri inseriti: " + numeriUtente);
      var numeriRicordati = [];
      console.log("Numeri ricordati: " + numeriRicordati);

      // 8. Creo un ciclo per chiedere 5( o eventualmente più) volte all'utente i numeri mostrati precedentemente.
      while (numeriUtente.length < quantitaNumeri) {
        var numeroUtente = parseInt(prompt("Inserisci un numero mostrato in precedenza compreso fra 1 e " + numeroMax));
        console.log(numeroUtente);

        if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > numeroMax) {
          alert("Hai inserito un valore non consentito. Ripeti.");

        } else if (numeriUtente.includes(numeroUtente)) {
          alert("Hai già inserito questo numero. Ripeti.");

        } else {

          // 9. Se il numero è indovinato lo pusho anche un un altro array.
          if (numeriGenerati.includes(numeroUtente)) {
            numeriRicordati.push(numeroUtente);
          }

          numeriUtente.push(numeroUtente);
          console.log("Numeri inseriti: " + numeriUtente);
          console.log("Numeri ricordati: " + numeriRicordati);
        }
      }

      // 10. Creo un ciclo per generare il messaggio di esito. Stampo il risultato del gioco.
      var esitoGioco = "";

      for (var i = 0; i < numeriRicordati.length; i++) {
        if (i == numeriRicordati.length - 1) {
          esitoGioco += numeriRicordati[i] + ".";
        } else {
          esitoGioco += numeriRicordati[i] + ", ";
        }
      }

      if (numeriRicordati.length == 0) {
        alert("Non hai ricordato nessun numero!");

      } else if (numeriRicordati.length == 1) {
        alert("Hai ricordato solo il numero " + esitoGioco);

      } else if (numeriRicordati.length == numeriGenerati.length) {
        alert("Hai ricordato tutti e " + numeriRicordati.length + " i numeri.\nI numeri ricordati sono: " + esitoGioco);

      } else {
        alert("Hai ricordato " + numeriRicordati.length + " numeri.\nI numeri ricordati sono: " + esitoGioco);

      }

    }, tempoAttesa
  );

});
