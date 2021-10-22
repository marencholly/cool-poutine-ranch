console.log("Hello World");
console.log("My name is Marek");

// Variables
let firstName = "Nyima";
let lastName = "The Great";
let myAge = 31;

console.log(firstName);

// Concatenation
console.log("My name is " + firstName + " " + lastName + " and I am " + myAge + " years old.");

// More Modern Concatenation
console.log(`My name is ${firstName} ${lastName} and I am ${myAge} years old.`);

// Built in APIs
console.log(Date());

// Constant Variables
const className = "Web Design for Beginners";

// Accessing the DOM
// querySelector and querySelectorAll
const h1 = document.querySelector("h1");
console.log(h1);
const navLinks = document.querySelectorAll(".link-item");
console.log(navLinks);

// Arrays (Lists)
let students = ["Marek", "Nyima", "Barb", "Michelle"];
console.log(students);
console.log(`My students are called ${students}.`);
let firstStudent = students[0];
console.log(`My first student's name is ${firstStudent}.`);
students[0] = "BC";
students[1] = "Bruno";
console.log(students);

// innerHTML and innerText
h1.innerHTML = "Nyima's Cool Poutine Ranch";
const aboutSection = document.querySelector(".about-section");
aboutSection.innerHTML = "<h2>This is the about section</h2>";
aboutSection.innerText = "This is newer text."

// Adding and Removing Classes
h1.classList.add("purple");
h1.classList.remove("purple");

// Functions
function addFunction(){
    console.log("This is my function!");
    h1.classList.add("purple");
    console.log("The main heading is now PURPLE!!!");
}

function removeFunction(){
    console.log("This is my function!");
    h1.classList.remove("purple");
    console.log("The main heading is now NOT PURPLE!!!");
}

// Events
h1.addEventListener("click", addFunction);

// Loops
// If Loop
function greetingApp(){
    // print out a proper greeting to my user, depending on the time of day
    let greeting = "";
    let date = new Date(); // create a new instance of the Date object
    let time = date.getHours(); // grab the Hours information from our date
    console.log(time);
    if(time < 12){
        greeting = "Good Morning";
    }else if(time < 18){
        greeting = "Good Afternoon";
    }else{
        greeting = "Good Night";
    }
    console.log(greeting);
}

// For Loops
// Times Table
function multiTable(multiple,maxProduct){
    // let multiple = 6;
    // let counter = 1;
    // while(counter <= 20){
    //     console.log(`${counter} x ${multiple} = ${counter*multiple}`);
    //     counter++; // counter = counter + 1;
    // }
    for(let counter = 1; counter <= maxProduct; counter++){
        console.log(`${counter} x ${multiple} = ${counter*multiple}`);
    }
}