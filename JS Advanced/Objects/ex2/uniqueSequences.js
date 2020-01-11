function solve(input) {
    let uniqueArrays = [];

    let nestedArrays = input
        .map(JSON.parse);

    for (let arr of nestedArrays){
        let sum = arr.reduce((a, b) => a + b, 0);

        let containsSum = uniqueArrays.some((x) => x.reduce((a, b) => a + b, 0) === sum);

        if (!containsSum){
            uniqueArrays.push(arr.sort((a, b) => b - a));
        }


    }

    console.log(uniqueArrays
        .sort((a, b) => a.length - b.length)
        .map((arr) => `[${arr.join(', ')}]`)
        .join('\n')
    );



}

let test0 = ["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"];

let test1 = ["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"];

solve(test0);
solve(test1);