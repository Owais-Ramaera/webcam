import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.css";
import Logo from "./logo.png";

const App = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="webcam-container">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam"
          />
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <button onClick={captureImage}>Capture Image</button>
        {capturedImage && (
          <div>
            <h2>Captured Image:</h2>
            <img src={capturedImage} alt="captured" />
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
