function factory(input) {
    const data = JSON.parse(input);

    let obj = {};

    data.forEach(o => {
        Object.keys(o).forEach(el => {
            obj[el] = o[el];
        });


    });



    return obj;
}


console.log(factory(`[{"canMove": true},{"canMove": true, "doors": 4},{"capacity": 5}]`));