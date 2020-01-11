function solve(a = 5) {
    for (let i = 0; i < a; i++) {
        let line = "";
        for (let j = 0; j < a; j++) {
            line += "* ";
        }
        console.log(line.trim());
    }
}

solve(1);