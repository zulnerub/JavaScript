function solve(input) {
    let result = "";
    let cities = {};
    input.forEach(el => {
        let info = el.split(" -> ");
        let nums = info[2].split(" : ");
        let curSum = +nums[0] * +nums[1];

        if (!cities.hasOwnProperty(info[0])){
            cities[info[0]] = {};
            cities[info[0]][info[1]] = +curSum;
        }else{
            cities[info[0]][info[1]] = +curSum;
        }
    });

    Object.keys(cities).forEach(city => {
        result += `Town - ${city}\n`;
        Object.keys(cities[city]).forEach(product => {
            result += `$$$${product} : ${cities[city][product]}\n`;
        }, [])
    }, []);

    return result;

}

console.log(solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
));