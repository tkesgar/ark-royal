import React, { useState } from "react";
import Canvas from "../Canvas";
import MainNavbar from "../MainNavbar";

const INITIAL_PROGRESS = 0.5;

const App: React.FC = () => {
  const [progress, setProgress] = useState(INITIAL_PROGRESS);
  const [chara, setChara] = useState("");
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div className="App">
      <MainNavbar />
      <Canvas
        progress={progress}
        charaBackground={chara}
        charaLeft={left}
        charaTop={top}
        charaWidth={width}
        charaHeight={height}
      />
      <div>
        Progress
        <input
          type="number"
          min="0"
          max="1"
          step="0.01"
          defaultValue={INITIAL_PROGRESS}
          onChange={(e): void => setProgress(Number(e.target.value))}
        />
      </div>
      <div>
        File
        <input
          type="file"
          onChange={(e): void => {
            const file = e.target.files?.[0];
            setChara(URL.createObjectURL(file));
          }}
        />
      </div>
      <div>
        Left
        <input
          type="number"
          defaultValue={100}
          onChange={(e): void => setLeft(Number(e.target.value))}
        />
      </div>
      <div>
        Top
        <input
          type="number"
          defaultValue={100}
          onChange={(e): void => setTop(Number(e.target.value))}
        />
      </div>
      <div>
        Width
        <input
          type="number"
          defaultValue={100}
          onChange={(e): void => setWidth(Number(e.target.value))}
        />
      </div>
      <div>
        Height
        <input
          type="number"
          defaultValue={100}
          onChange={(e): void => setHeight(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default App;
