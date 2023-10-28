const minutesData = document.querySelector("[data-minutes]");
const secondsData = document.querySelector("[data-seconds]");
const timerWrap = document.querySelector(".timer-wrap");
const inputWrap = document.querySelector(".input-wrap");
const startBtn = document.querySelector(".btn-success");
const resetBtn = document.querySelector(".btn-primary");

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
// const keepZero = (e) => {
//    let maxChars = 2;
//    // takes value from input
//    let value = e.target.value;
//    console.log(parseInt(value));
//    console.log(typeof value);
//    // checks for max characters input and prevents to be more then 2 symbols
//    if (value >= maxChars) {
//       value = parseInt(value.substring(1, maxChars));
//    }

//    //    checks if number is lower then 10, then keeps 0 at front
//    value = parseInt(value) < 10 ? "0" + parseInt(value) : parseInt(value);

//    //    passes value back to input
//    e.target.value = value;
// };

const createTimer = () => {
   interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
         clearTimer();
      }
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
   timerWrap.classList.remove("hide");
   inputWrap.classList.add("hide");

   //    hide start button
   startBtn.classList.add("hide");
   resetBtn.classList.remove("hide");

   console.log(secondsData.value);
   //Elemento filtravimas formos viduje
   // e.target.querySelector('input[type="time"]')
   minutes = +e.target[0].value;
   seconds = +e.target[1].value;
   e.target[0].value = "";
   e.target[1].value = "";
   forwardData();
   clearInterval(interval);
   createTimer();
};

const clearTimer = () => {
   //   e.preventDefault();
   clearInterval(interval);
   timerWrap.classList.add("hide");
   inputWrap.classList.remove("hide");
   forwardData();

   startBtn.classList.remove("hide");
   resetBtn.classList.add("hide");
};
forwardData();
createTimer();
