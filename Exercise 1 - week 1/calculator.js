'use-strict';

const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const calculateButton = document.getElementById("calculate");

buttons.addEventListener('click', event => {
    let input = event.target.innerText;
    event.preventDefault();     
    console.log(input);
});

calculateButton.addEventListener('click', event => {
    event.stopPropagation();
    
})

function updateDisplay(input){
    if(input === undefined){
        console.log(input);
    }

    display.innerText += input;

}

