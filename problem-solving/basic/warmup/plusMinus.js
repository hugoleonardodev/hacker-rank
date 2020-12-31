let n = 6;
let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    let positive = [];
    let negative = [];
    let zeroTrue = [];
    for (let index = 0; index < arr.length; index += 1) {
        let number = arr[index];
        if (number > 0) {
            positive.push(number);
        } else if (number < 0) {
            negative.push(number);
        } else {
            (number === 0);
            zeroTrue.push(number);
        }

    }
    console.log((positive.length)/arr.length);
    console.log((negative.length)/arr.length);
    console.log((zeroTrue.length)/arr.length);
}
