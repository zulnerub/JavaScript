function solve(...input) {
    Object.entries(input
        .reduce((previous, current) => {
            let typeOfArg = typeof current;
            console.log(`${typeOfArg}: ${current}`);
            if (!previous.hasOwnProperty(typeOfArg)){
                previous[typeOfArg] = 0;
            }

            previous[typeOfArg]++;

            return previous;
        }, {})
    )
        .sort((a, b) => a[1] - b[1])
        .map(([type, count]) => `${type} = ${count}`)
        .forEach((el) => console.log(el));
}

solve(
    'cat', 42, function () { console.log('Hello world!'); }
);