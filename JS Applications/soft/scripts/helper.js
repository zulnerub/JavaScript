import {saveUser, getData} from "./storage.js";

export function getTemplate(path, context) {
    context.loadPartials({
        header: '/soft/views/common/header.hbs',
        footer: '/soft/views/common/footer.hbs',
        dashboard: '/soft/views/ideas/dashboard.hbs'
    })
        .then(function () {
    this.partial(`/soft/views/${path}`)
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