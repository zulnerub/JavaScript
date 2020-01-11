function vol() {
    return this.x * this.y * this.z;
}

function area() {
    return this.x * this.y;
}

function solve(area, vol, input) {
    let arr = JSON.parse(input);
    let result = [];
    arr.forEach(el => {
        let obj = {
            area: Math.abs(area.call(el)),
            volume: Math.abs(vol.call(el))
        };
        result.push(obj);
    });


    return result;
}

console.log(solve(area(), vol(),'[' +
    '{"x":"1","y":"2","z":"10"},' +
    '{"x":"7","y":"7","z":"10"},' +
    '{"x":"5","y":"2","z":"10"}]'));