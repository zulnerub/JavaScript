function solve(a) {
    let obj = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7
    };
    if (obj.hasOwnProperty(a)){
        console.log(obj[a]);
    }else {
        console.log("error");
    }
}

solve("Monday");
solve("Invalid");