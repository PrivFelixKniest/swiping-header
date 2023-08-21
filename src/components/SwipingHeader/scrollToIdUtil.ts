export const scrollToId = (elementId: string, smooth?: boolean) => {
  const obj = document.getElementById(elementId)
  if (obj) {
    if (smooth) {
      if (window.pageYOffset >= window.innerHeight) {
        window.scrollTo({
          top: window.pageYOffset + obj.getBoundingClientRect().top,
          left: window.pageXOffset, 
          behavior: "smooth",
        })
      }
      else {
        window.scrollTo({left: window.pageXOffset, top: window.innerHeight + obj.getBoundingClientRect().top, behavior: "smooth",})
      }
    }
    else {
      if (window.pageYOffset >= window.innerHeight) {
        window.scrollTo(window.pageXOffset, window.pageYOffset + obj.getBoundingClientRect().top)
      }
      else {
        window.scrollTo(window.pageXOffset, window.innerHeight + obj.getBoundingClientRect().top)
      }
    }
  }
  else {
    console.error("SwipingHeader -> scrollToIdUtil: Error", `Requested scroll to id ${elementId} was not found by document.getElementById().`)
  }
}