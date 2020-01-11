function solve() {
    let recipes = {};
    recipes.apple = {carbohydrate: 1, flavour: 2};
    recipes.lemonade = {carbohydrate: 10, flavour: 20};
    recipes.burger = {carbohydrate: 5, fat: 7, flavour: 3};
    recipes.eggs = {protein: 5, fat: 1, flavour: 1};
    recipes.turkey = {protein: 10, carbohydrate: 10, fat: 10, flavour: 10};

    let stock = {};
    stock.protein = 0;
    stock.carbohydrate = 0;
    stock.fat = 0;
    stock.flavour = 0;

    let commands = {
        restock: toRestock,
        prepare: prepareFood,
        report: toReport
    };

    const SUCCESS_MESSAGE = "Success";

    function toRestock(stock, nutrient, qty) {
            stock[nutrient] += Number(qty);
            return SUCCESS_MESSAGE;
    }

    function prepareFood(stock, foodName, qty){
        let recipe = recipes[foodName];
        for (const nutrient in recipe){
            let neededAmount = recipes[foodName][nutrient] * qty;
            if (neededAmount > stock[nutrient]){
                return `Error: not enough ${nutrient} in stock`;
            }
        }
        removeUsedNutrients(stock, recipe, qty);
        return SUCCESS_MESSAGE;

    }

    function removeUsedNutrients(stock, recipe, qty) {
        for (const nutrient in recipe){
            let neededAmount = recipe[nutrient] * qty;
            stock[nutrient] -= neededAmount;
        }
    }

    function toReport(stock){
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }

    let manager = function (input) {
        let inputSplit = input.split(" ");
        let commandName = inputSplit[0];
        let itemName = inputSplit[1];
        let qty = Number(inputSplit[2]);

        return commands[commandName](stock, itemName, qty);
    };

return manager;
}


