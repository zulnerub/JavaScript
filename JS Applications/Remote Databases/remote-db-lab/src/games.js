import GameService from "./services/GameService.js";
import UsersService from "./services/UsersService.js";


new GameService()
    .getAllGames()
    .then(games => {
        let usersService = new UsersService();
        let gamesHtml = document.getElementById("games");
        games.forEach((game, index) => {
            let gameLi = document.createElement("li");
            gameLi.innerHTML = `<a href="playgame.html?id=${index}">${game.name}</a>`;
            gamesHtml.appendChild(gameLi);
            console.log(game);

        })
    });