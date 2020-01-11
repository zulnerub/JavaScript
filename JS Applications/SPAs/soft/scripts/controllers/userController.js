import {getTemplate, saveAndRedirect, checkContext} from "../helper.js.js";
import {register, login, logout} from "../models/userModel.js.js";
import {removeUser} from "../storage.js.js";
import {getAllIdeas} from "../models/ideaModel.js.js";

export function getLogin(context) {
    let newContext = checkContext(context);
    getTemplate('user/log.hbs', context);
}

export function postLogin(context) {
    login(context.params)
        .then(saveAndRedirect.bind(undefined, context, '/'))
        .catch(console.log)

}

export function getRegister(context) {
    getTemplate('user/register.hbs', context);
}

export function postRegister(context) {
    if (context.params.username.length >= 3
        && context.params.password.length >= 3
        && context.params.password === context.params.repeatPassword){

        let data = {
            username: context.params.username,
            password: context.params.password
        };

        register(data)
            .then(saveAndRedirect.bind(undefined, context, '/'))
            .catch(console.log)

    }else{

    }
}

export function logoutUser(context) {
    logout()
        .then(() => {
            removeUser();
            context.redirect('/')
        })
}

export async function getProfile(context) {
    let newContext = checkContext(context);
    try {
        let ideas = await getAllIdeas();
        let myIdeas = ideas.filter(e => e.creator === newContext.username);
        newContext.myIdeas = myIdeas;
        newContext.numberOfideas = myIdeas.length;
    }catch (e) {
        console.log(e);
    }
    getTemplate('user/profile.hbs', newContext)
}