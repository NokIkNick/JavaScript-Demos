"use strict";
alert("I'm JavaScript!");
const obj = {name: "John", age: 30};
const obj2 = {name: "Lisa", age: 35};
for (const key in obj) {
  console.log(key, obj[key]);
}