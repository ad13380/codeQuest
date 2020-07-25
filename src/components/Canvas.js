import React from "react";
import TextArea from "./TextArea"

function Canvas() {
  return (
    <div>
      <canvas id="gameArea" data-testid='canvas'></canvas>
      <TextArea />
    </div>
  )
}

export default Canvas;
