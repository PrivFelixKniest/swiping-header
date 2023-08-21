import React, { useEffect } from "react";
import { SwipingHeaderProps } from "./swipingHeader.types";


const SwipingHeader: React.FC<SwipingHeaderProps> = (props) => {
  const {bodycomponent, headercomponent} = props;
  useEffect(() => {
    // main content scroll on scroll
    window.addEventListener('scroll', () => {
      const realBody = document.querySelector(".realBodyHeight")
      if (realBody && realBody instanceof HTMLElement) {
        document.body.style.setProperty('--scroll', (window.pageYOffset / (realBody.offsetHeight - window.innerHeight)).toString());
      }
      document.querySelectorAll(".mainPageContent").forEach((mainPageContent) => {
        if (mainPageContent instanceof HTMLElement) {
          if (window.pageYOffset >= window.innerHeight) {
            mainPageContent.style.position = "relative"
          }
          else { 
            mainPageContent.style.position = "fixed"
            mainPageContent.style.top = "0"
          }
        }
      })
    }, false);
    // init main content scroll
    document.querySelectorAll(".mainPageContent").forEach(mainPageContent => {
      if (mainPageContent instanceof HTMLElement) {
        if (window.pageYOffset >= window.innerHeight) {
          mainPageContent.style.position = "relative"
        }
        else { 
          mainPageContent.style.position = "fixed"
          mainPageContent.style.top = "0"
        }
      }
    })
  }, [])

  const renderHeader = () => {
    return (
      <div style={{width: "100%", height: "100vh"}}>
        {headercomponent}
      </div>
    )
  }

  const renderBody = () => {
    return (
      <div>
        {bodycomponent}
      </div>
    )
  }

  return(
    <div>
      {renderHeader()}
      <div className="mainPageContent" style={{width: "100%", zIndex: "-1"}}>
        {renderBody()}
      </div>
      <div style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0"}}>
        {renderHeader()}
        {renderBody()}
      </div>
    </div>
  )
}

export default SwipingHeader