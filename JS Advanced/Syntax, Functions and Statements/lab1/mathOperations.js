function solve(a, b, operand) {
    switch (operand) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "%":
            return a % b;
        case "**":
            return a ** b;
    }
}

console.log(solve(5, 6, '+'));