const clock = document.querySelector("h3#clock");
const calender = document.querySelector("h3#calender");
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }

  function getCalender() {
    const today = new Date();
    numberedDay = today.getDay();
    const day = days[numberedDay];
    const month = String(today.getMonth()).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();
    calender.innerText = `${month}/${date}/${year} (${day})`;
}


getClock();
getCalender();
setInterval(getClock, 1000);