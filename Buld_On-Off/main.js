const bulbEl = document.getElementById("bulb");
const bulbSwitch = document.getElementById("bulb-switch");


bulbSwitch.addEventListener("click", () => {
    if(bulbEl.src.match("off")) {
        bulbEl.src = "./bulb-on.gif";
        bulbSwitch.innerText = "Turn Off";
    }else{
        bulbEl.src = "./bulb-off.gif";
        bulbSwitch.innerText = "Turn On";
    }
 
});
