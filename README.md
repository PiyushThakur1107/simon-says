# Simon Says Game

A browser-based Simon Says memory game built with HTML, CSS, and JavaScript. The player follows an increasingly long sequence of colored buttons and tries to remember and reproduce the sequence correctly.

## Features

- Memory-based sequence gameplay
- Increasing difficulty with each level
- Randomly generated button sequences
- Visual feedback for game and user button presses
- Live score display
- Game-over screen with final score
- Restart functionality

## Technologies Used

- **HTML5** — Structure of the game
- **CSS3** — Styling, layout, colors, and visual effects
- **JavaScript** — Game logic, sequence generation, user input, score tracking, and game state management

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/PiyushThakur1107/simon-says.git
   ```

2. Open the project directory:
   ```bash
   cd simon-says
   ```

3. Open `index.html` in a web browser.

No additional dependencies or installation are required.

## How to Play

1. Press any key to start the game.
2. Watch the button that flashes.
3. Click the buttons in the same sequence.
4. Each successfully completed level adds another button to the sequence.
5. Your score increases after successfully completing each level.
6. Clicking the wrong button ends the game.
7. Press any key to start a new game.

## Project Structure

```text
simon-says/
├── index.html
├── simon.js
├── simon_styles.css
└── README.md
```

## What I Learned

- DOM manipulation with JavaScript
- Event listeners and user interaction
- Arrays and sequence management
- Random number generation
- Functions and game-state management
- Using Git for version control
- Using GitHub for remote repositories
- Feature branches and pull requests
- Reviewing and merging changes

## Future Improvements

- Add high-score persistence using `localStorage`
- Add sound effects
- Add difficulty levels
- Improve mobile responsiveness
- Add animations and additional visual feedback