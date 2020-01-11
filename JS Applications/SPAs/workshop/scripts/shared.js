export function getPartials() {
    return {
        header: '/workshop/views/common/header.hbs',
        footer: '/workshop/views/common/footer.hbs'
    }
}

export function setHeaderInfo(context) {
    context.isAuth = sessionStorage.getItem('authtoken') !== null;
    context.fullName = sessionStorage.getItem('fullName');
}

export function displayError(message) {
    const errorBox = document.getElementById('errorBox');
    errorBox.style.display = 'block';
    errorBox.textContent = message;
    setTimeout(() => {
    errorBox.style.display = 'none'

    }, 2000);
}

export function displaySuccess(message) {
    const successBox = document.getElementById('successBox');
    successBox.style.display = 'block';
    successBox.textContent = message;
    setTimeout(() => {
        successBox.style.display = 'none'

    }, 4000);
}