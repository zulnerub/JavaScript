function solve(arr) {
    let step = Number(arr.pop());
    let result = [];

    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    return result.join("\n");
}

console.log(solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']));