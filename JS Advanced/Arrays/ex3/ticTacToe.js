function solve(input) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let winX = false;
    let winO = false;
    let toPlay = "X";

    while (input.length > 0 && (!winO && !winX)){
        let move = input.shift().split(", ");
        if (!board[move[0]][move[1]]){
            board[move[0]][move[1]] = toPlay;
            toPlay = (toPlay === "X") ? "O" : "X";
        }else{
            console.log("This place is already taken. Please choose another!");
        }


    }


}