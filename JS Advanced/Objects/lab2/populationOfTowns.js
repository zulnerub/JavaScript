function solve(input) {
    let obj = {};

    input.forEach(e => {
        let props = e.split(" <-> ");
        obj[props[0]] === undefined ? obj[props[0]] = +props[1] : obj[props[0]] += +props[1];
    });

    let result = "";
    for (let o in obj){
        result += `${o} : ${obj[o]}\n`
    }

    return result;
}

console.log(solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']));