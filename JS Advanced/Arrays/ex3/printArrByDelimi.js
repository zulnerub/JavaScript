function solve(arr) {
    let deli = arr.pop();

    return arr.join(deli);
}

console.log(solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']));