import { Elements } from "./elements.js";


const {
  minutesDisplay,
  secondsDisplay,

  btn_crowd,
  btn_fire,
  btn_forest,
  btn_minus,
  btn_play,
  btn_plus,
  btn_rain,
  btn_stop,
  icon_crowd,
  icon_fire,
  icon_forest,
  icon_rain,


} = Elements

let timerTimeout

function countdown(){

  timerTimeout =  setTimeout(function(){
    let cr_minute = Number(minutesDisplay.textContent)
    let cr_second = Number(secondsDisplay.textContent)
    let isFinished = cr_minute <= 0 && cr_second <= 0
  
    if(isFinished){
      console.log('cabo')
      return
    }

    if(cr_second <= 0){
      cr_second = 2
      --cr_minute
    }

    
    --cr_second

    secondsDisplay.textContent = cr_second
    minutesDisplay.textContent = cr_minute

    countdown()
  }, 1000)
}

countdown()