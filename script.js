const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

/*

Snack 1 - Filtra e Modifica
Crea una funzione che somma due numeri.
Crea un array (longBooks) con i libri che hanno più di 300 pagine;
Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
Stampa in console ogni titolo nella console.

*/


const longBooks = books.filter(book => book.pages > 300)

console.log(longBooks)

const longBooksTitles = longBooks.map(bookTitle => bookTitle.title)

console.log(longBooksTitles)

/*

Snack 2 - Il primo libro scontato
Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

*/

const availableBooks = books.filter(avbook => avbook.available === true)

console.log("lbri disponibili:", availableBooks)

const discountedBooks = availableBooks.map(discountedBook => {

    // ripulisco l'input e lo trasformo da stringa in numero e tolgo il simbolo €
    const cleanPrice = parseFloat(discountedBook.price.replace("€", ""))
    // calcolo il prezzo scontato
    const discount = cleanPrice * 0.2
    const discountedPrice = cleanPrice - discount
    return discountedPrice

})


console.log("libri scontati:", discountedBooks)

// formattato 2 decimali con .toFixed()

discountedBooks.forEach(bookPrice => {
    console.log(bookPrice.toFixed(2))
})

/*

Snack 3 - Ordinare gli Autori
Creare un array (authors) che contiene gli autori dei libri.
Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

*/

authors = books.map(A => A.author)

console.log(authors)

areAuthorsAdults = authors.every(eta => eta.age > 18)

console.log(areAuthorsAdults)

authors.sort((a, b) => b.age - a.age)

console.log(authors)

/*
Snack 4 - Calcola l’età media
Creare un array (ages) che contiene le età degli autori dei libri.
Calcola la somma delle età (agesSum) usando reduce.
Stampa in console l’età media degli autori dei libri.
*/

ages = books.map(eta => eta.author.age)

console.log(ages)

const sumAges = ages.reduce((acc, curr) => {

    return acc + curr

}, 0)

const medianAge = sumAges / ages.length

console.log(medianAge)
