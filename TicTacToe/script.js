const buttons = document.getElementById("buttons");
const resetButton = document.getElementById("resetbtn");
const turnText = document.getElementById("turn_text");

const turnEnum = Object.freeze ({
    BLUE:"BLUE",
    RED:"RED"
});

const gameState = Object.freeze ({
    GAME: "GAME",
    END: "END"
})

let board = [
    ["[]", "[]", "[]"],
    ["[]", "[]" ,"[]"],
    ["[]", "[]", "[]"]
];

let turn = turnEnum.BLUE;
let currentGameState = gameState.GAME;

buttons.addEventListener('click', event => {
    changeColour(event.target);
})

function changeColour(element){
    //Return hvis spillet er slut:
    if(currentGameState == gameState.END){
        return null;
    }

    if(turn == turnEnum.BLUE){
        element.classList.add('blue');
        element.classList.remove('empty');
        element.innerHTML = "X"
    }else if (turn == turnEnum.RED){
        element.classList.add('red');
        element.classList.remove('empty');
        element.innerHTML = "O"
    }
    updateBoard(`${element.id}`, `${element.innerHTML}`)
    switchTurn();
}

resetButton.addEventListener('click', event => {
    reset();
})

function switchTurn(){
    if(currentGameState == gameState.END){
        return null;
    }

    //Skifter tur rundt:
    turn == turnEnum.BLUE ? turn = turnEnum.RED : turn = turnEnum.BLUE;
    turnText.innerHTML = `It is ${turn}'s turn`
}

function updateBoard(index, mark){
    //Vi splitter id'en for at få den præcise lokation på brættet:
    let splitted = index.split("-");
    let row = splitted[0];
    let column = splitted[1];
    
    //Vi opdaterer spottet på brættet med det mark som hører til den spillers tur som det er.
    board[row][column] = mark;

    //Vi printer boardet i konsollen for at se at det faktisk sker.
    printBoard();

    //Tjekker hvorvidt spillet er slut eller ej:
    let results = checkResults();
    console.log(results)

    if(results != "[]"){
        switch(results){
            case "X": {
                turnText.innerHTML = "BLUE WINS";
                currentGameState = gameState.END;
                break;
            }
            case "O": {
                turnText.innerHTML = "RED WINS";
                currentGameState = gameState.END;
                break;
            }
            case "draw": {
                turnText.innerHTML = "ITS A DRAW!"
                currentGameState = gameState.END;
            }
        }
    }
}

function printBoard(){
    board.forEach(row => {
        console.log(row);
    })
}

function reset(){
    board = [
        ["[]", "[]", "[]"], 
        ["[]", "[]", "[]"],
        ["[]", "[]", "[]"]
    ];
    currentGameState = gameState.GAME;
    turn = turnEnum.BLUE;
    turnText.innerHTML = `It is ${turn}'s turn`;
    
    buttons.querySelectorAll("div").forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove("blue", "red");
        cell.classList.add("empty");
        cell.innerHTML = "[]";
    });
}

function checkResults(){

    //Tjekker rækkerne:
    for (let row = 0; row < 3; row++) {
        if (board[row][0] !== "[]" && board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
            return board[row][0];
        }
    }

    //Tjekker kolonnerne:
    for (let col = 0; col < 3; col++) {
        if (board[0][col] !== "[]" && board[0][col] === board[1][col] && board[0][col] === board[2][col]) {
            return board[0][col];
        }
    }

    // Tjekker diagonalt:
    if (board[0][0] !== "[]" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] !== "[]" && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
    }

    //Hvis der ikke er en vinder endnu, kan det jo være der er en draw.
    let isFull = true;
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === "[]") {
                isFull = false; //Hvis der findes et spot som er tomt, så er spillet stadigvæk igang.
                break;
            }
        }
        if (!isFull) break;
    }

    //Hvis boardet er fyldt, så er det en draw.
    if (isFull) {
        return "draw";
    }

    //Hvis der ikke findes en vinder og boardet ikke er fyldt, må det jo betyde spillet skal fortsætte.
    return null;
}
