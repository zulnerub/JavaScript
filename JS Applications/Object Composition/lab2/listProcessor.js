function solve(input) {
    let storage = [];


    input.forEach(pair => {
        let command = pair.split(" ")[0];
        let param = pair.split(" ")[1];

        if (command === "add"){
            storage.push(param);
        }else if (command === "remove"){
            storage.filter(el => el === param)
                .map(x => storage.splice(storage.indexOf(x), 1))
        }else if (command === "print"){
            console.log(storage.join(","))
        }
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);