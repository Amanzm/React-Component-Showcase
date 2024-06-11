import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Color() {
  const [colorInfo, setColorInfo] = useState({
    type: "rgb",
    color: generateRgb(),
  });

  function generateHex() {
    const n = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
    return `#${n}`;
  }

  function generateRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const handleHex = () => setColorInfo({ type: "hex", color: generateHex() });
  const handleRandom = () => {
    if (colorInfo.type === "hex") {
      setColorInfo({ ...colorInfo, color: generateHex() });
    } else {
      setColorInfo({ ...colorInfo, color: generateRgb() });
    }
  };
  const handleRgb = () => setColorInfo({ type: "rgb", color: generateRgb() });

  const prevColor = useRef({ ...colorInfo });

  useEffect(() => {
    prevColor.current = { ...colorInfo };
  }, [colorInfo]);

  return (
    <div className="container text-center my-3">
      <div
        className="p-4 rounded"
        style={{
          backgroundColor: colorInfo.color,
          color: "#000000",
        }}
      >
        <div className="btn-group mb-3" role="group" aria-label="Color options">
          <button
            onClick={handleHex}
            type="button"
            className="btn btn-outline-primary"
          >
            HEX
          </button>
          <button
            onClick={handleRandom}
            type="button"
            className="btn btn-outline-primary"
          >
            Random
          </button>
          <button
            onClick={handleRgb}
            type="button"
            className="btn btn-outline-primary"
          >
            RGB
          </button>
        </div>

        <div className="row text-light text-center">
          <div className="col-12 col-md-6">
            <div className="h4">
              {colorInfo.type === "hex" ? "HEX" : "RGB"} Value is
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="h4">{colorInfo.color}</div>
          </div>
        </div>

        <div
          className="row mt-4 p-3 text-center rounded"
          style={{ backgroundColor: prevColor.current.color }}
        >
          <div className="col-12 col-md-6">
            <div className="h4">Previous Value</div>
          </div>
          <div className="col-12 col-md-6">
            <div className="h4">{prevColor.current.color}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
