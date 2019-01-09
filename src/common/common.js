/* eslint-disable */
export const remSet = () => {
  let targetWidth = checkMobile() ? 375 : 1440
  let docEl = document.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = () => {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / targetWidth) + 'px'
  }
  if (!document.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
  document.addEventListener('DOMContentLoaded', recalc, false)
}

export const checkMobile = () => {
  if (/mobile/.test(location.href)){
    return true}
  if (/Android/i.test(navigator.userAgent)) {
    return /Mobile/i.test(navigator.userAgent)
  } else return /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
