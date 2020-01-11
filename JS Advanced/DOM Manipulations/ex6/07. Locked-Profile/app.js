function lockedProfile() {
    [...document.getElementsByTagName('button')]
        .map(but => but.addEventListener('click', function (e) {

            mapper = {
                'Show more': () => ['block', 'Hide it'],
                'Hide it': () => ['none', 'Show more']
            };

            if (!e.target.parentElement.querySelector('input[type=radio]').checked) {
                e.target.parentElement.querySelector('div')
                    .style.display = mapper[e.target.textContent](e)[0];

                e.target.parentElement.querySelector('button')
                    .textContent = mapper[e.target.textContent](e)[1];
            }

        }));

}