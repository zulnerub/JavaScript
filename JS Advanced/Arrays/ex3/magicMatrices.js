function solve(arr) {
    let result = true;
    let firstSum = [];

    if (arr.length === 1){
        return true;
    }

    function sum(arrOneDimension) {
        let currentSum = 0;
        for (let i = 0; i < arrOneDimension.length; i++) {
            currentSum += Number(arrOneDimension[i]);
        }
        if (firstSum.length > 0 ){
            if (Number(firstSum[0]) !== currentSum){
                result = false;
            }
        }else{
            firstSum.push(Number(currentSum));
        }
    }

    for (let i = 0; i < arr.length; i++) {
        sum(arr[i]);
        let colCurrent = [];
        for (let j = 0; j < arr[i].length; j++) {
            colCurrent.push(Number(arr[j][i]));
        }
        sum(colCurrent);
    }

    return result;

}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));