/*function arrayMap(arr, fn) {
    return arr.reduce((acc, curr) => [...acc, fn(curr)], []);
}*/

function arrayMap(arr, fn) {
    let newArr = new Array(arr.length);

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = fn(arr[i]);
    }
    return newArr;
}

//arr.map(fn) - прави същото нещо като горните две функции;

Array.prototype.aMap = function(fn){
    let newArr = new Array(this.length);
    for (let i = 0; i < this.length; i++) {
        newArr[i] = fn(this[i]);
    }
    return newArr;
};

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]
console.log(nums.aMap((item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]

let letters = ["a","b","c"];
console.log(arrayMap(letters,(l)=>l.toLocaleUpperCase())); // [ 'A', 'B', 'C' ]
console.log(letters.aMap((l)=>l.toLocaleUpperCase())); // [ 'A', 'B', 'C' ]

