const display = document.getElementById("displaychar");
const input = document.getElementById("inputbox");

input.addEventListener("keypress", (e) => {
  display.textContent = "typed character is " + e.key;
});
