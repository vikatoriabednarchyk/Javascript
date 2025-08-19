let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let deckOfCards = [];
    for (let suit of suits ) {
    for (let value of values) {
        let color
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red';
        }else {
            color = 'black';
        }
        deckOfCards.push({
       cardSuit: suit,
       value: value,
       color:color
   });
    }
    }
    console.log(deckOfCards);

let spadeAce = deckOfCards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

let cardsSix = deckOfCards.filter(card => card.value === '6');
console.log(cardsSix);

let cardsRed = deckOfCards.filter(card => card.color === 'red');
console.log(cardsRed);

let cardsDiamond = deckOfCards.filter(card => card.cardSuit === 'diamond');
console.log(cardsDiamond);

let clubsFromNine = deckOfCards.filter(card => card.cardSuit === 'clubs' && values.indexOf(card.value) >= values.indexOf('9'));
console.log(clubsFromNine);

let reduce = deckOfCards.reduce((acc, cards) => {
    if (cards.cardSuit === 'spade') {
        acc.spades.push(cards);
    } if (cards.cardSuit === 'diamond'){
            acc.diamonds.push(cards);
    }if (cards.cardSuit === 'heart'){
            acc.hearts.push(cards);
    }if (cards.cardSuit === 'clubs'){
            acc.clubs.push(cards);
    }
        return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduce);