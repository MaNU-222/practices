let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// This is an objeect
let player = {
  name: "Meo",
  points: 50
};

let messageEl = document.querySelector("#message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.querySelector("#player-el")



playerEl.textContent = player.name +": $"+ player.points


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1

  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1 ) {
    return 11
  } else {
    return randomNumber
  }
} 


//This function calls the render game using the
//using the startGame function  
function startGame() {
  isAlive = true
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [
    firstCard,
    secondCard
  ]

  sum = firstCard + secondCard

  renderGame()
}

// This is the renderGame function
let renderGame = () => {
  sumEl.textContent = "Sum: " +  sum 
  cardsEl.textContent = "Cards: "

  // This for loop take the new card and add to the DOM
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  // this is if statement
  if (sum <= 20) {
    message = "Do you want to draw the game? "
  }else if (sum === 21) {
    message = "Wohoo! you've got yourself a blackjack!!"
    hasBlackJack = true
  } else {
    message = "You are out of the game"

    isAlive = false
  }

  // the message text is called to the UI using DOM 
  messageEl.textContent = message
}


// this create space for you to select new card
function newCard() {
  // Only allow player to triger newcard if he/she Is alive and does not have blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  } 
}