class Library {
    constructor(libraryName){
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: Number(this.libraryName.length),
            special: (Number(this.libraryName.length) * 2),
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type){
        let subscriber;

        if (!this.subscriptionTypes[type]){
            throw new Error(`The type ${type} is invalid`)
        }

        const foundSubscriber = this.subscribers.find(s => s.name === name);

        if (!foundSubscriber){
            subscriber = {
                name,
                type,
                books: []
            };

            this.subscribers.push(subscriber);

        }else{
            foundSubscriber.type = type;
        }

        return foundSubscriber ? foundSubscriber : this.subscribers[this.subscribers.length - 1];
    }

    unsubscribe(name){
        const foundSubscriber = this.subscribers.find(s => s.name === name);

        if (!foundSubscriber){
            throw new Error(`There is no such subscriber as ${name}`);
        }else{
            let indexToRemove = this.subscribers.indexOf(foundSubscriber);
            this.subscribers.splice(indexToRemove, 1);
        }

        return this.subscribers;
    }

    receiveBook(name, title, author){
        const foundSubscriber = this.subscribers.find(s => s.name === name);

        if (!foundSubscriber){
            throw new Error(`There is no such subscriber as ${name}`);
        }

        if (this.subscriptionTypes[foundSubscriber.type] > foundSubscriber.books.length){
            foundSubscriber.books.push({
                title,
                author
            });
        }else{
            throw new Error(`"You have reached your subscription limit ${this.subscriptionTypes[foundSubscriber.type]}!"`);
        }

        return foundSubscriber;
    }

    showInfo(){
        if (this.subscribers.length === 0){
            return `${this.libraryName} has no information about any subscribers`
        }else{
            let result = "";

            this.subscribers.forEach(subs => {
                result += `Subscriber: ${subs.name}, Type: ${subs.type}\nReceived books: `;
                subs.books.forEach(book => {
                    result += `${book.title} by ${book.author}, `;
                });
                if (subs.books.length > 0){
                    result = result.slice(0, result.length - 2);
                }
                result += `\n`;
            });
            result.trim();

            return result;
        }


    }



}

let lib = new Library('Lib');

console.log(lib.subscribe('Peter', 'normal'));
console.log(lib.subscribe('Toni', 'special'));

//console.log(lib.unsubscribe("Toni"));

console.log(lib.receiveBook("Peter", "bookOne", "authorOne"));
console.log(lib.receiveBook("Peter", "bookTwo", "authorTwo"));


console.log(lib.showInfo());




//lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
//lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
//lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

//console.log(lib.showInfo());