// L'utente inserisce due parole in successione con due prompt, il software stampa prima la parola più corta, poi la parola più lunga

let parola_1 = prompt('Inserisci la prima parola');
let parola_2 = prompt('Inserisci la seconda parola');

if(parola_1.length < parola_2.length) {
    document.getElementById('box').innerHTML = `La parola 1 è la più corta: ${parola_1}. Mentre la parola 2 è la più lunga: ${parola_2}`;
} else if (parola_2.length < parola_1.length) {
    document.getElementById('box_2').innerHTML = `La parola 2 è la più corta: ${parola_2}. Mentre la parola 1 è la più lunga: ${parola_1}`;
} else {
    document.getElementById('box_3').innerHTML = `La lunghezza delle parole è identica, inserisci nuove parole: `;
}
