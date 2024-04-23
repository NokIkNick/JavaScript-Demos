console.log("Hello world");
let fullName = "John";
const isBoolean = true;
const friends = [{name: "Kenny"},{name: "Lise"}];
const bestFriend = {name: "Johnny"};
const obj = {name: "John", age: 12, isStudent: true, friends: friends, bestFriend: bestFriend};
obj.name = "Peter";
console.log(obj);
const arr = [1, "John", true, friends];
console.log(arr);
arr.push("Jack");
console.log(arr);
const popped = arr.pop();
const shifted = arr.shift();
console.log(popped);
console.log(shifted);
console.log(arr);
const subArr = arr.slice(0,2);
console.log(subArr);


const myValue = null;

