"use strict";
//1.4

const newDivCollection = document.getElementsByTagName("DIV");
const paragraph = document.getElementById("text");
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

for(let i = 0; i < newDivCollection.length; i++){
    newDivCollection[i].addEventListener('click', () => {
        paragraph.innerText = `Hi from ${newDivCollection[i].id}`;
    });
};

const outerDiv = document.getElementById("outer");
outerDiv.addEventListener('click', (event) => {
    paragraph.innerText = event.target.id;
});

const submitForm = document.getElementById("submitForm");

names.forEach(console.log);

submitForm.addEventListener('submit', (event) => {
    let text = document.getElementById("inputText").value;
    names[names.length] = text;
    names.forEach(console.log);
    event.preventDefault();
    let namesString = arrayToHTMLString(names);
    const container = document.getElementById("table-container");
    container.innerHTML = namesString;
});

const removeFirstBtn = document.getElementById("remove-first");
const removeLastBtn = document.getElementById("remove-last");

removeFirstBtn.addEventListener('submit', (event) => {
    let resultArray = names.filter((x) => names.indexOf(x) != names.indexOf(names[0]));
    names = resultArray;
    resultString = arrayToHTMLString(names);
    const container = document.getElementById("table-container");
    container.innerHTML = resultString;
});


function arrayToHTMLString (array){
    let result = array.map((x) => `<li>${x}</li>`).join('');
    result = `<ul>${result}</ul>`;
    return result;
};

