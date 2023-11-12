// LESSONS 
// Variables //functions //numbers
//strings //onclick //console.log()
//The DOM //getElementById() //innerText
//textContent //innerHTML //querySelector()


// document.querySelector("#count-el").innerHTML = 5

// let world = document.querySelector("#ccc");
// world.innerHTML = "People Entered:";

//Variables
// let myAge = 26
// console.log(myAge)

//Basic mathematics
// function all () {
// let myAge = 25;
// let HumanDogRatio = 7
// let myDogAge = myAge * HumanDogRatio
// console.log(myDogAge)
// }
// all()

//reassigning and incrementing
// let count = 0;
// count += 4
// count += 10
// count += 10
// console.log(count)

// let bonusPoint = 50;
// console.log(bonusPoint);
// bonusPoint += 50;
// console.log(bonusPoint);
// bonusPoint -= 75;
// console.log(bonusPoint);
// bonusPoint += 45;
// console.log(bonusPoint);
// bonusPoint *= 10;
// console.log(bonusPoint);
// bonusPoint /= 10;
// console.log(bonusPoint);

//The onclick event listener


//function
// function increment() {
//  console.log("the buttom was clicked")
//   alert("the butt was clicked")
// }

// arrow function
// const myFunction = () => {
//   console.log(42)
//  }

// function myFunction () {
//  alert(42)
// }
//  myFunction()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function sum() {
//   let sum = lap1 + lap2 + lap3;
//   console.log(sum);
// };

// sum()

//function that increment

// let lapsCompleted = 0;

// function incrementLaps() {
//   lapsCompleted += 1;
//   console.log(lapsCompleted);
// }

// incrementLaps();
// incrementLaps();
// incrementLaps();


//strings
// let myName = "Emmanuel Manu";
// let greetings = "How are you";

// let myGreetings = greetings +", " +myName 
// console.log(myGreetings)

// //string and DOM
// let welcomeEl = document.querySelector("#welcome-el")

// let myName = "Emmanuel Manu";
// let greetings = "How are you";

// let myWelcome = greetings +", "+ myName;

// welcomeEl.innerHTML = myWelcome

// //adding @ text to the welcomeEl without changing
// //nothing in the previous code
// welcomeEl.innerHTML += " @"

// welcomeEl.innerHTML += " Please state you coming"



//Recap

// const firstName = "Emmanuel";
// const lastName = "Manu"

// let fullName = firstName +" "+ lastName

// document.querySelector("#welcome-el").textContent = fullName
// console.log(fullName)

// let name = "Linda"
// let greetings = "Hi there"
// let welcome = document.getElementById("welcome-el")

// let myFunction = () =>  {
//   let greet = name  +", "+ greetings +" "+"!";
//   console.log(greet)
//   welcome.textContent = greet
// }
// myFunction()


// let myPoint = 3
// function add3Points() {
//   myPoint += 3
// }
// function remove1Points() {
//   myPoint -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()
// console.log(myPoint)

let theError = document.querySelector("#error-el")
let message = document.getElementById("error-el")

function error() {
  //alert("Please somethin went wrong try again!!")
  let errorMessage = "please something went wrong try again!!"
  theError.textContent = errorMessage
}

function myMessage() {
  let myMessage = "You Purchased it!"
  message.textContent = myMessage
}