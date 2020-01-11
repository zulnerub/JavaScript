function result() {
    class Person {
        name;
        email;
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person{
        subject;
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `Teacher` +
                super.toString().substring(6, super.toString().length - 1) +
                `, subject: ${this.subject})`;
        }
    }

    class Student extends Person{
        course;
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }

        toString() {
            return `Student` +
                super.toString().substring(6, super.toString().length - 1) +
                `, course: ${this.course})`;
        }
    }

    return {Person, Teacher, Student};
}

function solve(cls) {
    cls.prototype.species = "Human";
    cls.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}