let opponentcards = [];
let cards = [];
let opponentsum = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let opponentcardsEl = document.getElementById("opponentcards-el");
let cardsEl = document.getElementById("cards");
let opponentsumEl = document.getElementById("opponentsum-el");
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

function startGame() {
  isAlive = true;
  let opponentFirstCard = getRandomCard();
  let opponentSecondCard = getRandomCard();
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let opponentcards = [opponentFirstCard, opponentSecondCard];
  cards = [firstCard, secondCard];
  opponentsum = opponentFirstCard + opponentSecondCard;
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Your Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ",  " + " ";
  }
  opponentsumEl.textContent = "Opponent's Sum: " + opponentsum;
  sumEl.textContent = "Your Sum: " + sum;
  if (sum <= 20 && sum < opponentsum && opponentsum <= 20) {
    message = "Do you want to draw a new card? If not, you lose!";
  } else if (sum <= 20 && sum > opponentsum) {
    message = "If you hold, you win!";
    isAlive = true;
    hasBlackJack = false;
  } else if (sum === 21) {
    message = "Woohoo! You've got Blackjack 👍";
    hasBlackJack = true;
  } else if (opponentsum === 21) {
    message = "Your opponent has Blackjack 🖕. You lose!";
    isAlive = false;
  } else if (opponentsum > 21 && sum <= 20) {
    message = "You win! 🏆";
  } else if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else {
    message = "You went over and lost!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let opponentAnotherCard = getRandomCard();
    let anotherCard = getRandomCard();
    opponentsum += opponentAnotherCard;
    sum += anotherCard;
    opponentcards.push(opponentAnotherCard);
    cards.push(anotherCard);
    renderGame();
  }
}
