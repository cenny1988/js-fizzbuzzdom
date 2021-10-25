/*
Scrivi un programma che esegua un ciclo da 1 a 100
e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
per i multipli di 3,
per i multipli di 5
e per i valori che sono sia multipli di 3 che di 5.
Lo facciamo ricreandolo nel layout dato in screeshot (affrontandolo come meglio crediamo).
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Come creare nuovi elementi html e appenderli al container?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
Buon lavoro e buon divertimento!
*/

const contSqaure = document.getElementById('container-square');

// con un ciclo sul contenitore principale aggiungiamo tutti e 100 i div square
for (i=1; i<=100; i++){
    //primo metodo per poter inserire gli square nel container
    //contSqaure.innerHTML += `<div class="square">${i}</div>`

    //secondo metodo per inserire gli square nel container
    //creamo l'elemento div poi aggiungiamo la classe sqaure e poi al suo interno il valore di i
    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);
    
    //se i è divisibile per 3 e 5 allora aggiungiamo le classi fizz e buzz e sostituiamo il valore di i nel div con fizzbuzz
    //altrimenti verifichiamo se i è divisibile solo per 3 ed aggiungiamo solo la classe fizz e sostituiamo il valore di i con fizz
    //altrimenti ancora verifichiamo se i è divisibile solo per 5 e aggiungiamo la classe buzz e sostituiamo il valore di i con buzz
    if (i % 3 === 0 && i % 5 === 0){
        square.classList.add("fizz","buzz");
        square.innerHTML = `fizzbuzz`;
    }else if (i % 3 === 0){
        square.classList.add("fizz");
        square.innerHTML = `fizz`;
    } else if (i % 5 === 0){
        square.classList.add("buzz");
        square.innerHTML = `buzz`;
    }

    // inseriamo il div square nel contenitore
    contSqaure.append(square);

}