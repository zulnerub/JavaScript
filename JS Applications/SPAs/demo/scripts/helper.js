import {saveUser, getData} from "./storage.js.js";

export function getTemplate(path, context) {
    context.loadPartials({
        header: '/demo/views/common/header.hbs',
        footer: '/demo/views/common/footer.hbs',
        allMovies: '/demo/views/movies/allMovies.hbs'
    })
        .then(function () {
    this.partial(`/demo/views/${path}`)
        })
}

export function saveAndRedirect(context, path, data) {
    saveUser(data);
    context.redirect(path);
}

export function checkContext(context) {
    if (getData('userInfo') !== null){
        context.isLogged = true;
        context.username = JSON.parse(getData('userInfo')).username;
    }

    return context;
}