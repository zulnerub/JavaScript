function solve(array) {
    let x1 = +array[0];
    let y1 = +array[1];
    let x2 = +array[2];
    let y2 = +array[3];

    function checker(a1, b1, a2, b2){
        let num = Math.sqrt(Math.pow(a2 - a1, 2) + Math.pow(b2 - b1, 2));
        if (Number.isInteger(num)){
            return `{${a1}, ${b1}} to {${a2}, ${b2}} is valid`
        }else{
            return `{${a1}, ${b1}} to {${a2}, ${b2}} is invalid`
        }
    }

    console.log(checker(x1, y1, 0, 0));
    console.log(checker(x2, y2, 0, 0));
    console.log(checker(x1, y1, x2, y2));
}

let test0 = [3, 0, 0, 4];
let test1 = [2, 1, 1, 1];

solve(test0);
solve(test1);