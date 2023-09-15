// Define card suits and values
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

// Initialize a deck of cards
function initializeDeck() {
  const deck = [];
  for (const suit of suits) {
    for (const value of values) {
      deck.push(`${value} of ${suit}`);
    }
  }
  return deck;
}

// Shuffle the deck using the Fisher-Yates algorithm
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Deal cards to the tableau
function dealTableau(deck) {
  const tableau = [];
  for (let i = 0; i < 7; i++) {
    tableau.push(deck.splice(0, i + 1));
  }
  return tableau;
}

// Display the current state of the game
function displayGame(tableau, deck) {
  console.clear();
  console.log("Tableau:");
  for (let i = 0; i < tableau.length; i++) {
    console.log(`Column ${i + 1}: ${tableau[i].join(", ")}`);
  }
  console.log("\nDeck:");
  console.log(deck.join(", "));
}

// Main game loop
function playSolitaire() {
  const deck = initializeDeck();
  shuffleDeck(deck);
  const tableau = dealTableau(deck);

  while (true) {
    displayGame(tableau, deck);

    // Implement game logic here
    // Allow the player to make moves, such as moving cards between columns or drawing from the deck
    // Check for a win condition or a stalemate

    // For simplicity, we'll just pause the game here
    const input = prompt("Press Enter to continue...");
    if (input === null) {
      break;
    }
  }

  console.log("Game Over");
}

// Start the game
playSolitaire();
