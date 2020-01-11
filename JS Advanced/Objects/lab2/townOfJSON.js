const isNotEmptyString = x => x !== "";
const trimMyStrings = x => x.trim();
const parseIfNumber = x => Number(x) ? Math.floor(Number(x) * 100) / 100 : x;

function deserializableStringToArrayOfValues(str) {
    return str
        .split("|")
        .filter(isNotEmptyString)
        .map(trimMyStrings)
        .map(parseIfNumber)
}

function solve(input) {

    let keys = deserializableStringToArrayOfValues(input[0]);
    return JSON.stringify(input
        .slice(1)
        .map(deserializableStringToArrayOfValues)
        .map(x => x.reduce((res, val, i) => {
            res[keys[i]] = val;
            return res;
    }, {})));
}

////////////////////////////////////////////////
function solve2(input){
    let arrTowns = [];
    let splitPattern = /\s*\|\s*/;

    for (let i = 1; i < input.length; i++) {
        let town = {};
        let str = input[i].split(splitPattern).filter(x => x);

        town["Town"] = str[0];
        town["Latitude"] = +Number(str[1]).toFixed(2);
        town["Longitude"] = +Number(str[2]).toFixed(2);

        arrTowns.push(town);
    }

    let result = JSON.stringify(arrTowns);
    console.log(result);
}

///////////////////////////////////








let test0 = ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'];

let test1 = ['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'];
solve2(test0);

//console.log(solve(test0));

//console.log(solve(test1));