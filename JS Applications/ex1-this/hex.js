class Hex {
    constructor(value){
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(hexNum){
        if (hexNum instanceof Hex){
            return new Hex(this.value + hexNum.valueOf());
        }
    }

    minus(hexNum){
        if (hexNum instanceof Hex){
            return new Hex(this.value - hexNum.valueOf());
        }
    }

    parse(str){
        return parseInt(str, 16)
    }

}

let a = new Hex(1);
console.log(a.toString());
console.log(a.valueOf());