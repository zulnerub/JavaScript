export default class UsersService{
    async getAllUsers(){
        let result =  await fetch("https://tictactoe-36c69.firebaseio.com/Users.json")
        return result.json();
    }

    async getUser(id){
        let result =  await fetch(`https://tictactoe-36c69.firebaseio.com/Users/${id}.json`)
        return result.json();
    }

    async createNewUser(id, username){
        let data = {
            name: username,
            games: '[]'
        };
        return await fetch("https://tictactoe-36c69.firebaseio.com/Users/" + id + ".json", {
            method: "PUT",
            headers: {
                contentType: "application/json"
            },
            body: JSON.stringify(data)
        })

    }
}