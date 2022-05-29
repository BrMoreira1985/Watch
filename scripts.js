const hoursHand = document.querySelector(".hours");
const minutesHand = document.querySelector(".minutes");
const secondsHand = document.querySelector(".seconds");
const day = document.getElementById("day");
const month = document.getElementById("month");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setDate = (element, value) => {
  element.innerHTML = value;
};

const setClock = () => {
  const currentDate = new Date();
  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;
  const day_ = currentDate.getDate();
  const month_ = currentDate.getMonth();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  setDate(day, day_);
  setDate(month, months[month_]);
  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);
