const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const date = document.querySelector("#dy");
setInterval(() => {
  let day = new Date();
  let dd = `${day.getMonth() + 1} / ${day.getDate()} / ${day.getFullYear()} `;
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
  date.innerHTML = dd;
});
