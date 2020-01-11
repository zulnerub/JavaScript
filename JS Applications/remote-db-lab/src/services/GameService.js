export default class GameService {
    async getAllGames(){
        let result = await fetch("https://tictactoe-36c69.firebaseio.com/Games.json");
        return result.json();
    }

    async getGame(id){
        let result = await fetch(`https://tictactoe-36c69.firebaseio.com/Games/${id}.json`);
        return result.json();
    }

    async setGame(id, game){
        return await fetch("https://tictactoe-36c69.firebaseio.com/Games/" + id + ".json", {
            method: "PUT",
            headers: {
                contentType: "application/json"
            },
            body: JSON.stringify(game)
        })

    }
}