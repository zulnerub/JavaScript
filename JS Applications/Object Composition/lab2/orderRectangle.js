function solve(data) {
    const template = {
        width: 0,
        height: 0,
        area: function () {
            return this.width * this.height;
        },
        compareTo: function (obj) {
            return obj.area() - this.area() === 0 ?
                obj.width - this.width :
                obj.area() - this.area();
        }
    };

    return data
        .map(([width, height]) => Object.assign(
            Object.create(template), {width, height}
        ))
        .sort((a, b) => a.compareTo(b));
}

console.log(
    solve(
        [[10,5], [3,20], [5,12]]
    )
);