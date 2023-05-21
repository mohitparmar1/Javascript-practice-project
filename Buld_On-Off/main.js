const bulbEl = document.getElementById("bulb");
const bulbOn = document.getElementById("bulb-on");
const bulbOff = document.getElementById("bulb-off");

bulbOn.addEventListener("click", () => {
  bulbEl.src = "./bulb-on.gif";
});
bulbOff.addEventListener("click", () => {
  bulbEl.src = "./bulb-off.gif";
});
