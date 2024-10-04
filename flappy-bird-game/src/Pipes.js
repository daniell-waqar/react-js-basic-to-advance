import React from 'react';
import './Pipes.css';

function Pipes({ pipeX, pipeHeight, gap }) {
  return (
    <div className="pipes">
      <div
        className="pipe-top"
        style={{ left: pipeX, height: pipeHeight }}
      ></div>
      <div
        className="pipe-bottom"
        style={{ left: pipeX, top: pipeHeight + gap }}
      ></div>
    </div>
  );
}

export default Pipes;
