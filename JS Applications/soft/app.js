import {getHome} from "./scripts/controllers/homeController.js";
import {
    getRegister, logoutUser, postLogin, postRegister, getLogin, getProfile
    } from "./scripts/controllers/userController.js";
import {getCreate, getDetails, postCreate, postEdit, getEdit, removeIdea, likeIdea, comment} from "./scripts/controllers/ideaController.js";

const app = Sammy('body', function () {
    this.use("Handlebars", 'hbs');

    this.get('/', getHome);

    this.get('/log', getLogin);
    this.post('/log', postLogin);

    this.get('/register', getRegister);
    this.post('/register', postRegister);

    this.get('/logout', logoutUser);

    this.get('/create', getCreate);
    this.post('/create', postCreate);

    this.get('/details/:id', getDetails);

    this.get('/edit/:id', getEdit);
    this.post('/edit/:id', postEdit);

    this.get('/remove/:id', removeIdea);

    this.get('comment/:id', comment);

    this.get('/like/:id', likeIdea);

    this.get('/profile', getProfile)
});

app.run();