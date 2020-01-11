class Person {
    #first;
    #last;
    constructor(first, last ){
        this.#first = first;
        this.#last = last;
    }

    get firstName(){
        return this.#first;
    }

    set firstName(x){
        return this.#first = x;
    }

    get lastName(){
        return this.#last;
    }

    set lastName(x){
        return this.#last = x;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(str){
        let names = str.split(" ");
        if (names.length === 2){
            this.firstName = names[0];
            this.lastName = names[1];
        }

        return `${this.firstName} ${this.lastName}`;
    }

}

/*
function Person(first, last){
    this._first = first;
    this._last = last;

    Object.defineProperties(
        this,
        {
            firstName: {
                get: () => {return this._first},
                set: x => {return this._first = x}
            },
            lastName: {
                get: () => {return this._last},
                set: x => {return this._last = x}
            },
            fullName: {
                get: () => {return `${this.firstName} ${this.lastName}`},
                set: x => {
                    let names = x.split(" ");
                    if (names.length === 2){
                        this.firstName = names[0];
                        this.lastName = names[1];
                    }
                    return `${this.firstName} ${this.lastName}`;
                }
            }
        }
    );

    return this;
}
*/




let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName);//Nikola
console.log(person.lastName);//Tesla

