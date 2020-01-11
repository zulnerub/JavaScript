function solve(arr) {
    let result = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > result){
                result = arr[i][j];
            }
        }
    }
    return result;
}

console.log(solve([[20, 50, 10],[8, 33, 145]]));