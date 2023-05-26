// script.js

// Track the current state of the web page
let currentState = 0;

// Function to switch between states
function transformation() {
  const hero = document.getElementById('hero');
  const lab = document.getElementById('lab');

  // Toggle between states
  if (currentState === 1) {
    // State 1
    hero.textContent = 'Bruce Banner';
    hero.style.fontSize = '60px';
    hero.style.letterSpacing = '2px';
    lab.style.backgroundColor = '#ffb300';
    currentState = 0;
  } else {
    // State 2
    hero.textContent = 'Hulk';
    hero.style.fontSize = '130px';
    hero.style.letterSpacing = '6px';
    lab.style.backgroundColor = '#70964b'
    currentState = 1;
  }
}
