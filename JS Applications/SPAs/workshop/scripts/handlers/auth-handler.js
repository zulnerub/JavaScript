import { get, post, put, del} from "../requester.js.js";
import { getPartials, setHeaderInfo, displayError, displaySuccess } from "../shared.js.js";

function saveAuthInfo(userInfo) {
    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
    sessionStorage.setItem('fullName', userInfo.firstName + ' ' + userInfo.lastName);
    sessionStorage.setItem('userId', userInfo._id);
}

export function getRegister (context) {
    setHeaderInfo(context);

    this.loadPartials(getPartials())
        .partial('/workshop/views/auth/register.hbs');
}

export function postRegister (context) {
    const { firstName, lastName, username, password, repeatPassword} = context.params;

    if (firstName && lastName && username && password && password === repeatPassword){
        post('user', '', { firstName, lastName, username, password}, 'Basic')
            .then(userInfo => {
                saveAuthInfo(userInfo);
                context.redirect('/workshop/')
            })
            .catch(() => displayError("Something wrong wnetdasdas"));
    }
}

export function getLogin(context) {
        setHeaderInfo(context);

        this.loadPartials(getPartials())
            .partial('/workshop/views/auth/login.hbs');
}

export function postLogin(context) {
    const { username, password } = context.params;

    if (username && password){
        post('user', 'login', { username, password }, 'Basic')
            .then(userInfo => {
                saveAuthInfo(userInfo);
                context.redirect('/workshop/');
            })
            .catch(console.log);
    }
}

export function logout(context) {
    post('user', '_logout', {}, 'Kinvey')
        .then(() => {
            sessionStorage.clear();
            context.redirect('/workshop/');
        })
        .catch(console.log);
}