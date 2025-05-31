// Typing effect
const text = "Team Japanese";
let index = 0;
const speed = 100;
const typingElement = document.getElementById("typing");

function typeWriter() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  typeWriter();
};
