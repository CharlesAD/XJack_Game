# XJack - Blackjack Game

XJack is a simple browser-based Blackjack game implemented using HTML, CSS, and JavaScript. It provides an intense and enjoyable gaming experience where players aim to beat the dealer and get their score as close to 21 as possible without going over.

## Gameplay

- The player starts the game by clicking the "Start Game" button on the start screen.
- Once the game starts a 10 second countdown timer has started, the player is dealt two initial cards, and the dealer is also dealt cards but you can only see one.
- The dealer will draw cards until their total is 17 or more.
- The player can choose to "Hit" to receive another card or "Stay" to end their turn.
- Before the player chooses to "Stay" they have the chance to "Boost" take a chance of adding a random score between 1 and 5 to their score or "Freeze" pause the countdown but a penalty of 3 points will be added to the players score.
- The player's score is compared to the dealer's score, and the outcome (Win, Lose, or Draw) is displayed.


## Features

- **Score Boost**: The player can activate the Score Boost feature to add bonus points to their score.
- **Freeze**: The player can use the Freeze feature to pause the countdown timer but they will gain additional points.
- **Countdown Timer**: A 10-second countdown timer adds excitement to the game.

## Features Breakdowns
- **Score Boost**: This feature adds a random bonus to the player's score, making it more exciting. When activated, a random boost value between 1 and 5 is assigned to the scoreBoost variable. The button can only be used once per game so if it is already activated my function returns nothing.
![Score Boost](https://github.com/CharlesAD/XJack_Game/blob/master/carbon.png)

- **Freeze**: This feature allows the player to pause the countdown timer and adds 3 points to their score. It can be activated only once per game. The togglePause function pauses the countdown once selected. addPointsToScore adds 3 points to the playerTotal and shows the player this on the screen once the freeze button has been selected. Both the togglePause and addPointsToScore functions are called on the Freeze button click.
![Freeze](https://github.com/CharlesAD/XJack_Game/blob/master/carbon-2.png)

- **Countdown Timer**: XJack introduces a time limit of 10 seconds for the player's turn. If the player does not make a decision within the allotted time, the game automatically proceeds with the "stay" action.
![Countdown Timer](https://github.com/CharlesAD/XJack_Game/blob/master/carbon-3.png)



## How to Play

1. Clone the repository, download the source code files or go to https://charlesad.github.io/XJack_Game/.
2. Open the `index.html` file in a web browser.
3. On the start screen, click the "Start Game" button to begin playing.
5. Follow the on-screen instructions to play the game.
6. Use the "Hit", "Boost", "Freeze" and "Stay" buttons to make your moves.
7. If applicable, use the Boost and Freeze buttons strategically to enhance your GamePlay experience.

## Project Structure

- `index.html`: The main HTML file that defines the game interface and structure.
- `style.css`: The CSS file that contains the styles and layout for the game elements.
- `script.js`: The JavaScript file that implements the game logic and functionality.

## Acknowledgements

This project was developed as a learning exercise and is based on various online resources. It takes some inspiration from the classic card game BlackJack. My goals was the create an exciting fast paced version of the game as in the past I haven't enjoyed playing the classic game. The game doesn't involve strategies such as doubling down, splitting pairs, or insurance bets found in traditional Blackjack. My new features "Boost" and "Freeze" speeds up the game play and maintains the players attention. Changing these features into my own unique features enhances the game play being it closer to my initial goal of an exciting game. 




I hope you have as much fun playing with it as I did making it. Enjoy! 




