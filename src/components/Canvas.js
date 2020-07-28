import React from "react";
import TextArea from "./TextArea"

function Canvas(props) {
  return (
    <div className='pa31 flex justify-around' >
      {/* <canvas className='fr w-50 ' id="gameArea" data-testid='canvas'></canvas> */}
      <canvas className='fr' id="gameArea" data-testid='canvas' style={{ height: "80%", width: "55%", position: "relative" }}></canvas>
      <TextArea levels={props.levels} />
    </div>
  )
}

export default Canvas;
