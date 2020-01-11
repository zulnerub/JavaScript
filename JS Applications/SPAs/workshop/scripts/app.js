import * as authHandler from "./handlers/auth-handler.js.js";
import * as shared from "./shared.js.js";
import {get, post, put, del} from "./requester.js.js";


const app = Sammy('#rooter', function () {
    this.use('Handlebars', 'hbs');

    this.get('/workshop/', function (context) {
        shared.setHeaderInfo(context);
        if (context.isAuth){
            get('appdata', 'recipes', 'Kinvey')
                .then(recipes => {
                    context.recipes = recipes;

                    this.loadPartials(shared.getPartials())
                        .partial('/workshop/views/home.hbs');
                })
        }else{
            this.loadPartials(shared.getPartials())
                .partial('/workshop/views/home.hbs');
        }
    });

    this.get('/register', authHandler.getRegister);

    this.post('/register', authHandler.postRegister);

    this.get('/login', authHandler.getLogin);

    this.post('/login', authHandler.postLogin);

    this.get('/logout', authHandler.logout);

    this.get('/share', function (context) {
        shared.setHeaderInfo(context);

        this.loadPartials(shared.getPartials())
            .partial('/workshop/views/recipes/share.hbs');
    });

    this.post('/share', function (context) {
        const { meal, ingredients, prepMethod, description, foodImageURL, category } = context.params;
        const categories = {
            'Vegetables and legumes/beans': "https://t3.ftcdn.net/jpg/00/25/90/48/240_F_25904887_fhZJ692ukng3vQxzHldvuN981OiYVlJ1.jpg",
            'Fruits': "https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg",
            'Grain Food': "https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg",
            'Milk, cheese, eggs and alternatives': "https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg",
            'Lean meats and poltry, fish and alternatives': "https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg"
        };

        if (meal && ingredients && prepMethod && description && foodImageURL && category){}
        post('appdata', 'recipes' , {
            meal,
            ingredients: ingredients.split(' '),
            prepMethod,
            description,
            foodImageURL,
            category,
            likesCounter: 0,
            categoryImageURL: categories[category]
        }).then(() => {
            context.redirect('/workshop/');
        }).catch(console.error);

    });

    this.get('/recipe/:id', function (context) {
        const id = context.params.id;

        shared.setHeaderInfo(context);

        get('appdata', `recipes/${id}`, 'Kinvey')
            .then(recipe => {
                recipe.isCreator = sessionStorage.getItem('userId') === recipe._acl.creator;

                context.recipe = recipe;
                this.loadPartials(shared.getPartials())
                    .partial('/workshop/views/recipes/recipe-details.hbs')
            })
            .catch(console.error);
    });

    this.get('/edit/:id', function (context) {
        const id = context.params.id;

        shared.setHeaderInfo(context);

        get('appdata', `recipes/${id}`, 'Kinvey')
            .then(recipe => {
                recipe.ingredients = recipe.ingredients.join(" ");
                context.recipe = recipe;

                this.loadPartials(shared.getPartials())
                    .partial('/workshop/views/recipes/recipe-edit.hbs')
            })
    });

    this.post('/archive/', function (context) {
        const id = context.params.id;
        console.log(context);
        console.log(id);

        shared.setHeaderInfo(context);

        del('appdata', `recipes/${id}`, 'Kinvey')
           // .then(() => {
                //context.redirect('/workshop/');
           // })
            .catch(console.error);
    });

    this.post('/edit/:id', function (context) {
        const categories = {
            'Vegetables and legumes/beans': "https://t3.ftcdn.net/jpg/00/25/90/48/240_F_25904887_fhZJ692ukng3vQxzHldvuN981OiYVlJ1.jpg",
            'Fruits': "https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg",
            'Grain Food': "https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg",
            'Milk, cheese, eggs and alternatives': "https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg",
            'Lean meats and poltry, fish and alternatives': "https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg"
        };
        const id = context.params.id;
        console.log(context)
        console.log(id)
        const likesCounter = context.params.likesCounter;
        const { meal, ingredients, prepMethod, description, foodImageURL, category } = context.params;
        put('appdata', `recipes/${id}`, {
            meal,
            ingredients: ingredients.split(' '),
            prepMethod,
            description,
            foodImageURL,
            category,
            likesCounter,
            categoryImageURL: categories[category]
        }).then(() => {
            context.redirect('/workshop/');
        }).catch(console.error);

    })

});
app.run();
