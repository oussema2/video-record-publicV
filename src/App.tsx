import React from "react";
import logo from "./logo.svg";
import "./App.css";
import VideoRecord from "./Components/VideoRecord";
import { RecorderInstance } from "./MobX/RecorderInstance";
import TimerBeforeRecord from "./Components/TimerBeforeRecord";
import { observer } from "mobx-react";

function App() {
  return (
    <div className="App">
      {RecorderInstance.preRecordisDIsplayed ? <TimerBeforeRecord /> : null}

      <VideoRecord />
      <button onClick={() => RecorderInstance.changeAspectRatio("landScape")}>
        16/9
      </button>
      <button onClick={() => RecorderInstance.changeAspectRatio("square")}>
        1/1
      </button>
      <button onClick={() => RecorderInstance.changeAspectRatio("portrait")}>
        4/5
      </button>
      <button
        onClick={() => RecorderInstance.changeAspectRatio("tallPortrait")}
      >
        9/16
      </button>
    </div>
  );
}

export default observer(App);
