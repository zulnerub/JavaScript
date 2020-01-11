import {getHome} from "./scripts/controllers/homeController.js";
import {getLogin, getRegister, postRegister, logoutUser, postLogin, getProfile} from "./scripts/controllers/userController.js";
import {getCreate, postCreate, getDetails, getEdit, postEdit, closeEvent, joinEvent} from "./scripts/controllers/eventController.js";

const app = Sammy('body', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', getHome);

    this.get('#/login', getLogin);
    this.post('#/login', postLogin);


    this.get('#/register', getRegister);
    this.post('#/register', postRegister);

    this.get('#/logout', logoutUser);

    this.get('#/profile', getProfile);

    this.get('#/create', getCreate);
    this.post('#/create', postCreate);

    this.get('#/details/:id', getDetails);

    this.get('#/edit/:id', getEdit);
    this.post('#/edit/:id', postEdit);

    this.get('#/close/:id', closeEvent);
    this.get('#/join/:id', joinEvent);

});

app.run('#/home');