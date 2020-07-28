import React from "react";
import TextArea from "./TextArea"

function Canvas() {
  return (
    <div className='pa3'>
      {/* <canvas className='fr w-50 ' id="gameArea" data-testid='canvas'></canvas> */}
      <canvas className='fr' id="gameArea" data-testid='canvas'></canvas>
      <TextArea />
    </div>
  )
}

export default Canvas;
