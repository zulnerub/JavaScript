/*function solve(arr) {
        let first = 0;
        let second = 0;

    for (let i = 0; i < arr.length; i++) {
        arr.forEach(e => {
            first += Number(e[i][i]);
            second += Number(e[i][arr.length - 1 - i]);
        })
    }

    return [first, second];
}*/

function solve(data){
    return data
        .reduce((result, row, i, arr) => {
        result[0] += row[i];
        result[1] += row[arr.length - 1 - i];
        return result;
    }, [0, 0]).join(" ");
}

console.log(solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));