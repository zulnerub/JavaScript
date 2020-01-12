describe("Tests", function () {
    let store = new BookStore();
    beforeEach("Initialization", function () {
        store = new BookStore("SoftUni");
    });

    describe("Constructor test", function () {
        it('should initialize properties correctly ', function () {
            expect(store.name).to.be.equal("SoftUni");
            expect(store.books).to.deep.equal([]);
            expect(store.workers).to.deep.equal([]);
        });
    });

    describe("stockBook() test", function () {
        it('should add books to store ', function () {
            const book = { title: "bookOne", author: "authorOne"};

            expect(store.stockBooks(["bookOne-authorOne"])).to.deep.equal([book]);
            expect(store.books.length).to.be.equal(1);
            expect(store.books[0]).to.deep.equal(book);
        });
    });

    describe("hire() test", function () {
        it('should throw error', function () {
            store.hire('Kiril', 'Trainer');
            const hire = () => store.hire('Kiril', 'Trainer');
            expect(hire).to.throw(Error, 'This person is our employee');
        });

        it('should hire person', function () {
            const worker = {
                name: 'Kiril',
                position: 'Trainer',
                booksSold: 0
            };
            const outputMsg = store.hire('Kiril', 'Trainer');
            expect(store.workers.length).to.equal(1);
            expect(outputMsg).to.equal('Kiril started work at SoftUni as Trainer');
            expect(store.workers[0]).to.deep.equal(worker);
        });
    });

    describe("fire() tests", function () {
        it('should throw error', function () {
            const fire = () => store.fire('Pesho');

            expect(fire).to.throw(Error,"Pesho doesn't work here");
        });

        it('should fire a person', function () {
            store.hire('Pesho', 'Bookstore Cashier');
            const outputMsg = store.fire('Pesho');

            expect(outputMsg).to.equal('Pesho is fired');
            expect(store.workers.length).to.equal(0);
        });

    });
    
    describe("sellBook() test", function () {
        it('should sell book to worker', function () {
            const book = { title: "bookOne", author: "authorOne"};
            const worker = {
                name: 'Kiril',
                position: 'Trainer',
                booksSold: 0
            };
            store.stockBooks(["bookOne-authorOne"]);
            store.hire('Kiril', 'Trainer');

            const sellWrongWorker = () => store.sellBook("bookOne", "Pesho");
            expect(sellWrongWorker).to.throw('Pesho is not working here');

            const sellWrongBook = () => store.sellBook("bookTwo", "Kiril");
            expect(sellWrongBook).to.throw("This book is out of stock");

            store.sellBook("bookOne", "Kiril");
            expect(store.books.length).to.equal(0);
            expect(store.workers[0].booksSold).to.equal(1);
        });
    });

    describe("printWorkers() tests", function () {
        it('should print one worker', function () {
            store.hire('Kiril', 'Trainer');
            expect(store.printWorkers()).to.equal('Name:Kiril Position:Trainer BooksSold:0');
        });
    });

});