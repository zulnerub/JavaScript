function solve(steps, footPrintLength, speed) {
    let distance = Number(steps) * Number(footPrintLength);
    let breaksInMinutes = Number(distance / 500);
    breaksInMinutes = Math.floor(breaksInMinutes);
    distance = distance / 1000;

    let travelTime = (distance / speed) * 60;
    travelTime = travelTime + Number(breaksInMinutes);
    travelTime *= 60;

    let hours = Math.floor((travelTime / 3600));
    if (hours > 0 && hours < 10){
        hours = "0" + hours;
    }else if (hours === 0){
        hours = "00";
    }

    let minutes = Math.floor((travelTime % 3600) / 60);
    if (minutes > 0 && minutes < 10){
        minutes = "0" + minutes;
    }else if (minutes === 0){
        minutes = "00";
    }

    let seconds = Math.round(travelTime % 60);
    if (seconds > 0 && seconds < 10){
        seconds = "0" + seconds;
    }else if (seconds === 0){
        seconds = "00";
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);