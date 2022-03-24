// Selected DOM elements
const popUp = document.querySelector(".pop-up")
const box = document.getElementsByClassName("box")
const popUpValue = document.getElementById("popUpValue")
const restart = document.getElementById("restart")

// Default player
let player = "X";

// Restart btn event
restart.addEventListener("click", restartGame)

function insert(e) {
    if (player === "X") {
        if (e.innerText === "X" || e.innerText === "O") return
        e.innerText = "X"
        player = "O"
    } else {
        if (e.innerText === "X" || e.innerText === "O") return
        e.innerText = "O"
        player = "X"
    }

    checkWinner()
}

function checkWinner() {
    const allItemArr = [];
    
    // Collect all value for check draw
    for (let i = 0; i < box.length; i++) {
        allItemArr.push(box[i].innerText)
    }
    
    const isBelowThreshold = (currentValue) => currentValue === "X" || currentValue === "O";

    if (box[0].innerText === "X" && box[1].innerText === "X" && box[2].innerText === "X") {
        showWinner("X's Wins!")
    } else if (box[0].innerText === "O" && box[1].innerText === "O" && box[2].innerText === "O") {
        showWinner("O's Wins!")
    } else if (box[3].innerText === "X" && box[4].innerText === "X" && box[5].innerText === "X") {
        showWinner("X's Wins!")
    } else if (box[3].innerText === "O" && box[4].innerText === "O" && box[5].innerText === "O") {
        showWinner("O's Wins!")
    } else if (box[6].innerText === "X" && box[7].innerText === "X" && box[8].innerText === "X") {
        showWinner("X's Wins!")
    } else if (box[6].innerText === "O" && box[7].innerText === "O" && box[8].innerText === "O") {
        showWinner("O's Wins!")
    } else if (box[0].innerText === "X" && box[3].innerText === "X" && box[6].innerText === "X") {
        showWinner("X's Wins!")
    } else if (box[0].innerText === "O" && box[3].innerText === "O" && box[6].innerText === "O") {
        showWinner("O's Wins!")
    } else if (box[1].innerText === "X" && box[4].innerText === "X" && box[7].innerText === "X") {
        showWinner("X's Wins!")
    } else if (box[1].innerText === "O" && box[4].innerText === "O" && box[7].innerText === "O") {
        showWinner("O's Wins!")
    } else if (box[2].innerText === "X" && box[5].innerText === "X" && box[8].innerText === "X") {
        showWinner("X's Wins!")
    } else if (box[2].innerText === "O" && box[5].innerText === "O" && box[8].innerText === "O") {
        showWinner("O's Wins!")
    } else if (box[0].innerText === "X" && box[4].innerText === "X" && box[8].innerText === "X") {
        showWinner("X's Wins!")
    } else if (box[0].innerText === "O" && box[4].innerText === "O" && box[8].innerText === "O") {
        showWinner("O's Wins!")
    } else if (box[2].innerText === "X" && box[4].innerText === "X" && box[6].innerText === "X") {
        showWinner("X's Wins!")
    } else if (box[2].innerText === "O" && box[4].innerText === "O" && box[6].innerText === "O") {
        showWinner("O's Wins!")
    } else if (allItemArr.every(isBelowThreshold)) {
        showWinner("Draw!")
    }
}

function showWinner(winner) {
    popUp.style.display = "flex";
    popUpValue.innerText = winner;
}

function restartGame() {
    location.reload()
}
