class Kitchen {
    constructor(budget){
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    get size(){
        return Object.entries(this.menu).length;
    }

    loadProducts(products){
        products.forEach(pro => {
            let [ name, qty, price ] = pro.trim().split(" ");
            if (this.budget - Number(price) >= 0){
                if (!this.productsInStock.hasOwnProperty(name)){
                    this.productsInStock[name] = Number(qty);
                }else{
                    this.productsInStock[name] += Number(qty);
                }

                this.budget -= Number(price);

                this.actionsHistory.push(`Successfully loaded ${qty} ${name}`);
            }else{
                this.actionsHistory.push(`There was not enough money to load ${qty} ${name}`);
            }
        });
        return this.actionsHistory.join("\n");
    }

    addToMenu(meal, products, price){
        if (!this.menu.hasOwnProperty(meal)){
            this.menu[meal] = {
                products: {},
                price: Number(price)
            };

            products.forEach(prod => {
                let [ prodName, prodQty] = prod.split(" ");
                this.menu[meal].products[prodName] = prodQty;
            });
            return `Great idea! Now with the ${meal} we have ${this.size} meals in the menu, other ideas?`
        }else{
            return ` The ${meal} is already in our menu, try something different.`
        }
    }

    showTheMenu(){
        let result = "";
        if (Object.keys(this.menu).length > 0){
            Object.keys(this.menu).forEach(item => {
                result += `${item} - $ ${this.menu[item].price}\n`
            });
            return  result.trim();
        }else{
            return `Our menu is not ready yet, please come later...`
        }

    }

    makeTheOrder(meal){
        let hasEnoughProducts = true;
        if (this.menu.hasOwnProperty(meal)){
            Object.entries(this.menu[meal].products).forEach(product => {
                if (this.productsInStock[product[0]] - this.menu[meal].products[product[0]] < 0 ||
                !this.productsInStock.hasOwnProperty(product[0])){
                    hasEnoughProducts = false;
                }
            });

            if (hasEnoughProducts){
                Object.entries(this.menu[meal].products).forEach(product => {
                    this.productsInStock[product[0]] -= this.menu[meal].products[product[0]];
                });
                this.budget += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }else{
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }else{
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
    }

}



let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));


console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder("frozenYogurt"));
console.log(kitchen.makeTheOrder("Pizza"));