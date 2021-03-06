import React from "react";
import TextArea from "./TextArea"

function Canvas(props) {
  return (
    <div className='pa31 flex justify-around flex-wrap' >
      {/* <canvas className='fr w-50 ' id="gameArea" data-testid='canvas'></canvas> */}
      <TextArea levels={props.levels} />
      <canvas className='fr' id="gameArea" data-testid='canvas' style={{ height: "80%", width: "55%", position: "relative" }}></canvas>
    </div>
  )
}

export default Canvas;
