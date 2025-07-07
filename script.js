function nextPage() {
  window.location.href = "yes.html";
}

const noButton = document.getElementById("noButton");

function moveButton() {
  const btnWidth = noButton.offsetWidth;
  const btnHeight = noButton.offsetHeight;
  const margin = 20;

  const maxX = window.innerWidth - btnWidth - margin;
  const maxY = window.innerHeight - btnHeight - margin;

  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

  noButton.style.position = "fixed";
  noButton.style.left = `${randX}px`;
  noButton.style.top = `${randY}px`;
}

window.onload = () => {
  const yesBtn = document.getElementById("yesButton");
  const rect = yesBtn.getBoundingClientRect();

  noButton.style.position = "fixed";
  noButton.style.left = `${rect.right + 10}px`;
  noButton.style.top = `${rect.top}px`;
};

noButton.addEventListener("mouseenter", moveButton);
noButton.addEventListener("click", moveButton);