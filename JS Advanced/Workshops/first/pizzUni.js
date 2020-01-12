describe("PizzUni Tests", function () {
    let pizzStore = new PizzUni();
    beforeEach("Initialization", function () {
        pizzStore = new PizzUni();
    });

    describe("Initialization tests", function () {
        it('should initialize without params', function () {
            expect(pizzStore.registeredUsers).to.deep.equal([]);
            expect(pizzStore.orders).to.deep.equal([]);
            expect(pizzStore.availableProducts).to.deep.equal({
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            });

        });
    });

    describe("registerUser() test", function () {
        it('should register with the email', function () {
            expect(pizzStore.registerUser("email")).to.deep.equal({
                email: "email",
                orderHistory: []
            });
            expect(pizzStore.registeredUsers.length).to.equal(1);
            expect(typeof pizzStore.registerUser("newMail")).to.equal("object");
        });

        it('should throw uxisting user error', function () {
            pizzStore.registerUser("email");
            expect(
                () => pizzStore.registerUser("email")
            ).to.throw("This email address (email) is already being used!")
        });
    });

    describe("makeAnOrder() tests", function () {
        it('should throw unregistered user error', function () {
            expect(
                () => pizzStore
                    .makeAnOrder("email", "Italian Style", "Water"))
                .to.throw("You must be registered to make orders!");
        });

        it('should throw for incorrect pizza type', function () {
            pizzStore.registerUser("email");
            expect(() => pizzStore.makeAnOrder("email", "wrongPizzaType", "Water"))
                .to.throw("You must order at least 1 Pizza to finish the order.");
        });

        it('should add order and return index of order', function () {
            pizzStore.registerUser("email");
            pizzStore.makeAnOrder("email", "Italian Style", "Water");
            expect(pizzStore.orders.length).to.equal(1);
            expect(pizzStore.makeAnOrder("email", "Italian Style", ""))
                .to.equal(1);
        });

        it('should check if adds order info correctly', function () {
            pizzStore.registerUser("Pesho");
            pizzStore.makeAnOrder("Pesho", "Italian Style", "Water");
            let user = pizzStore.registeredUsers.find(x => x.email === "Pesho");
            let order = {
                orderedPizza: "Italian Style",
                orderedDrink: "Water"
            };
            expect(user.orderHistory.length).to.equal(1);
            expect(user.orderHistory[0]).to.deep.equal(order);

            let currentOrder = {
                orderedPizza: "Italian Style",
                orderedDrink: "Water",
                email: "Pesho",
                status: "pending"
            };
            expect(pizzStore.orders[0].orderedDrink[0].length).to.equal(1);
            expect(pizzStore.orders[0]).to.deep.equal(currentOrder);

        });

    });

    describe("completeOrder() tests", function () {
        it('should cahnge order status form pending to complete', function () {
            pizzStore.registerUser("Pesho");
            pizzStore.makeAnOrder("Pesho", "Italian Style", "Water");
            let changedStatusOrder = () =>
                pizzStore.completeOrder();
            expect(changedStatusOrder().status).to.equal("completed");
        });

        it('should return order ', function () {
            pizzStore.registerUser("Pesho");
            pizzStore.makeAnOrder("Pesho", "Italian Style", "Water");
            let changedStatusOrder = () =>
                pizzStore.completeOrder();
            expect(changedStatusOrder()).to.deep.equal({
                orderedPizza: "Italian Style",
                orderedDrink: "Water",
                email: "Pesho",
                status: "completed"
            });
        });
    });

    describe("detailsAboutMyOrder() tests", function () {
        it('should return the status of the order', function () {
            pizzStore.registerUser("Pesho");
            pizzStore.makeAnOrder("Pesho", "Italian Style", "Water");
            let statusCheck = () => pizzStore.detailsAboutMyOrder(0);
            expect(statusCheck()).to.equal("Status of your order: pending");
        });

        it('should return undefined', function () {
            pizzStore.registerUser("Pesho");
            pizzStore.makeAnOrder("Pesho", "Italian Style", "Water");
            pizzStore.completeOrder();
            expect(pizzStore.detailsAboutMyOrder(1)).to.be.equal(undefined);
        });
    })
});