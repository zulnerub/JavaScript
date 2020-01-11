function solve(input) {
    let data = input.join(" ").match(/\w+/gim);
    let obj = {};

    for (let i = 0; i < data.length; i++){
        if(typeof obj[data[i]] === "undefined"){
            obj[data[i]] = 0;
        }
        obj[data[i]]++;
    }


    return JSON.stringify(obj);
}



console.log(solve([ "Far too slow, you're far too slow." ]));
