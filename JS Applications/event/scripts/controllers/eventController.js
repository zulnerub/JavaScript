import {getTemplate, checkContext} from "../helper.js";
import {getData} from "../storage.js";
import {create, getEvent, edit, close} from "../../models/eventModel.js";

export function getCreate(context) {
    let newContext = checkContext(context);
    getTemplate('events/create.hbs', context);
}

export function postCreate(context) {
    let data = {
        ...context.params,
        peopleInterestedIn: 0,
        organizer: JSON.parse(getData('userInfo')).username
    };

    create(data)
        .then(() => {
            context.redirect('#/home');
        })
        .catch(console.log)
}

export async function getDetails(context) {
    let newContext = checkContext(context);
    let event = await getEvent(context.params.id);
    Object.keys(event).forEach(key => {
        newContext[key] = event[key];
    });
    newContext.isOrganizer = newContext.username === event.organizer;
    getTemplate('events/eventDetails.hbs', newContext);
}

export async function getEdit(context) {
    let newContext = checkContext(context);
    let event = await getEvent(context.params.id);
    Object.keys(event).forEach(key => {
        newContext[key] = event[key];
    });
    getTemplate(`events/editEvent.hbs`, context);
}

export async function postEdit(context) {
    let newContext = checkContext(context);
    let data = {
        ...context.params
    };
    delete data.id;
    edit(context.params.id, data)
        .then(() => {
            newContext.redirect(`#/details/${newContext.params.id}`);
        })
}

export function closeEvent(context) {
    close(context.params.id)
        .then(() => {
            context.redirect('#/home');
        })
        .catch(console.log)
}

export async function joinEvent(context) {
    let newContext = checkContext(context);
    let event = await getEvent(context.params.id);
    event.peopleInterestedIn++;
    Object.keys(event).forEach(key => {
        newContext[key] = event[key];
    });
    edit(context.params.id, event)
        .then(() => {
            newContext.redirect(`#/details/${context.params.id}`);
        })
}