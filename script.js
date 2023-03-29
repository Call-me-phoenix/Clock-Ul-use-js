const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
let timer = undefined;

function updateTime() {
  const day = new Date();
  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * deg;
  const ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  return day;
}

(function syncTime() {
  clearInterval(timer);
  setTimeout(() => {
    timer = setInterval(() => {
      if (updateTime().getMilliseconds() < 100) return;
      setTimeout(syncTime);
    }, 1000);
    updateTime();
  }, 1000 - updateTime().getMilliseconds());
})();
