let btn = document.querySelectorAll(".options");
let computer_choices = ["ROCK", "PAPER", "SCISSOR"];
let msg = document.querySelector(".msg");
let count = document.querySelector(".Count");
let usercount = document.querySelector("#usercount");
let computercount = document.querySelector("#computercount");
let computer = 0;
let user = 0;


function computer_chosen() {
    let computer_chosen_index = Math.floor((Math.random() * 3));
    let computer_chosed = computer_choices[computer_chosen_index];
    return computer_chosed;
}

const check_winner = (computer_input, user_input) => {
    if (computer_input == user_input) {
        msg.classList.remove("hide");
        msg.innerHTML = "THAT WAS A DRAW";
        msg.classList.remove("winner");
        msg.classList.remove("loser")
        msg.classList.add("draw");

    }
    else if (computer_input === 'ROCK' && user_input === 'SCISSOR' ||
        computer_input === 'PAPER' && user_input === 'ROCK' ||
        computer_input === 'SCISSOR' && user_input === 'PAPER') {
        msg.classList.remove("hide");
        msg.innerHTML = "COMPUTER WINS , YOU LOST";
        msg.classList.remove("winner");
        msg.classList.remove("draw");
        msg.classList.add("loser")
        computer++;
        computercount.innerHTML = computer;

    }
    else {
        msg.classList.remove("hide");
        msg.classList.remove("loser");
        msg.classList.remove("draw");
        msg.classList.add("winner")
        msg.innerHTML = "YOU WINS , COMPUTER LOST";
        user++;
        usercount.innerHTML = user;
    }
}

btn.forEach((btns) => {
    btns.addEventListener("click", () => {
        let user_chosed = btns.innerHTML
        let computer_current_choice = computer_chosen();
        console.log(computer_current_choice, user_chosed);
        console.log(check_winner(computer_current_choice, user_chosed));
    })
});

