console.log("Rock, paper, scissor....")
let moves = ["rock","paper","scissor"];
let user_input = prompt("Choose your attack move:");



function computer_move_generator(moves){
    var random = moves[Math.floor(Math.random()*moves.length)];
    return random
}

computer_move = computer_move_generator(moves);
user_input = user_input.toLowerCase();

console.log("Computer Move",computer_move);
console.log("User Move",user_input);



if(user_input != moves[0] && user_input != moves[1] && user_input != moves[2]){
    console.log("Wrong move bro");
}else{
    if(user_input == computer_move ){
        console.log("Draw");  
    }else if(user_input == "rock" && computer_move  == "scissor"){
       console.log("User wins");
    }else if(user_input == "rock" && computer_move  == "paper"){
        console.log("User loose");
    }else if(user_input == "paper" && computer_move == "scissor"){
        console.log("User loose");
    }else if(user_input == "paper" && computer_move == "rock"){
        console.log("User wins");
    }else if(user_input == "scissor" && computer_move == "rock"){
        console.log("User loose");
    }else if(user_input == "scissor" && computer_move == "paper"){
            console.log("User wins");
    }else{
        console.log("User loose")
    }
}




