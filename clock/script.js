const secondLine = document.querySelector('.second-line')
const minuteLine = document.querySelector('.minute-line')
const hourLine = document.querySelector('.hour-line')

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegress = ((seconds / 60) * 360)
  secondLine.style.transform = `rotate(${secondsDegress}deg)`

  const minutes = now.getMinutes()
  const minutesDegress = ((minutes / 60) * 360)
  minuteLine.style.transform = `rotate(${minutesDegress}deg)`

  const hour = now.getHours()
  const hourDegress = ((hour / 24) * 360)
  hourLine.style.transform = `rotate(${hourDegress}deg)`

}

setInterval(setDate, 1000);