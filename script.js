// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.onclick = e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    };
  });

  // Typewriter effect
  const typewriterTexts = [
    "Software Engineer",
    "Web Developer",
    "Deep Learning Enthusiast"
  ];

  let currentText = 0;
  let currentChar = 0;
  const typeElement = document.getElementById('typewriter');

  function type() {
    if (currentChar === 0) {
      typeElement.textContent = "";
    }

    if (currentChar < typewriterTexts[currentText].length) {
      typeElement.textContent += typewriterTexts[currentText].charAt(currentChar);
      currentChar++;
      setTimeout(type, 120);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (currentChar > 0) {
      typeElement.textContent = typewriterTexts[currentText].substring(0, currentChar - 1);
      currentChar--;
      setTimeout(erase, 60);
    } else {
      currentText = (currentText + 1) % typewriterTexts.length;
      setTimeout(type, 500);
    }
  }

  type();
});
