"use strict";
let name = prompt("Enter name", "John Doe");
let result = confirm(`So your name is ${name}?`);
if(result){
    alert(`Hello ${name}!`);
}else {
    alert("Womp womp");
}