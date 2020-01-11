function solve(num1) {
    num1 = num1.toString().split("");
    let isSame = true;
    let firstDigit = num1[0];

    num1.forEach(function(element) {
        if (element != firstDigit){
            isSame = false;
        }
    })

    let sum = num1
        .map(Number)
        .reduce((acc, cur) => acc + cur);

    console.log(isSame);
    console.log(sum);

}

solve(22222);