//  Sfruttare ciclo for per conteggio da 1 a 100
// Per ogni numero:
// -Controllo se è multiplo di 3 OPPURE
// --Se è multiplo di 3 stampo Fizz

// -Controllo se è multiplo di 5 OPPURE
// --Se è multiplo di 5 stampo Buzz

// --Controllo se è multiplo di 3 e di 5 OPPURE
// --se è multiplo sia di 3 che di 5 stampo fizzbuzz

// --Se non è multiplo di 3 né di 5 
// ---stampo il numero che sto analizzando

const container = document.querySelector('main');
// FOR
for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
        const newElement = document.createElement('div');
        newElement.innerHTML = 'FizzBuzz';
        container.append(newElement);
    }
    else if (i % 3 == 0){ 
        console.log('Fizz');
        const newElement = document.createElement('div');
        newElement.innerHTML = 'Fizz';
        container.append(newElement);
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
        const newElement = document.createElement('div');
        newElement.innerHTML = 'Buzz';
        container.append(newElement);
    }
    else {
        console.log('i', i , typeof i);
        const newElement = document.createElement('div');
        newElement.innerHTML = i;
        container.append(newElement);
    }
    
}
