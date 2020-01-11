function solve(num) {
    return function (addend) {
        return num + addend;
    }
}

let add = solve(5);
console.log(add());2