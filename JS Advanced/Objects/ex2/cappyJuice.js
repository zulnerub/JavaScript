function solve(input) {
    let juices = {};
    let bottles = {};

    input.forEach((line) => {
        let [ name, quantity ] = line.split(' => ');
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(name)){
            juices[name] = 0;
        }

        juices[name] += quantity;

        let currentQty = juices[name];

        if (currentQty >= 1000){
            bottles[name] = Math.trunc(currentQty / 1000);
        }


    });

    let keys = Object.keys(bottles);
    for (let name of keys){
        let quantity = bottles[name];

        console.log(`${name} => ${quantity}`);
    }
}

solve(
    [
        'Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]
);

solve(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
)