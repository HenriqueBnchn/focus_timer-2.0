
export default function Timer({
  minutesDisplay,
  secondsDisplay
}){
  let timerTimeout

  function countdown() {

    timerTimeout = setTimeout(function () {
      let cr_minute = Number(minutesDisplay.textContent)
      let cr_second = Number(secondsDisplay.textContent)
      let isFinished = cr_minute <= 0 && cr_second <= 0

      if (isFinished) {
        return
      }

      if (cr_second <= 0) {
        cr_second = 60
        --cr_minute
      }


      --cr_second

      secondsDisplay.textContent = String(cr_second).padStart(2, '0')
      minutesDisplay.textContent = String(cr_minute).padStart(2, '0')

      countdown()
    }, 1000)
  }


  function pause() {
    clearTimeout(timerTimeout)
  }


  function plus() {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, '0')
  }

  function minus() {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, '0')
  }
  return{
    countdown,
    plus,
    minus,
    pause
  }
}
