function solve(start, end) {
    let sum = 0;
    for (let i = Number(start); i <= Number(end); i++) {
        sum = Number(sum) +  Number(i);
    }
    console.log(sum);
}

solve('1', '5');