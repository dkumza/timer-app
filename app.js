const minutesData = document.querySelector("[data-minutes]");
const secondsData = document.querySelector("[data-seconds]");

let minutes = 0;
let seconds = 0;
let interval;
const report = () => {
   console.log("report function");
};

const forwardData = () => {
   minutesData.textContent = minutes;
   secondsData.textContent = seconds < 10 ? "0" + seconds : seconds;
};

// keep zero ant input front
const keepZero = (e) => {
   // takes value from input
   let value = e.target.value;
   //    checks if number is lower then 10, then keeps 0 at front
   value = parseInt(value) < 10 ? "0" + parseInt(value) : parseInt(value);
   //    passes value back to input
   e.target.value = value;
};

const createTimer = () => {
   interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) return clearInterval(interval);

      if (seconds === 0) {
         minutes--;
         seconds = 59;
      } else {
         seconds--;
      }

      forwardData();
   }, 1000);
};

const setTime = (e) => {
   e.preventDefault();
   //    console.log(e.target[1].value);
   //Elemento filtravimas formos viduje
   // e.target.querySelector('input[type="time"]')
   let minutes = e.target[0].value;
   let seconds = e.target[1].value;
   console.log(minutes, seconds);
   //    console.log(time);
   //    minutes = +time[0];
   //    seconds = +time[1];

   //    //Isvalyti intervala
   //    clearInterval(interval);

   //    createTimer();
};

const clearTimer = () => {
   clearInterval(interval);
   minutes = 0;
   seconds = 0;
   forwardData();
};

forwardData();

createTimer();
