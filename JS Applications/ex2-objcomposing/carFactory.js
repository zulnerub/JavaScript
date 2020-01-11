function carFactory(order) {
    let engines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}
    ];

    let carriage = [
        { type: 'hatchback', color: "" },
        { type: 'coupe', color: "" }
    ];

    function wheelFactory(wheels) {
        let wheel =  wheels % 2 !== 0 ? wheels : wheels - 1;
        return [wheel, wheel, wheel, wheel];
    }

    let car = {
        model: order.model,
        engine: {},
        carriage: {},
        wheels: []
    };

    if(order.power <= 90){
        car.engine = engines[0];
    }else if (order.power > 90 && order.power <= 120){
        car.engine = engines[1];
    }else if (order.power > 120 && order.power <= 200){
        car.engine = engines[2];
    }

    if (order.carriage === "hatchback"){
        car.carriage = carriage[0];
    }else{
        car.carriage = carriage[1];
    }

    car.carriage.color = order.color;

    car.wheels = wheelFactory(order.wheelsize);

    return car;

}

console.log(carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }));