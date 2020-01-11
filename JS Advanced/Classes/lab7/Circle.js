class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        this._diameter = this.radius * 2;
        return this.radius * 2;
    }

    set diameter(value){
        this._diameter = value
        this.radius = this._diameter / 2;
    }

    get area(){
        return Number(Math.PI * this.radius * this.radius);
    }

}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);