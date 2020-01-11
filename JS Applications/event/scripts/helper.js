import {saveUser, getData} from "./storage.js";

export function getTemplate(path, context) {
    context.loadPartials({
        header: '/event/views/common/header.hbs',
        footer: '/event/views/common/footer.hbs',
        error: '/event/views/events/error.hbs',
        eventHolder: '/event/views/events/eventHolder.hbs'
    })
        .then(function () {
    this.partial(`/event/views/${path}`)
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