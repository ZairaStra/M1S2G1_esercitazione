/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*I datatypes principali sono:
string: la parola tra virgolette viene letta come insieme di caratteri;
number: la cifra viene considerata per il suo valore numerico;
bolean: può avere solo due valori, true o false;
undefined: il contenitore è stato creato ma non riempito, il contenuto è indeterminato;
null: ha intenzionalmente valore nullo.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Zaira";
console.log(myName);

/*D1.js:27 Zaira*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12;
let b = 20;

console.log(a + b);
/*
D1.js:38 32
 */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* 
se la stringa sottostante non fosse commentata alla riga 57 invece che "Zaira" la console produrrebbe la riga 59 */
//const myName = "Straticò";
console.log(myName);

/* D1.js:55 Uncaught SyntaxError: Identifier 'myName' has already been declared (at D1.js:55:7)
 */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);
/* 
D1.js:66 -8
 */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

name1 = "john";
name2 = "John";
console.log(name1 === name2);
console.log(name1 !== name2);
/*
D1.js:79 false
D1.js:80 true
 */

/* EXTRA */
let toLowerCase = "name1" === "name2.toLowerCase";
console.log(name1 === name2.toLowerCase);
/*
D1.js:88 true
 */
