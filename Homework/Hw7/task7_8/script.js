class Cinderella {
    constructor(name, age, sizeOfFoot) {
        this.name = name;
        this.age = age;
        this.sizeOfFoot = sizeOfFoot;
    }
}

class Prince {
    constructor(name, age, sizeOfShoe) {
        this.name = name;
        this.age = age;
        this.sizeOfShoe = sizeOfShoe;
    }
}

let cinderellas = [
    new Cinderella('katya', 18, 34),
    new Cinderella('nastya', 19, 35),
    new Cinderella('vika', 20, 36),
    new Cinderella('anna', 21, 37),
    new Cinderella('vasylyna', 22, 38),
    new Cinderella('maria', 23, 39),
    new Cinderella('lera', 24, 40),
    new Cinderella('oksana', 25, 41),
    new Cinderella('sofia', 26, 42),
    new Cinderella('marta', 27, 43),
];

let prince = new Prince('jack', 22, 35);

for (const cinderella of cinderellas) {
    if (cinderella.sizeOfFoot === prince.sizeOfShoe) {
         console.log(cinderella);
    }
}


let cinderella = cinderellas.find(cinderella => cinderella.sizeOfFoot === prince.sizeOfShoe);
console.log(cinderella);