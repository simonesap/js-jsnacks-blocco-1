// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt('Inserisci un numero: '))
    console.log(numero);
    somma += numero;
}

document.getElementById('box').innerHTML += `${somma}`;
