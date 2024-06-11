import React, { useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider({ url, limit }) {
  const [curr, setCurr] = useState(0);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [img, setImg] = useState([]);

  const handleNext = () => {
    setCurr((curr + 1) % img.length);
  };

  const handlePrev = () => {
    setCurr((curr - 1 + img.length) % img.length);
  };

  useEffect(() => {
    fetch(`${url}?page=100&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setImg(data);
        setLoading(false);
      })
      .catch((error) => {
        setErr(error.message);
        setLoading(false);
      });
  }, [url, limit]);

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-grow " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (err) {
    return <p>Error: {err}</p>;
  }

  return (
    <div className="container my-4 text-center">
      <div className="d-flex justify-content-center align-items-center position-relative">
        <button
          className="btn  mx-2 position-absolute start-0"
          onClick={handlePrev}
        >
          <GrPrevious className="display-4" />
        </button>
        <div
          className="
                  {/* flex-grow-1*/}

         mx-2"
        >
          {img.length > 0 && (
            <img
              src={img[curr].download_url}
              className="img-fluid rounded-3"
              alt={img[curr].author}
              style={{ maxHeight: "400px", width: "100%" }}
            />
          )}
        </div>
        <button
          className="btn mx-2 position-absolute end-0"
          onClick={handleNext}
        >
          <GrNext className="display-4" />
        </button>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="d-flex justify-content-center">
            {img.map((_, index) => (
              <span
                key={index}
                className={`mx-1 ${curr === index ? "active" : ""}`}
                onClick={() => setCurr(index)}
                style={{
                  cursor: "pointer",
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: `${curr === index ? "#000" : "#ccc"}`,
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
