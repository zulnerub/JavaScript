class Stringer {
    constructor(str, length){
        this.innerString = str;
        this.innerLength = Number(length);
    }

    increase(n){
        this.innerLength += n;
    }

    decrease(n){
        this.innerLength = Math.max(0, this.innerLength - n);
    }

    toString(){
        if (this.innerString.length > this.innerLength){
            return this.innerString.substring(0, this.innerLength) + '...';
        }else if (this.innerString.length <= this.innerLength){
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test