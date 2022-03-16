// L'utente inserisce due numeri in successione con due prompt, il software stampa il maggiore

let numero_1 = prompt('Inserisci il primo numero');
let numero_2 = prompt('Inserisci il secondo numero');

if(numero_1 > numero_2) {
    document.getElementById('box').innerHTML = `Il numero 1 è il maggiore: ${numero_1}`;
} else if (numero_1 < numero_2){
    document.getElementById('box_2').innerHTML = `Il numero 2 è il maggiore: ${numero_2}`;
} else {
    document.getElementById('box_3').innerHTML = `Pari, Inserisci nuovi numeri: `;
}
