function solve(input) {
    let data = [];

    for (let line of input){
        let [system, component, subComponent] = line.split(" | ");

        if (!data.hasOwnProperty(system)){
            data[system] = [];
        }

        if (!data[system].hasOwnProperty(component)){
            data[system][component] = [];
        }

        data[system][component].push(subComponent);
    }

    let systems = Object.keys(data);
    systems = systems
        .sort()
        .sort((a, b) => Object.keys(data[b]).length - Object.keys(data[a]).length);

    for (let sys of systems){
        console.log(sys);
        let components = Object.keys(data[sys]);
        components = components.sort((a, b) => data[sys][b].length - data[sys][a].length);

        components.forEach((comp) => {
            console.log(`|||${comp}`);
            let subComps = Object.keys(data[sys][comp]);
            console.log(subComps.map((parts) => `||||||${data[sys][comp][parts]}`)
                .join("\n"));
        })


    }
}

let test0 = ['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'];

solve(test0);