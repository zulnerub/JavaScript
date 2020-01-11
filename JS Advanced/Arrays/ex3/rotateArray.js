function solve(arr) {
    let len = Number(arr.pop());

    for (let i = 0; i < len; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(" ");
}

console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']));