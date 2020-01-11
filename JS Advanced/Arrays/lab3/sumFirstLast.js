function solve(input) {
        //return input.shift() + input.pop();
        return +input[0] + +input[input.length - 1];
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));