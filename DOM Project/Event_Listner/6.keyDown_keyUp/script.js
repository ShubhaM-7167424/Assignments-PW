const display = document.getElementById("display");

// adding a keydown event listener to the document
document.addEventListener("keydown", (ev) => {
  display.style.color = "red";
  display.innerText = ev.key + " key is down";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", (ev) => {
  display.style.color = "green";
  display.innerText = ev.key + " key is up";
});
