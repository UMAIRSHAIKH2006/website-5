// Typing Effect Script
const typingElement = document.getElementById("typing");

// Words to be displayed in typing effect
const words = ["Web Developer", "Designer", "Freelancer", "Content Creator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Typing speed in milliseconds
const erasingSpeed = 50; // Erasing speed in milliseconds
const delayBetweenWords = 1500; // Delay before typing the next word

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        // Remove characters
        typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        // Add characters
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause before deleting
        isDeleting = true;
        setTimeout(type, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loop back to the first word
        setTimeout(type, 500);
    } else {
        // Continue typing or deleting
        setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
    }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
    type();
});
