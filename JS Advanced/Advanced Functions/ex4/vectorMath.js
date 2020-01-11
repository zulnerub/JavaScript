solution = {
    'add': (x, y) => [(x[0] + y[0]), (x[1] + y[1])],
    'multiply': (x, y) => [(x[0] * y), (x[1] * y)],
    'length': x => Math.sqrt((x[0] * x[0] + (x[1]) * (x[1]))),
    'dot': (x, y) => x[0] * y[0] + y[1] * x[1],
    'cross': (x, y) => x[0] * y[1] - x[1] * y[0]
};

console.log(solution.add([1, 1], [1, 0]));