import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { RecordPannelData } from "../Data/RecordPannelData";
import VideoPannelElement from "./VideoPannelElement";
import { observer } from "mobx-react";
import ReactWebCam from "react-webcam";
import { RecorderInstance } from "../MobX/RecorderInstance";
import { getSupportedMimeType } from "../Services/getSuportedMimeType";
import axios from "axios";

const VideoRecord = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = () => {
    RecorderInstance.startPreRecordingTimer();
    setTimeout(() => {
      RecorderInstance.hidePreRecordisDIsplayed();
      startCapture();
    }, 4000);
  };

  const startCapture = () => {
    setCapturing(true);
    RecorderInstance.decreaseTime();
    setTimeout(() => {
      if (capturing) {
        handleStopCaptureClick();
      }
    }, RecorderInstance.duration);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: getSupportedMimeType(),
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  };

  const handleStopCaptureClick = () => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
    RecorderInstance.clearSetTimouts();
  };

  const handleDownload = () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: getSupportedMimeType(),
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  };
  const handleUpload = async () => {
    const data = new FormData();
    const blob = new Blob(recordedChunks, {
      type: getSupportedMimeType(),
    });
    data.append("files", blob);
    data.append("body_1", "body 1");
    data.append("body_2", "body_2");
    const response = await axios.post(
      "https://video-api-dev.cliquify.me/api/v1/upload",
      data
    );
    console.log(response);
  };

  const videoConstraints = {
    // width: { min: 480 },
    // height: { min: 720 },
    aspectRatio: RecorderInstance.aspectRatio,
    facingMode: "user",
  };
  return (
    <div className="video-record-container">
      <div className="video-record-header">
        <div className="video-record-header-left">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-bcXHqe mRSTP"
          >
            <path
              d="M15.5 5L8.5 12L15.5 19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div className="video-record-header-right">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1"
              width="11"
              height="11"
              rx="5.5"
              fill="#FFCDCD"
              stroke="#FFCDCD"
            ></rect>
          </svg>
          <p>Record</p>
        </div>
      </div>
      <div className="video-record-main">
        <div
          style={{ aspectRatio: RecorderInstance.aspectRatio }}
          className="video-record-main-frame"
        >
          <Webcam
            ref={webcamRef}
            audio={RecorderInstance.sound}
            imageSmoothing={true}
            screenshotFormat="image/webp"
            mirrored={false}
            className="camera-component"
            style={{ height: "100%", width: "100%" }}
            videoConstraints={videoConstraints}
          />
        </div>
        <p>{RecorderInstance.durationTimer}</p>
        {capturing ? (
          <button onClick={handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button onClick={handleStartCaptureClick}>Start Capture</button>
        )}
        {recordedChunks.length > 0 && (
          <div>
            {" "}
            <button onClick={handleDownload}>Download</button>
            <button onClick={handleUpload}>Upload</button>{" "}
          </div>
        )}
      </div>
      <div className="video-record-pannel">
        {RecordPannelData.map((element, index) => {
          if (element.isBar) {
            return (
              <div key={index}>
                <VideoPannelElement isBar={element.isBar} />
              </div>
            );
          } else {
            return (
              <div key={index}>
                <VideoPannelElement
                  isBar={element.isBar}
                  effect={element.effect}
                  text={element.text}
                  icon={element.icon}
                  onClick={element.onClick}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default observer(VideoRecord);
