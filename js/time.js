const now = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const day = days[now.getUTCDay()];
let month = months[now.getUTCMonth()];
const year = now.getUTCFullYear();
const date = now.getUTCDate();
const yearHolder = document.querySelector(".year");

// Ghana is in the Greenwich Mean Time (GMT) timezone
// You can use 'GMT' or 'UTC' interchangeably
const ghanaTime = new Date(now.toLocaleString("en-US", { timeZone: "GMT" }));

function updateTime() {
  document.querySelector("#day").textContent = `${day}`;
  yearHolder.textContent = `${year}`;

  document.querySelector(
    "#date"
  ).textContent = `${month} ${date}, ${year} ${ghanaTime
    .toTimeString()
    .slice(0, 8)} GMT`;
}

setInterval(updateTime, 1000);
