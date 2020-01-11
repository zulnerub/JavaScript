function solve(input) {
    let result = [];

    input.forEach(line => {
        let data = line.split(" | ");
        if (!result.hasOwnProperty(data[1])){
            result[data[1]] = [];
            result[data[1]][data[0]] = Number(data[2]);
        }else {
            result[data[1]][data[0]] = Number(data[2]);
        }
    });
    console.log(result);

    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
        result[i].forEach(val => {
            let min = -1;
            console.log(result[i][val]);
            if (result[i][val] < min){

            }
        });

    }


}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

