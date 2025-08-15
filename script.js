// Get the text element
const blinkingText = document.getElementById('blinking-text');

// Create an array with the prases to display
const phrases = ["A safer future is built in the code", "Brycen Long"];

// A variable to keep track of the current phrase
let currentPhraseIndex = 0;

// Function to togglw the opacity
function changeTextAndBlink() {
    // If the opacity is 0 (hidden), make it 1 (visible)
    blinkingText.style.opacity = '0';

    // Wait for the fade-out transition to complete (1 second from your CSS)
    // Then, change the text and fade it back in
    setTimeout(() => {
        // Update the text content with the next phrase in the array
        blinkingText.textContent = phrases[currentPhraseIndex];

        // Make the text visible again
        blinkingText.style.opacity = '1';

        // Move to the next phrase in the array
        currentPhraseIndex++

        //If it reached the end of the array, loop back to the beggining
        if (currentPhraseIndex >= phrases.length) {
            currentPhraseIndex = 0;
        }
    }, 1000); // 1000ms matches the transition time in the CSS
}

// Call the function immediately to start the effect right away
changeTextAndBlink();

// Then set up the interval for all subsequent blinks
setInterval(changeTextAndBlink, 4000);