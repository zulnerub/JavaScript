import {getTemplate, saveAndRedirect} from "../helper.js.js";
import {login, logout, register} from "../../models/userModel.js.js";
import {removeUser} from "../storage.js.js";

export function getRegister(context) {
    getTemplate('user/register.hbs', context);
}

export function getLogin(context) {
    getTemplate('user/log.hbs', context);
}

export function postRegister(context) {
    if (context.params.password !== context.params.repeatPassword){
        alert('Passwords do not match');
        throw new Error("Passwords do not match");
    }

    let data = {
        username: context.params.username,
        password: context.params.password
    };

    register(data)
        .then(saveAndRedirect.bind(undefined, context, '#/home'))
        .catch(console.log);
}

export function logoutUser(context) {
    logout()
        .then(() => {
            removeUser();
            context.redirect('#/login');
        })
}

export function postLogin(context) {
    login(context.params)
        .then(saveAndRedirect.bind(undefined, context, '#/home'))
        .catch(console.log);
}

export async function getProfile(context) {

}