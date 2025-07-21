let books = [
    {name: 'Harry Potter', page: 564, authors: 'Robert Galbraith', genre: ['fantasy, classic, sci-fi']},
    {name: 'The Hobbit', page: 310, authors: 'J.R.R. Tolkien', genre: ['fantasy']},
    {name: 'The Talisman', page: 921, authors: 'Stephen King, Peter Straub', genre: ['horror, fantasy']},
    {name: 'The Power of Six', page: 406, authors: 'Lore, Jobie Hughes', genre: ['sci-fi']},
    {name: 'The Da Vinci Code', page: 454, authors: 'Dan Brown', genre: ['thriller']},
    {name: 'To Kill a Mockingbird', page: 281, authors: 'Harper Lee', genre: ['classic']}
]

let longestName = books[0];
for (let book of books){
    if (book.name.length > longestName.name.length){
        longestName = book;
    }
}
console.log(longestName);