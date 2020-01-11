function solve(input) {
    let data = {};
    for (let line of input){
        let [carBrand, carModel, qty] = line.split(" | ");
        qty = +qty;

        if (!data.hasOwnProperty(carBrand)){
            data[carBrand] = {};
        }

        if (!data[carBrand].hasOwnProperty(carModel)){
            data[carBrand][carModel] = 0;
        }

        data[carBrand][carModel] += qty;
    }

    let brands = Object.keys(data);

    brands.forEach((brand) => {
        console.log(brand);
        let models = Object.keys(data[brand]);
        console.log(models.map((car) => `###${car} -> ${data[brand][car]}`).join("\n"));
    });

}

let test0 = ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'];

solve(test0);