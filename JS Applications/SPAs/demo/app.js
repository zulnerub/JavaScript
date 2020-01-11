import {getHome} from "./scripts/controllers/homeController.js.js";
import {
    getLogin, postLogin, logoutUser, getRegister, postRegister
} from "./scripts/controllers/userController.js.js";
import {getCreate, postCreate, getCinema, buyTicket, getDetails, getMyMovies} from "./scripts/controllers/movieController.js.js";

const app = Sammy('body', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', getHome);

    this.get('#/login', getLogin);
    this.post('#/login', postLogin);

    this.get('#/register', getRegister);
    this.post('#/register', postRegister);

    this.get('#/logout', logoutUser);

    this.get('#/createMovie', getCreate);
    this.post('#/createMovie', postCreate);

    this.get('#/cinema', getCinema);

    this.get('#/buy/:id', buyTicket);

    this.get('#/details/:id', getDetails);

    this.get('#/myMovies', getMyMovies);


});

app.run('#/home');