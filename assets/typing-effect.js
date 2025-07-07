const words = ["AI Developer", "Data Scientist", "Game Developer", "Gamer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.getElementById("typed-text");

function type() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typedTextElement.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);
