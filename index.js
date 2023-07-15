let deck;
let values;

let dealersHiddenCards;
let dealerTotal = 0;

let playerTotal = 0;

let scoreBoost = 0;
let scoreBoostActivated = false;

let swapHandUsed = false;

let originalPlayerTotal = playerTotal;
let originalDealerTotal = dealerTotal;

let isPaused = false;
let freezeUsed = false;


playerTotal += scoreBoost;

window.onload = function() {
    showStartScreen();
}

function showStartScreen() {
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("start-button").addEventListener("click", startGame);
}

function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-table").style.display = "block";

  
    
    createDeck();
    shuffleDeck();
    initializeGame();
}

function createDeck(){
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for(i = 0; i < types.length; i++){
        for(j = 0; j < values.length; j++){
            deck.push(values[j] + "-" + types[i]);
        }
    }
}

function shuffleDeck() {
    for(i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let temp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = temp;
    }
}

function initializeGame() {
    // Initialize variables
    dealersHiddenCards = deck.pop();
    dealerTotal += getDealerValue(dealersHiddenCards);

    let timer;
    let countdown = 10; // Initial countdown time in seconds

    // Activate Score Boost
    function activateScoreBoost() {
        if (scoreBoostActivated) {
            return;
        }

        scoreBoost = Math.floor(Math.random() * 5) + 1;
        console.log("Score Boost: " + scoreBoost);
        scoreBoostActivated = true;
        document.getElementById("boost-score").innerText = "Boost Score: +" + scoreBoost;
    }

    // Update the countdown display
    function updateCountdown() {
        document.getElementById("countdown").innerText = countdown;
    }

    function togglePause() {
      isPaused = !isPaused;
    }
    

    // Start the timer
    function startTimer() {
      timer = setInterval(function () {
        if (!isPaused) {
          countdown--;
          updateCountdown();
          if (countdown <= 0) {
            clearInterval(timer);
            stay();
          }
        }
      }, 1000); // Update every second
    }

    function addPointsToScore() {
      playerTotal += 3;
      document.getElementById("freeze-score").innerText = "Freeze Score: +3";
    }

    // Freeze Feature
    document.getElementById("pause-button").addEventListener("click", function () {
      if (!freezeUsed) {
        togglePause();
        addPointsToScore();
        freezeUsed = true;
        this.disabled = true;
        document.getElementById("freeze-score").innerText = "Freeze Score: +3";
      }
    });
    

    // Deal initial cards for player
    for (let i = 0; i < 2; i++) {
        playerCards = deck.pop();
        playerTotal += getPlayerValue(playerCards);
        let card = document.createElement("img");
        card.src = "./cards/" + playerCards + ".png";
        document.getElementById("player-cards").prepend(card);
    }

    // Deal initial cards for dealer
    while (dealerTotal < 17) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        dealerTotal += getDealerValue(card);
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("dealer-cards").append(cardImg);
    }

    // Add event listeners
    document.getElementById("hit").addEventListener("click", function () {
        clearTimeout(timer); // Reset the timer on each hit
        hit();
        startTimer();
    });

    document.getElementById("stay").addEventListener("click", function () {
        clearTimeout(timer); // Clear the timer when manually staying
        stay();
    });

    document.getElementById("boost").addEventListener("click", function () {
        activateScoreBoost();
        this.disabled = true;
    });

    // Update the countdown display
    updateCountdown();

    // Start the timer
    startTimer();

    console.log(dealersHiddenCards);
    console.log(dealerTotal);
    console.log(playerCards);
    console.log(playerTotal);
}

function hit() {
    if (playerTotal >= 21){
        return;
    }

    playerCards = deck.pop();
    playerTotal += getPlayerValue(playerCards);
    let card = document.createElement("img");
    card.src = "./cards/" + playerCards + ".png";
    document.getElementById("player-cards").append(card);
    console.log(playerTotal);

    if (scoreBoost > 0) {
        playerTotal += scoreBoost;
    }
}

function stay() {
    let cardReveal = document.createElement("img");
    cardReveal.src = "./cards/" + dealersHiddenCards + ".png";
    document.getElementById("dealer-cards").prepend(cardReveal);
    document.getElementById("card-back").replaceWith("");
    if (scoreBoost > 0) {
        playerTotal += scoreBoost;
    }

    let message = "";
    if (playerTotal > 21) {
        message = "You Lose! You went BUST!";
        document.getElementById("loseSound").play();
    } else if (dealerTotal > 21) {
        message = "You Win! The Dealer went BUST!";
        document.getElementById("winSound").play();
    } else if (playerTotal == dealerTotal) {
        message = "It's a Draw!";
        document.getElementById("drawSound").play();
    } else if (playerTotal > dealerTotal) {
        message = "You Win!";
        document.getElementById("winSound").play();
    } else if (playerTotal < dealerTotal) {
        message = "You Lose!";
        document.getElementById("loseSound").play();
    }

    if (scoreBoost > 0) {
        message += " Score Boost Activated!";
    }

    if (swapHandUsed) {
        message += " Hand Swapped!";
        // Update the scores to reflect the swapped hands
        playerTotal = originalPlayerTotal;
        dealerTotal = originalDealerTotal;
    }

    document.getElementById("dealer-sum").innerText = dealerTotal;
    document.getElementById("player-sum").innerText = playerTotal;
    document.getElementById("results").innerText = message;
}

function getDealerValue(card) {
    let cardInfo = card.split("-");
    let value = cardInfo[0];

    if (isNaN(value)){
        if (value == "A") {
            if (dealerTotal >= 11) {
                return 1;
            }
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function getPlayerValue(card) {
    let cardInfo = card.split("-");
    let value = cardInfo[0];

    if (isNaN(value)) {
        if (value == "A") {
            if (playerTotal >= 11) {
                return 1;
            }
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}
