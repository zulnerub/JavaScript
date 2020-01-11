function solve(array) {
    let sum = array.reduce(((a, b) => a + b), 0);
    console.log(sum);
    let invSum = array.reduce(((a, b) => a + (1 / b)), 0);
    console.log(invSum);
    let concatString = array.reduce(((a, b) => a + b.toString()), "");
    console.log(concatString);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);