let books = [
    {name: 'Harry Potter', page: 564, authors: 'Robert Galbraith', genre: 'fantasy, storytaile'},
    {name: 'The Hobbit', page: 310, authors: 'J.R.R. Tolkien', genre: 'fantasy'},
    {name: 'The Talisman', page: 921, authors: 'Stephen King, Peter Straub', genre: 'horror'},
    {name: 'The Power of Six', page: 406, authors: 'Pittacus Lore, Jobie Hughes', genre: 'sci-fi'},
    {name: 'The Da Vinci Code', page: 454, authors: 'Dan Brown', genre: 'thriller'},
    {name: 'To Kill a Mockingbird', page: 281, authors: 'Harper Lee', genre: 'classic'}
]
let biggestBook = books[0]

for (let book of books) {
     if (book.page > biggestBook.page) {
         biggestBook = book;
     }
 }
console.log(biggestBook)