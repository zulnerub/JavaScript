function solve() {
    class Person {
        constructor(firstName, lastName , age , email ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = Number(age);
            this.email = email;
        }

    }

    let personOne = new Person("Anna", "Simpson", "22", "anna@yahoo.com");
    let personTwo = new Person("SoftUni");
    let personThree = new Person("Stepha", "Johnson", "25");
    let personFour = new Person("Gabriel", "Peterson", "24", "g.p@gmail.com");

    return personData = [personOne, personTwo, personThree, personFour];
}

console.log(solve());