console.log("Rock, paper, scissor....")
let moves = ["rock","paper","scissor"];
let user_input = prompt("Choose your attack move:");
let score_board = {
    computer: 0,
    user: 0
};



function computer_move_generator(moves){
    var random = moves[Math.floor(Math.random()*moves.length)];
    return random
}

computer_move = computer_move_generator(moves);
user_input = user_input.toLowerCase();

console.log("Computer Move",computer_move);
console.log("User Move",user_input);



for(i = 0; i<= 5; i++){
    let user_input = prompt("Choose your attack move:");
    if(user_input != moves[0] && user_input != moves[1] && user_input != moves[2]){
        console.log("Wrong move bro");
        i = --i;
        
    }else{
        if(user_input == computer_move ){
            console.log("Draw");
            i = i--;
            
        }else if(user_input == "rock" && computer_move  == "scissor"){
           console.log("User wins");
           score_board.user = score_board.user  + 1;
        }else if(user_input == "rock" && computer_move  == "paper"){
            console.log("User loose");
            score_board.computer = score_board.computer  + 1;
        }else if(user_input == "paper" && computer_move == "scissor"){
            console.log("User loose");
            score_board.computer = score_board.computer  + 1;
        }else if(user_input == "paper" && computer_move == "rock"){
            console.log("User wins");
            score_board.user = score_board.user  + 1;
        }else if(user_input == "scissor" && computer_move == "rock"){
            console.log("User loose");
            score_board.computer = score_board.computer  + 1;
        }else if(user_input == "scissor" && computer_move == "paper"){
                console.log("User wins");
                score_board.user = score_board.user  + 1;
        }else{
            console.log("User loose")
            score_board.computer = score_board.computer  + 1;
        }
    }
}

console.log("*Final Score Board*");
console.log("User Score :" + score_board.user, "Comp Score :" + score_board.computer);






