const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let value = 0;

function updateCounter() {
  counterElement.textContent = value;
}
updateCounter();

// To Increment the Value
incrementButton.addEventListener("click", function () {
  value++;
  updateCounter();
});

// To Decrement the Value
decrementButton.addEventListener("click", function () {
  if (value > 0) {
    value--;
    updateCounter();
  } else {
    alert("Negative values not allowed");
  }
});

// To reset the Value
resetButton.addEventListener("click", function () {
  value = 0;
  updateCounter();
});
