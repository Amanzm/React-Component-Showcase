import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";

function Qr() {
  const [qr, setQr] = useState("https://example.com/");
  const [inp, setInp] = useState("");
  const [inner, setInner] = useState(generateHex());
  const [outer, setOuter] = useState([
    generateHex(),
    generateHex(),
    generateHex(),
  ]);

  const handleClick = () => {
    setQr(inp);
    setInner(generateHex());
    setOuter([generateHex(), generateHex(), generateHex()]);
    setInp("");
  };

  const handleChange = (e) => {
    setInp(e.target.value);
  };

  function generateHex() {
    const n = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
    return `#${n}`;
  }

  return (
    <div className="container mt-3 py-4 text-center">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card  rounded-4">
            <div className="card-body rounded-4 bg-light">
              <QRCode
                value={qr}
                size={150}
                quietZone={0}
                bgColor={"white"}
                fgColor={inner}
                qrStyle={"dots"}
                eyeRadius={[
                  {
                    // top/left eye
                    outer: [10, 0, 10, 0],
                    inner: [3, 3, 3, 3],
                  },
                  {
                    outer: [10, 10, 10, 0],
                    inner: [5, 5, 5, 5],
                  },
                  {
                    outer: [10, 0, 10, 10],
                    inner: [5, 5, 5, 5],
                  },
                ]}
                eyeColor={[
                  {
                    // top/left eye
                    outer: outer[0],
                    inner: inner,
                  },
                  {
                    outer: outer[1],
                    inner: inner,
                  },
                  {
                    outer: outer[2],
                    inner: inner,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="my-3">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              URL :
            </span>
            <input
              onChange={handleChange}
              value={inp}
              type="url"
              required
              className="form-control"
              id="basic-url"
              placeholder="https://example.com/users/"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          disabled={inp.length === 0}
          onClick={handleClick}
          className="btn btn-outline-primary"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default Qr;
