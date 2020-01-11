import { get, post, del, put} from "./requester.js";

(() => {

    const partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    };

    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/', loadHome);
        this.get('#/home', loadHome);

        this.get('#/about', function (context) {
            getSessionInfo(context);
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/about/about.hbs')
                });
        });

        this.get('#/login', function (context) {
            getSessionInfo(context);
            partials['loginForm'] = './templates/login/loginForm.hbs';
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/login/loginPage.hbs');
                });
        });

        this.post('#/login', function (context) {
            const { username, password } = context.params;
            try {
                post('user', 'login', { username, password }, 'Basic')
                    .then(userInfo => {
                        sessionStorage.setItem('userId', userInfo._id);
                        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
                        sessionStorage.setItem('username', userInfo.username);

                        context.redirect('#/home');
                    })
            }catch (e){
                console.error(e);
            }
        });

        this.get('#/register', function (context) {
           getSessionInfo(context);
            partials['registerForm'] = './templates/register/registerForm.hbs';
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/register/registerPage.hbs');
                });
        });

        this.post('#/register', function (context) {
            const { username, password, repeatPassword } = context.params;

            if (password === repeatPassword){
                try {
                    post('user', '', { username, password }, 'Basic')
                        .then(context.redirect('#/login'))
                        .then()
                }catch (e){
                    console.error(e);
                }

            }


        });

        this.get('logout', function (context) {
            sessionStorage.clear();
            context.redirect('#/');
        });

        this.get('#/catalog', function (context) {
            partials['team'] = './templates/catalog/team.hbs';

            get('appdata','teams','Kinvey')
                .then(data => {
                    context.teams = data;
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('./templates/catalog/teamCatalog.hbs');
                        });
                })
                .catch(console.error);
        });

        this.get('#/catalog/:id', function (context) {
           const id = context.params.id;
           partials['teamMembers'] = './templates/catalog/teamMember.hbs';
           partials['teamControls'] = './templates/catalog/teamControls.hbs';

           get('appdata', `teams/${id}`, 'Kinvey')
               .then(teamInfo => {
                   context.name = teamInfo.name;
                   context.description = teamInfo.description;

                   this.loadPartials(partials)
                       .then(function () {
                           this.partial('./templates/catalog/details.hbs');
                       })
               })
               .catch(console.error);
        });

        this.get('#/create', function (context) {
            partials['createForm'] = './templates/create/createForm.hbs';

            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/create/createPage.hbs');
                });
        });

        this.post('#/create', function (context) {
            const { name, description } = context.params;
            const members = [];
            members.push(sessionStorage.getItem('userId'));

            post('appdata','teams',{ name, description, members}, 'Kinvey')
                .then(data => {
                    context.redirect('#/catalog');
                })
                .catch(console.error);
        });



        function loadHome(context) {
            getSessionInfo(context);
            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/home/home.hbs')
                });
        }

    });

    function getSessionInfo(context){
        context.userId = sessionStorage.getItem('userId');
        context.loggedIn = sessionStorage.getItem('authtoken') !== null;
        context.username = sessionStorage.getItem('username');
    }

    app.run();
})();