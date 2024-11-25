setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteshand = document.querySelector('[data-minute-hand]')
const secondshand = document.querySelector('[data-second-hand]')


function setClock() {
  const currentDate = new Date();
  const SecondsRatio =currentDate.getSeconds()/60
  const minutesRatio = (SecondsRatio + currentDate.getMinutes())/60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  
  setRotation(secondshand, SecondsRatio)
  setRotation(minuteshand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, RotationRatio) {
  element.style.setProperty('--rotation', RotationRatio * 360)
}

setClock()