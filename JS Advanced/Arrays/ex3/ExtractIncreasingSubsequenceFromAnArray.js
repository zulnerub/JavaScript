function solve(input) {
    let result = input.reduce((acc, cur, index, arr) => {
        if (cur >= Math.max(...acc)){
            acc.push(cur);
        }
        return acc;
    }, []);

    return result.join("\n");
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));