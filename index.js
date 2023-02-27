

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let messageEl = document.getElementById("message-el");

console.log(cards);

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random > 10) {
    return 10;
  } else if (random === 1) {
    return 11;
  } else {
    return random;
  }
}

let age = function randomAge() {
  return Math.floor(Math.random() * (65 - 16) + 16);
};

if (age() < 21) {
  console.log("I'm sorry you are not permitted to enter this nightclub. ☠️");
} else {
  console.log("Welcome to the club!");
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ",  " + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Woohoo! You've got Blackjack 👍";
    hasBlackJack = true;
  } else {
    message = "You've lost!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
  let anotherCard = getRandomCard();
  sum += anotherCard;
  cards.push(anotherCard);
  renderGame();
}
}
