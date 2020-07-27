import React from "react";
import TextArea from "./TextArea"

function Canvas() {
  return (
    <div>
      <canvas className='fr w-50' id="gameArea" data-testid='canvas'></canvas>
      <TextArea />
    </div>
  )
}

export default Canvas;
