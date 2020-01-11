function solve(input) {
    const alphaSort = (a, b) => a.localeCompare(b);
    let data = {};

    for (let line of input){
        let [ name, price ] = line.split(" : ");
        price = Number(price);

        let a = name[0];
        if (!data.hasOwnProperty(a.toUpperCase())){
            data[a] = {};
        }
        let products = data[a];
        products[name] = price

    }

    let sortedInitials = Object.keys(data)
        .sort(alphaSort);
    for (let initial of sortedInitials){
        console.log(initial);
        let products = data[initial];
        let sortedProducts = Object.keys(products).sort(alphaSort);

        for (let p of sortedProducts){
            console.log(`  ${p}: ${products[p]}`);
        }

    }


}


let test0 = ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'];

let test1 = ['Banana : 2',
    'Rubics Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'];


solve(test0);
solve(test1);