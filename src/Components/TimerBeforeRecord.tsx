import { observer } from "mobx-react";
import React from "react";
import { RecorderInstance } from "../MobX/RecorderInstance";

const TimerBeforeRecord = () => {
  return (
    <div className="timer-before-record-container">
      <div className="element-beforeRecord">
        <h1 style={{ fontSize: 60 }}>{RecorderInstance.preRecordTime}</h1>
      </div>
    </div>
  );
};

export default observer(TimerBeforeRecord);
