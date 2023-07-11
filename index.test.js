import { startGame, getPlayerValue, hit } from './index'

// Given I play a game of blackjack
// When I am dealt my opening hand
// Then I have two cards

it("gives the player two cards once the game is loaded", () => {
    // Arrange
    // Start the game
    startGame();
    // Act
    // Get the player's card elements location. Create the const within the unit test.
    const playerCards = document.getElementById("player-cards");
    // Assert
    // Assert there are 2 cards in the location
    expect(playerCards.childNodes.length).toBe(2);
});

// Given I have a valid hand of cards
// When I choose to ‘hit’
// Then I receive another card
// And my score is updated

it("gives the player another card once the hit button is clicked", () => {
    //Arrange
    // Start the game the same way we previously have
    startGame();
    // Act
    // We then call the hit function which runs when the hit button is clicked
    hit();
    const playerCards = document.getElementById("player-cards");
    // Assert
    expect(playerCards.childNodes.length).toBe(3);      
});

// Given I have a valid hand of cards
// When I choose to ‘stand’
// Then I receive no further cards
// And my score is evaluated

// Given my score is updated or evaluated
// When it is 21 or less
// Then I have a valid hand

// Given my score is updated
// When it is 22 or more 
// Then I am ‘bust’ and do not have a valid hand

// Given I have a king and an ace
// When my score is evaluated
// Then my score is 21

// Given I have a king, a queen, and an ace
// When my score is evaluated
// Then my score is 21

// Given that I have a nine, an ace, and another ace
// When my score is evaluated
// Then my score is 21	