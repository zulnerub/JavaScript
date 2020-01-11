function solve(a) {
    let inputType = typeof (a);
    if (inputType === 'number'){
        console.log((Math.pow(a, 2) * Math.PI).toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

solve(5);
solve('name');