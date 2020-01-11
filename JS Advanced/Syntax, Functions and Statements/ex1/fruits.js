function solve(fruit, grams, price) {
    let weightInKg = grams / 1000;
    let sum = weightInKg * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);

}

solve('orange', 2500, 1.80);