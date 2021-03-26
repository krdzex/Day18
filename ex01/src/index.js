let myArr = [];
// Only change code below this line
function* multiplication(x) {
    for (let i = 0; i < x; i++) {
        x *= 2;
        myArr.push(x);
        yield x;
    }
}
let num = multiplication(3);

for (let j = 0; j < 3; j++) {
    console.log(num.next().value);
}
// Only change code above this line
module.exports = multiplication;
