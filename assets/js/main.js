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

  timerTimeout
} = Elements


function countdown(){

  timerTimeout =setTimeout(function(){
    let cr_minute = Number(minutesDisplay.textContent)
    let cr_second = Number(secondsDisplay.textContent)
  
    if(cr_minute <= 0 && cr_second <= 0){

    }

    if(cr_second <= 0){
      cr_second = 60
      --cr_minute
    }

  }, 1000)

}

function plusTime(){
  let current_minute = Number(minutesDisplay.textContent)


}
