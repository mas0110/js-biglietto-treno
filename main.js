// kilometri che deve percorrere e la sua età
let numerokm = prompt("Quanti kilometri devi fare?:")

let età = prompt("Quanti anni hai?:")

console.log( numerokm + " "+ età)

// prezzo totale del biglietto

const prezzokm = 0.21;

console.log(numerokm * prezzokm)

let prezzo = numerokm * prezzokm;


// prezzo totale del biglietto con sconti applicati

let prezzo20 = prezzo - prezzo / 100 * 20;

let prezzo40 = prezzo - prezzo / 100 * 40;

if (età < 18) {
  document.getElementById("finalprice").innerHTML = 'Il prezzo del suo biglietto è di ' + prezzo20.toFixed(2) + '€ con sconto del 20% per under 18';
  console.log('Il prezzo è ' + prezzo20.toFixed(2) + '€ con sconto del 20% per under 18');
}
else if (età > 64) {
  document.getElementById("finalprice").innerHTML = 'Il prezzo del suo biglietto è di ' + prezzo40.toFixed(2) + ' con sconto del 40% per over 65';
  console.log('Il prezzo è ' + prezzo40.toFixed(2) + '€  con sconto del 40% per over 65');
}
else {
  document.getElementById("finalprice").innerHTML = 'Il prezzo del suo biglietto è di ' + prezzo.toFixed(2) + '€';
  console.log('Il prezzo è ' + prezzo.toFixed(2));
}
