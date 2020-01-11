module.exports = function sum(arr, start, end) {

    if (!Array.isArray(arr)){
        return NaN;
    }


    let endIndex = arr.length;
    let startIndex = 0;

    if (typeof end !== "undefined" && end + 1 < arr.length){
        endIndex = end + 1;
    }

    if (start > 0){
        startIndex = start;
    }
    return arr
        .slice(startIndex, endIndex)
        .reduce((a,b) => a + b, 0);
};