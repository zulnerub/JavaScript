function solve(array) {
    let obj = {
        city: 50,
        residential: 20,
        interstate: 90,
        motorway: 130
    }

    let currentSpeed = array.shift();
    let speedLimit = obj[array.shift()];
    let overTheLimit = 0;

    if (currentSpeed - speedLimit > 0){
        overTheLimit = currentSpeed - speedLimit;

        if (overTheLimit <= 20){
            console.log("speeding");
        }else if (overTheLimit <= 40){
            console.log("excessive speeding");
        }else {
            console.log("reckless driving");
        }
    }


}
let test0 = [40, 'city'];
let test1 = [21, 'residential'];
let test2 = [120, 'interstate'];
let test3 = [200, 'motorway'];


solve(test0);
solve(test1);
solve(test2);
solve(test3);