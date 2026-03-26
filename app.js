let gamesbtn = document.querySelectorAll(".gamebox")
let restartbtn = document.querySelector(".restart")
let winner = document.querySelector(".winner")
let newgame = document.querySelector(".newgame")
let winnersec = document.querySelector(".winnersec")

let turn0 = true;
const winingpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
gamesbtn.forEach((gamebox) => {
    gamebox.addEventListener("click", () => {
        console.log("gamebox was clicked");
        if (turn0) {
            gamebox.innerHTML = "X";
            turn0 = false;
        }
        else {
            gamebox.innerHTML = "O";
            turn0 = true;
        };
        gamebox.disabled = true;
        checkwin();

    })
})
let resetgame = () => {
    let turn0 = true;
    enabled();
    winnersec.classList.add("hide")
}
const disabled = () => {
    for (let gamebox of gamesbtn) {
        gamebox.disabled = true;

    }
}
const enabled = () => {
    for (let gamebox of gamesbtn) {
        gamebox.disabled = false;
        gamebox.innerText = "";
    }
}
const showwinner = (winnerplayer) => {
    winner.innerText = `Congratulations ,Winner is ${winnerplayer}`;
    winnersec.classList.remove("hide")
    disabled();


}
const checkwin = () => {
    for (let pattern of winingpatterns) {
        let pos1val = gamesbtn[pattern[0]].innerText;
        let pos2val = gamesbtn[pattern[1]].innerText;
        let pos3val = gamesbtn[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
}
restartbtn.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);