import { Elements } from "./elements.js";
import Timer from "./timer.js";
import Events from "./events.js";
import Controls from "./controls.js"


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
  bg_btn_active,
  bg_btn_inactive,

  running
} = Elements

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  running
})

const controls = Controls({
  bg_btn_active,
  bg_btn_inactive,
  running
})


Events({ controls, timer})
