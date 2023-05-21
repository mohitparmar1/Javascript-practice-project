let displayTimeEl = document.getElementById("displayTime");
let Start = document.getElementById("start");
let [hour, minute, second] = [0, 0, 0];
let timer = null;

function stopWatch() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }
  let h = hour < 10 ? "0" + hour : hour;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;

  displayTimeEl.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
  Start.src = "./images/orgpause.jpeg";
}

function watchPause() {
  clearInterval(timer);
  Start.classList.add("pause");
  Start.src = "./images/start.png";
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [hour, minute, second] = [0, 0, 0];
  displayTimeEl.innerHTML = "00:00:00";
}
