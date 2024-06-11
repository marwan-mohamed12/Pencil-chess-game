## Chess Game with Angular and ngx-chess-board

This repository demonstrates a simple chess game implemented using Angular and the `ngx-chess-board` library, with two iframes communicating using the `postMessage` API. Each iframe represents a player, and the main page acts as a mediator to synchronize moves.

- [Demo Link](https://pencil-chess-game-git-main-marwan-mohamed12s-projects.vercel.app/mainpage)

  ![Screenshot 2024-06-06 144838](https://github.com/marwan-mohamed12/Pencil-chess-game/assets/40841193/80b9acdd-0ab9-49d9-bdd7-32e69e743a8b)


**Key Features:**

* **Angular:** Built with Angular framework for component-based architecture and reactive programming.
* **ngx-chess-board:** Utilizes `ngx-chess-board` library for rendering and interacting with the chess boards.
* **Two iframes:** Each iframe contains an Angular component displaying a chess board using `ngx-chess-board`.
* **PostMessage communication:** The main page facilitates communication between the iframes using `postMessage` for move synchronization.
* **Game State Management:**
    * **Checkmate Detection:** An alert is displayed when a checkmate occurs.
    * **Game Resumption:**  The current game state is saved in localStorage when the browser closes, and loaded when the user returns to the page, allowing for game resumption.

**Technical Details:**

* **Angular Project:** The application is built using Angular CLI and includes necessary dependencies (e.g., `ngx-chess-board`).
* **Components:**
    * **Main Component:** `app.component.ts` -  Handles communication between iframes using `postMessage` and manages the game state.
    * **Chess Board Component:** `chess-board.component.ts` -  Displays the chess board using `ngx-chess-board` and sends move data to the main component using `postMessage`.
* **Templates:**
    * `app.component.html` - Contains two `<iframe>` tags, each pointing to the same Angular route that renders the `ChessBoardComponent`.
    * `chess-board.component.html` -  Uses the `ngx-chess-board` directive to render the board.
* **CSS:** Styles the elements for a basic visual presentation.

**Instructions:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/marwan-mohamed12/Pencil-chess-game.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   ng serve
   ```
   This will open the application in your default browser, displaying the two chess boards.

**Gameplay:**

* Each player interacts with the board in their respective iframe.
* Moves are synchronized between the boards through the main component using `postMessage`.
* The game state (turn, checkmate, etc.) is managed by the main component and `GameService`.
* The game state is stored in localStorage to allow for resuming the game later.

**Notes:**

* This is a basic Angular implementation demonstrating the use of `postMessage` and iframe communication for a chess game.
* The game logic and UI can be further enhanced for a more comprehensive experience.
* Feel free to explore and modify the code to add your own features and customizations.

**Potential Improvements:**

* Add more detailed UI elements, including player information and move history.
* Implement more complex game logic, including move validation and legal moves.
* Explore alternative communication methods besides `postMessage`.
* Enhance the visual presentation of the chess boards.
* Integrate with a backend service for real-time multiplayer functionality.

**Contribution:**

Feel free to contribute to this project by submitting pull requests for improvements or new features.

**Note:** This code snippet provides a basic outline and conceptual understanding. You would need to implement the actual Angular components, services, and logic using TypeScript and the `ngx-chess-board` library.
