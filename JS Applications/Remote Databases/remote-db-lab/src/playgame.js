import GameService from "./services/GameService.js";

let gameService = new GameService;

const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id');
gameService.getGame(gameId)
    .then(game => {
        window.game = game;
        let board = game.board;
        Array.from(board).forEach((square, index) => {
            if (square === "1"){
                let squareHtml = document.getElementById(`${index}`);
                squareHtml.innerHTML = "O";
            }else if (square === "2"){
                let squareHtml = document.getElementById(`${index}`);
                squareHtml.innerHTML = "X";
            }
        })
    });

for (let i = 0; i < 9; i++){
    document.getElementById(i).addEventListener("click", (e) => {
        let index = e.currentTarget.id;
        let board = Array.from(window.game.board);
        if (board[index] === "0"){
            if (window.game.toMove === 1){
                board[index] = "1";
                window.game.toMove = 2;
            }else if (window.game.toMove === 2){
                board[index] = "2";
                window.game.toMove = 1;
            }
        }

        window.game.board = board.join("");

        gameService.setGame(gameId, game).then(data => {
            window.location.reload(true);
        });
    });
}


