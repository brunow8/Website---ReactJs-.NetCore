import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

export default function AccordionDetail(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px")
    const [setRotate, setRotateState] = useState("accordion_icon");
    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "active" ? "0px" : `${document.getElementById("siga").scrollHeight}px`)
        setRotateState(
            setActive === "active" ? "accordion_icon" : "accordion_icon rotate"
        )
    }

  return (
      <>
        <div className="accordion_section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion_tittle">Detalhes do produto</p>
            <Chevron className={`${setRotate}`} width={20} fill={"#777"}/>
        </button>
        </div>
        <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion_content mt-2 mb-4">
            <div id="siga" className="accordion_text" dangerouslySetInnerHTML={{ __html: props.prod.details}}>
                {props.dangerouslySetInnerHTML}
            </div>

        </div>
      </>
     
  ); 
  
}
