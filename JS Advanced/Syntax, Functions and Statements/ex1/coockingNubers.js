function solve(array) {
    let number = +array.shift();

    let operations = {
        chop: function chop(num) {
            return (num / 2);
        },
        dice: (num) => { return (Math.sqrt(num))},
        spice: (num) => { return ++num},
        bake: (num) => { return num *= 3},
        fillet: num => { return num *= 0.8}
    };

    for (let i = 0; i < array.length; i++) {
        number = operations[array[i]](number);
        console.log(number)
    }
}

let test0 = ['32', 'chop', 'chop', 'chop', 'chop', 'chop'];
let test1 = ['9', 'dice', 'spice', 'chop', 'bake', 'fillet'];

solve(test0);
solve(test1);