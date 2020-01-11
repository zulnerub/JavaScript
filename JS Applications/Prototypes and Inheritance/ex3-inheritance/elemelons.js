function solve() {
    class Melon {
        weight;
        melonSort;
        constructor(weight, sort){
            if (new.target === Melon){
                throw new Error("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = sort;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, sort) {
            super(weight, sort);
            this.element = "Water";
        }
        get elementIndex(){
            return this.weight * this.melonSort.length;
        }
        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Firemelon extends Melon{
        constructor(weight, sort) {
            super(weight, sort);
            this.element = "Fire";
        }
        get elementIndex(){
            return this.weight * this.melonSort.length;
        }
        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, sort) {
            super(weight, sort);
            this.element = "Earth";
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }
        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Airmelon extends Melon{
        constructor(weight, sort) {
            super(weight, sort);
            this.element = "Air";
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(wight, sort) {
            super(wight, sort);
            this.element = "Water";
            this.elements = ["Fire", "Earth", "Air"];
        }

        morph(){
            this.elements.push(this.element);
            this.element = this.elements.shift();
        }

    }

    return {
        Melon, Watermelon, Airmelon, Earthmelon, Firemelon, Melolemonmelon
    }
}

