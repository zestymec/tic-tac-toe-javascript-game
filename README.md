# ❌⭕ Tic-Tac-Toe | Logic-Driven JavaScript Game

A clean, interactive Tic-Tac-Toe game that demonstrates advanced **DOM Manipulation**, **Array Pattern Matching**, and **Game State Management** using Vanilla JavaScript.

[**🎮 Play the Game Live**](https://tic-tac-toe-javascript-game.vercel.app/)

---

## 🚀 Engineering Highlights

This project was a major milestone in my JavaScript journey, focusing on algorithmic thinking and clean UI/UX interaction:

* **Pattern Matching Algorithm:** Implemented a winning logic by iterating through an array of 8 predefined winning patterns (rows, columns, and diagonals).
* **Game State Control:** Managed player turns (X and O) and disabled buttons post-click to prevent invalid moves.
* **Dynamic UI Feedback:** Real-time winner announcement with a "New Game" and "Restart" functionality to reset the board and state.
* **Dry Code Principles:** Used reusable functions like `enabled()` and `disabled()` to manage the game board's interactivity.

## 🛠️ Tech Stack

* **Logic:** JavaScript (ES6+)
* **Structure:** Semantic HTML5
* **Design:** CSS3 (Grid/Flexbox for the game board)
* **Deployment:** Vercel

## 🧠 Core Algorithm: Win Detection

The heart of this game is the `checkwin` function, which validates the current board state against the `winingpatterns` matrix:

```javascript
const checkwin = () => {
    for (let pattern of winingpatterns) {
        let pos1val = gamesbtn[pattern[0]].innerText;
        let pos2val = gamesbtn[pattern[1]].innerText;
        let pos3val = gamesbtn[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                showwinner(pos1val);
            }
        }
    }
}