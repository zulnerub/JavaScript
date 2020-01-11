function solve(input) {
    let data = new Set();
    let print = x => console.log(x);

    input = input.sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);

    for (let line of input){
        data.add(line);
    }

    return data.forEach(print);
}

let test0 = ['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'];

let test1 = ['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'];

solve(test0);
solve(test1);