export default function Controls({
  bg_btn_active,
  bg_btn_inactive,
  running
}) {

  function changeButtonIconColor(elem) {
    let icon = String(elem.id) + "-icon"
    icon = document.querySelector(`#${icon}`)


    if (elem.style.backgroundColor == bg_btn_active) {
      elem.style.backgroundColor = bg_btn_inactive
      icon.style.fill = "#000"
    } else {
      elem.style.backgroundColor = bg_btn_active
      icon.style.fill = "#fff"
    }
  }

  function verifySoundState(elem) {
    let id = elem.id
    let audio = document.querySelector(`#${id}-audio`)

    if (running == undefined) {
      audio.play()
      changeButtonIconColor(elem)
      running = id
    } else {
      audio.pause()
      changeButtonIconColor(elem)
      running = undefined
    }
  }

  return{
    changeButtonIconColor,
    verifySoundState
  }
}