//Blackjack lessons

//IF...ELSE CONDITIONAL STATEMENT

// let firstcard = 11;
// let secondcard = 9;
// let sum = firstcard + secondcard;
// // console.log(sum)

// if (sum === 21) {
//   console.log("Wohoo you've got a black jack")
// }

// else if (sum < 21 ) {
//   console.log("Do you want to draw a new card?")
// }

// else if (sum > 21 ) {
//   console.log("You are out of the game @@@")
//   console.log("You lost your money")
// }


// let age = 22;

// if (age > 21) {
//   console.log("Welcome to MEO's club")
// }

// else if (age < 21) {
//   console.log("You can not enter the club")
// }


// let age = 100

// if (age < 100) {
//   console.log("Not eligible")
// } else if (age === 100) {
//   console.log("Here is your birthday card from the king")
// } else {
//   console.log("Not eligible, You have already gotten the card")
// }


// Blackjack
// let firstCard = 10;
// let secondCard = 7;
// let sum = firstCard + secondCard + 4;
// let hasBlackJack = false;
// let isAlive = true;
// let message = "";

// if (sum <= 20) {
//   message = "Do you want to draw the game? "
// }

// else if (sum === 21) {
//   message = "Wohoo! you've got yourself a blackjack!!"
//   hasBlackJack = true
// } 

// else {
//   message = "You are out of the game"
//   isAlive = false
// }

// alert(hasBlackJack)
// console.log(hasBlackJack)
// console.log(isAlive)
// console.log(message)





// Array
 
// let booksToRead = [
//   "the richest man in Babylon",
//   "Rich Dad Poor Dad",
//   "Minset",
//   "Rich Dad way of investment"
// ]


// let arr = [
//   "Manu Emmnuel",
//   27,
//   true
// ]

// console.log(arr[2])
// console.log(arr[0])
// console.log(arr[1])

// // Push method 
// // This method allows us to add to the end of a list of items 

// let messages = [
//   "Hey, how's it going",
//   "I am great, Thank you! how about you?",
//   "here i am"
// ]

// // This is the list
// console.log(messages)


// Adding to the list
// messages.push("Same here")
// messages.push("i am Emmanuel by the way.")

// console.log(messages)

// // this Removes the last item from the list
// let rem = messages.pop()
// console.log(messages)

// // this shows the remove item
// console.log(rem)




// FOR LOOP
//    Start count   finish count    steps size/moves in
// for (let count = 10; count < 21; count += 1) {
//   console.log(count)
// }
// for (let i = 10; i < 101; i += 10) {
//   console.log(i)
// }




//  ARRAY AND FOR LOOP together
// += 1 is the same as ++ in for loop


// let messages = [
//   "Hey, how's it going",
//   "I am great, Thank you! how about you?",
//   "here i am",
//   "You are the one",
//   "Yes, i am"
// ]

// for (let i = 0; i < messages.length; i++) {
//   console.log(messages[i])
// }


// let arr = [7,3,9,"my name",45]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }





// FOR LOOP, ARRAY and DOM

// let sentence = ["Hello","my", "name", "is", "MEO"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " " // + " " serves as a space between the strings
// }



// RETURNING VALUES IN FUNCTION

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//   if (player1Time < player2Time) {
//     return player1Time
//   } else if (player2Time < player1Time) {
//     return player2Time
//   } else {
//     return player1Time
//   }
// }

// // let fastestRace = getFastestRaceTime()
// // console.log(fastestRace)

// function totalRaceTime() {
//   return player1Time + player2Time
// }

// let total = totalRaceTime()
// console.log(total)



// RANDOM NUMBERS and FLOOR

// let randomNumbers = Math.floor(Math.random() * 6) + 1
// console.log(randomNumbers)

// let flooNumber = Math.floor(12.6)
// console.log(flooNumber)

// function rollDice() {
//   let randomN = Math.floor(Math.random() * 6) + 1
//   return randomN
// }

// console.log(rollDice())



//THE LOGICAL AND && OPERATOR

// let hasCompletedcourse = true
// let giveCertificate = true

// if (hasCompletedcourse === true && giveCertificate === true){
//   generateCertificate()
// }

// function generateCertificate() {
//   console.log("generating Certificate.....")
// }


// let hasSolvedChallenge = false
// let hasHintLeft = false

// if (hasSolvedChallenge === false  && hasHintLeft === false) {
//   showSolution()
// }
// function showSolution() {
//   console.log("Showing the solution...")
// }

// INTRO TO OBJECTS

// let course = {
//   title: "Learn CSS Grid for free",
//   Lesson: 16,
//   Creator: "Manu Emmanuel",
//   length: 63,
//   tags: ["HtML", "CSS"]
// }

// console.log(course.tags)
// console.log(course.Creator)



//RECAP


// OBJECT FUNCTION

// let persons = {
//   name: "Emmanuel Manu",
//   age: 26,
//   country: "Ghana"
// }

// function logData() {
//   console.log(persons.name +" is "+ persons.age +" years old and live in " + persons.country)
// }

// logData()



// IF ELSE STATEMENT

// let age = 15;

// if (age < 6) {
//   console.log("Free")
// } else if (age <= 17) {
//   console.log("Child Discount")
// } else if (age <= 26) {
//   console.log("Student discount")
// } else if (age <= 66) {
//   console.log("Full Price")
// } else {
//   console.log("Senior Citizen Discount")
// }


// ARRAY AND FOR LOO
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// console.log("The 5 largest countries in the world.")

// for ( let i = 0; i < largeCountries.length; i++) {
//   console.log("-" + largeCountries[i])
// }


// // pop(), push(), unshift(), shift()
// let largeCountries = ["Tuvalu", "India", "Indonesia", "Monaco"]

// // add Last
// largeCountries.push("China", "Pakistan")
// console.log(largeCountries)

// // remove last
// largeCountries.pop()
// console.log(largeCountries)

// // add to the first
// largeCountries.unshift("Ghana")
// console.log(largeCountries)


// // remove the first
// largeCountries.shift()
// console.log(largeCountries)

// // logical statement
// let dayOfMonth = 13
// let weekDay = "friday"

// if (dayOfMonth === 13 && weekDay === "friday") {
//   console.log("@")
// }



// // return
// let hands = ["rock", "paper", "scissors"]

// let display = document.getElementById("display")
// let mess = document.querySelector(".mess")

// function getHand(){

//     let firstIndex = Math.floor( Math.random() * 3)
//     display.textContent = "Display: " +  hands[firstIndex]
//     return hands[firstIndex]
  
//   }

// mess.textContent = "Rock Paper Scissors Game"
// display.textContent = "Display: "



// // Sorting items
// let fruit = ["Orange", "Apple", "Orange", "Apple", "Orange", "Apple"]

// let appleShelf = document.getElementById("apple-shelf")
// let orangShelf = document.getElementById("orange-shelf")


// function sortFruit (){
//   for (let i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "Orange"){
//       orangShelf.textContent += " Orange"
//     } else if (fruit[i] === "Apple") {
//       appleShelf.textContent += " Apple"
//     }
//   }
// }

// sortFruit()