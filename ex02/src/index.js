// Only change code below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1() {
    for (let i = 1; i <= 5; i++) {
        let x;
        x = i;
        yield x;
    }
}
function* insideGenerator2() {
    for (let i = 10; i <= 15; i++) {
        let x;
        x = i;
        yield x;

    }
}
function* insideGenerator3() {
    for (let i = 6; i <= 9; i++) {
        let x;
        x = i;
        yield x;
    }
}
let iterator = myGenerator();
let fifteenArray = [];
let vrijednost;
for (let i = 0; i < 16; i++) {
    vrijednost = iterator.next().value;
    if (vrijednost === undefined) {
        fifteenArray.push(vrijednost + "!");
    } else {
        fifteenArray.push(vrijednost + "#");
    }
}
fifteenArray = fifteenArray.join(", ");
console.log(fifteenArray.toString());
// Only change code above this line
module.exports = { fifteenArray, myGenerator };
