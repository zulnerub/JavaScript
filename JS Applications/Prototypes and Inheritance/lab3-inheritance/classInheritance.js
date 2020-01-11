function result() {
    class Figure{
        constructor(unit = "cm"){
            this.defaultUnit = unit;
            this.units = {
                m: 0.01,
                cm: 1,
                mm: 10
            };


        }

        get area(){ return NaN }
        toString(){ return `Figures units: ${this.defaultUnit} Area: ${this.area}` }

        changeUnits(x){
            this.defaultUnit = x;
        }
        calcWithUnit(x){
            return x * this.units[this.defaultUnit];
        }
    }

    class Circle extends Figure{
        constructor(r, unit = "cm"){
            super(unit);
            this.radius = r;
        }

        get area(){
            return Math.PI * Math.pow(this.calcWithUnit(this.radius), 2);
        }

        toString() {
            return super.toString() + ` - radius: ${this.radius}`;
        }

    }

    class Rectangle extends Figure{

        constructor(width, height, unit = "cm"){
            super(unit);
            this.width = width ;
            this.height = height ;
        }

        get h() {
            return this.calcWithUnit(this.height);
        }
        get w() {
            return this.calcWithUnit(this.width);
        }
        get area(){
            return this.w * this.h;
        }

        toString() {
            return super.toString() + ` - width: ${this.w}, height: ${this.h}`;
        }

    }

    return {Figure, Circle, Rectangle};
}
 let res = result();
let Cir = res.Circle;
let Rec = res.Rectangle;
let Fig = res.Figure;

let c = new Cir(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rec(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50