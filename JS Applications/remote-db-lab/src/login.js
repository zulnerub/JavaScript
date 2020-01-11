import UsersService from "./services/UsersService.js";
import GameService from "./services/GameService.js";

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    new UsersService().getAllUsers()
        .then(data => {
            if (data.some(el => {
                return el.name === username;
            })){
                alert(`Please don't use ${username}`)
            }else {
                let loggedUser = {
                    id: data.length,
                    username: username
                };

                new UsersService().createNewUser(data.length, username)
                    .then(data => {
                        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
                        new GameService().setGame(2, {
                            board:"000000000",
                            toMove: 1,
                            name: "test"
                        }).then(data => {
                            window.location = "./games.html";
                        });
                    })
            }
        });
});