/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (primoNumero, secondoNumero) {
  if (primoNumero === secondoNumero) {
    return (primoNumero + secondoNumero) * 3;
  } else primoNumero + secondoNumero;
  {
    return primoNumero + secondoNumero;
  }
};

console.log(crazySum(10, 10));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (numeroIntero) {
  if ((numeroIntero > 20 && numeroIntero <= 100) || numeroIntero === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(10));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (stringa) {
  return stringa.split("").reverse().join("");
 
  //   let newReverseString = "";
  //   for (let i = stringa.length - 1; i >= 0; i--) {
  //     newReverseString += stringa[i];
  //   }
  //   return newReverseString;
};

console.log(reverseString("EPICODE"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (letteraMaiuscola) {
  let stringa = letteraMaiuscola.split(" ");
  for (let i = 0; i < stringa.length; i++) {
    stringa[i] = stringa[i].charAt(0).toUpperCase() + stringa[i].slice(1);
  }
  return stringa.join(" ");
};
console.log(upperFirst("stringa di prova lettere iniziali maiuscole"));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  const array = [];
  for (let i = 0; i < n; i++) array.push(Math.floor(Math.random() * 10));
  return array;
};

console.log(giveMeRandom(10));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  return l1 * l2;
};
let risultatoArea = area(3, 4);
console.log(risultatoArea);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (calcoloDifferenza) {
  if (calcoloDifferenza > 19) {
    return (calcoloDifferenza - 19) * 3;
  }
  if (calcoloDifferenza <= 19) {
    return calcoloDifferenza - 19;
  }
};

console.log(crazyDiff(60));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const codify = function (stringa) {
  if (stringa.indexOf("code") === 0) {
    return stringa;
  } else return "code" + stringa;
};

console.log(codify("frase di prova senza code"));
console.log(codify("code frase di prova con code"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (multiplo) {
  if (multiplo % 3 === 0 && multiplo % 7 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(check3and7(20));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (parola) {
  return parola.slice(1, parola.length - 1);
};

console.log(cutString("Frase di prova senza il primo e l'ultimo carattere"));
