class List {
    constructor(){
        this.list = [];
        this.size = 0;
    }


    add(element){
        this.list.push(element);
        this.sorting(this.list);
        this.size++;
    }

    remove(index){
        if (Number(index) >= 0 && Number(index) < this.list.length){
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index){
        if (Number(index) >= 0 && Number(index) < this.list.length){
            return this.list[index];
        }
    }

    sorting(arr){
        return arr.sort((a, b) => Number(a) - Number(b));
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);