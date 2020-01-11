function add(){
    let sum = 0;

    return function (num) {
        sum += num;
        return add().toString();
    };

    return sum;
}
console.log(add(1));