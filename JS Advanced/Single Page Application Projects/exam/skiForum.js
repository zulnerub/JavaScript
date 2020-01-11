class Forum {
    #users;
    #questions;
    #id;
    constructor(){
        this.users = [];
        this.questions = [];
        this.id = 1;
    }

    get id(){
        return this.#id;
    }
     get users(){
        return this.#users;
     }
     get questions(){
        return this.#questions;
     }

    register(username, password, repeatPass, email){
        if (username === "" || password === "" || repeatPass === "" || email === ""){
            throw new Error("Input can not be empty");
        }

        if (password !== repeatPass){
            throw new Error("Passwords do not match");
        }

        if (this.checkUserExist()){
            throw new Error("This user already exists!");
        }

        let newUser = {
            username,
            password,
            email,
            logged: false
        };

        this.users.push(newUser);

        return `${username} with ${email} was registered successfully!`
    }

    login(username, password){
        let user = this.checkUserExist(username);

        if (!user){
            throw new Error("There is no such user");
        }

        if (user.username === username && user.password === password){
            user.logged = true;
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password){
        let loggedUser = this.checkUserExist(username);

        if (!loggedUser || loggedUser.logged === false){
            throw new Error("There is no such user");
        }

        if (loggedUser.username === username && loggedUser.password === password){
            loggedUser.logged = false;
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question){
        let userToPost = this.checkUserExist(username);
        if (!userToPost || userToPost.logged === false){
            throw new Error("You should be logged in to post questions");
        }

        if (question === ""){
            throw new Error("Invalid question");
        }

        let newQuestion = {
            name: question,
            byUser: username,
            id: this.id,
            answers: []
        };

        this.id++;

        this.questions.push(newQuestion);
    }

    postAnswer(username, questionId, answer){
        let userToAnswer = this.checkUserExist(username);

        if (!userToAnswer || !userToAnswer.logged){
            throw new Error("You should be logged in to post answers");
        }

        if (answer === ""){
            throw new Error("Invalid answer");
        }

        if (questionId < 1 || questionId > this.questions.length){
            throw new Error("There is no such question");
        }
        let question = this.questions[questionId - 1];
        question.answers.push({
            username,
            answer
        });

        return "Your answer has been posted successfully";

    }

    showQuestions(){
        let result = "";

        this.questions.forEach(q => {
            result += `Question ${q.id} by ${q.byUser}: ${q.name}\n`;
            q.answers.forEach(ans => {
                result += `---${ans.username}: ${ans.answer}\n`;
            })
        });



        return result.trim();
    }





    checkUserExist(username){
        return this.users.find(user => user.username === username);
    }




}

