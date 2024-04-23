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

const user = {firstName: "", lastName: "", age: 0, isStudent: false, friends: [], bestFriend: {}, fullName: function(){
    return this.firstName + " " + this.lastName;
}, recentLogIn: new Date(), address: {street: "", city: "", zip: 0}};
const generatedUser = {...user};

const createUserForm = document.getElementById("createUserForm");
createUserForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    generatedUser.firstName = document.getElementsByName("fname")[0].value;
    generatedUser.lastName = document.getElementsByName("lname")[0].value;
    generatedUser.age = document.getElementsByName("age")[0].value;
    generatedUser.isStudent = document.getElementsByName("isStudent")[0].checked;
    generatedUser.address.street = document.getElementsByName("street")[0].value;
    generatedUser.address.city = document.getElementsByName("city")[0].value;
    generatedUser.address.zip = document.getElementsByName("zip")[0].value;
    console.log(generatedUser);
    console.log(generatedUser.fullName());
    console.log(generatedUser.recentLogIn);

    const userContainer = document.getElementById("createdUserDiv");
    
    let toReturn = "";
    for(let key in generatedUser){
        toReturn += `<p>${generatedUser[key]}</p>`;
    }

    
    userContainer.innerHTML = `<p>${toReturn}`; 
})



/* const generatedUser = {...user};
generatedUser.firstName = prompt("Enter your first name");
generatedUser.lastName = prompt("Enter your last name");
generatedUser.age = prompt("Enter your age");
generatedUser.isStudent = confirm("Are you a student?");
generatedUser.address.street = prompt("Enter your street");
generatedUser.address.city = prompt("Enter your city");
generatedUser.address.zip = prompt("Enter your zip");
 */


/* console.log(generatedUser);
console.log(generatedUser.fullName());
console.log(generatedUser.recentLogIn);
 */
