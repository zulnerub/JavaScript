import {getTemplate, checkContext} from "../helper.js";
import {getData} from "../storage.js";
import {create, getIdea, edit, remove} from "../models/ideaModel.js";

export function getCreate(context) {
    let newContext = checkContext(context);
    getTemplate('ideas/createIdea.hbs', context);
}

export function postCreate(context) {
    if (context.params.title.length >= 6
        && context.params.description.length >= 10
        && (context.params.imageURL.startsWith("http://") || context.params.imageURL.startsWith("https://"))){
        let data = {
            ...context.params,
            creator: JSON.parse(getData('userInfo')).username,
            likes: 0,
            comments: []
        };

        create(data)
            .then(() => {
                context.redirect('/');
            })
            .catch(console.log)
    }else{

    }

}

export async function getDetails(context) {
    let newContext = checkContext(context);
    let idea = await getIdea(context.params.id);
    console.log(newContext);

    Object.keys(idea).forEach(key => {
        newContext[key] = idea[key];
    });
    newContext.isOrganizer = newContext.username === idea.creator;
    getTemplate('ideas/ideaDetails.hbs', newContext);
}

export async function getEdit(context) {
    let newContext = checkContext(context);
    let event = await getIdea(context.params.id);
    Object.keys(event).forEach(key => {
        newContext[key] = event[key];
    });
    getTemplate(`ideas/editIdea.hbs`, context);
}

export async function postEdit(context) {
    let newContext = checkContext(context);
    let data = {
        ...context.params
    };
    delete data.id;
    edit(context.params.id, data)
        .then(() => {
            newContext.redirect(`/details/${newContext.params.id}`);
        })
}

export function removeIdea(context) {
    remove(context.params.id)
        .then(() => {
            context.redirect('/');
        })
        .catch(console.log)
}

export async function likeIdea(context) {
    let newContext = checkContext(context);
    let idea = await getIdea(context.params.id);
    idea.likes++;
    Object.keys(idea).forEach(key => {
        newContext[key] = idea[key];
    });
    edit(context.params.id, idea)
        .then(() => {
            newContext.redirect(`/details/${context.params.id}`);
        })
}

export async function comment(context) {
    let newContext = checkContext(context);
    let idea = await getIdea(context.params.id);

    idea.comments.push(context.params.newComment)
    Object.keys(idea).forEach(key => {
        newContext[key] = idea[key];
    });
    edit(context.params.id, idea)
        .then(() => {
            newContext.redirect(`/details/${context.params.id}`);
        })
}