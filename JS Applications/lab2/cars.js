function closureFunc(input) {
    let repo = new Map();
    let commands = {
        create: function (execute) {
            let parent = execute[3] ? repo.get(execute[3]) : null;
            let newObj = Object.create(parent);
            repo.set(execute[1], newObj);
            return newObj;
        },
        set: function (execute) {
            let toMod = repo.get(execute[1]);
            toMod[execute[2]] = execute[3];
        },
        print: function (execute) {
           let toPrint = repo.get(execute[1]);
           let result = [];
            Object.keys(toPrint).forEach(key => {
                result.push(`${key}:${toPrint[key]}`);
            });
            while (Object.getPrototypeOf(toPrint)){
                Object.keys(Object.getPrototypeOf(toPrint)).forEach(key =>
                    result.push(`${key}:${Object.getPrototypeOf(toPrint)[key]}`));
                toPrint = Object.getPrototypeOf(toPrint);
            }

            console.log(result.map(x => x).join(", "));
        }
    };

    input.forEach(command => {
        let execute = command.split(" ");
        commands[execute[0]](execute);
    })
}

closureFunc(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);