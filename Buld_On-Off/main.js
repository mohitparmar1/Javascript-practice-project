const bulbEl = document.getElementById("bulb");
const bulbOn = document.getElementById("bulb-on");


bulbOn.addEventListener("click", () => {
    if(bulbEl.src.match("off")) {
        bulbEl.src = "./bulb-on.gif";
    }else{
        bulbEl.src = "./bulb-off.gif";
    }
 
});
