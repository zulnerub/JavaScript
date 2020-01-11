function solve(arr) {
        let element = 0;
        let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add"){
            result.push(++element);
        }else if (arr[i] === "remove" && result.length > 0){
            result.pop();
            element++;
        }else{
            element++;
        }
    }

    if (result.length < 1){
        result.push("Empty")
    }

    return result.join("\n");
}

console.log(solve(['remove',
    'remove',
    'remove']));