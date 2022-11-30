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
      return
    }

    if(cr_second <= 0){
      cr_second = 60
      --cr_minute
    }

    
    --cr_second

    secondsDisplay.textContent = String(cr_second).padStart(2, '0')
    minutesDisplay.textContent = String(cr_minute).padStart(2, '0')

    countdown()
  }, 1000)
}


function pause(){
  clearTimeout(timerTimeout)
}


function plus(){ 
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
  minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, '0')
}

function minus(){ 
  minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
  minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, '0')
}

function forest(){

}


btn_play.addEventListener('click', function(){
  countdown()
})

btn_stop.addEventListener('click', function(){
  pause()
})

btn_plus.addEventListener('click', function(){
  plus()
})

btn_minus.addEventListener('click', function(){
  minus()
})



const forest_audio = document.querySelector('#forest-audio')
const rain_audio = document.querySelector('#rain-audio')
const crowd_audio = document.querySelector('#crowd-audio')
const fire_audio = document.querySelector('#fire-audio')

const bg_btn_active = "rgb(2, 121, 157)"
const bg_btn_inactive = "rgb(225, 225, 230)"
let isActive = false

function changeButtonIconColor(elem){
  let icon = String(elem.id) + "-icon"
  icon = document.querySelector(`#${icon}`)
  

  if(elem.style.backgroundColor == bg_btn_active){
    elem.style.backgroundColor = bg_btn_inactive
    icon.style.fill = "#000"
  }else{
    elem.style.backgroundColor = bg_btn_active
    icon.style.fill = "#fff"
  }
}

function verifySoundState(elem){
  let audio = elem.id
  audio = document.querySelector(`#${audio}-audio`)
  if(isActive == false){
    audio.play()
    changeButtonIconColor(elem)
    isActive = true
  }else{
    audio.pause()
    changeButtonIconColor(elem)
    isActive = false
  }
}

btn_forest.addEventListener('click', function(){
  verifySoundState(btn_forest)
})

btn_rain.addEventListener('click', function(){
  verifySoundState(btn_rain)
})

btn_crowd.addEventListener('click', function(){
  verifySoundState(btn_crowd)
})

btn_fire.addEventListener('click', function(){
  verifySoundState(btn_fire)
})
