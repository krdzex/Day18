// Only change code below this line
let rockStar = new Map();
rockStar.set("artist", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

let newRock = new Map([...rockStar].filter(([key]) => { return key[0] > "a"; }));
console.log(newRock);
// Only change code above this line
module.exports = { rockStar, newRock };
