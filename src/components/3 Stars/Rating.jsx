import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
function Rating({ stars }) {
  const [rat, setRat] = useState(0);
  const [hov, setHov] = useState(0);
  const handleClick = (currStar) => {
    setRat(currStar);
  };

  const handleHover = (currStar) => {
    setHov(currStar);
  };
  const handleLeave = () => {
    setHov(rat);
  };
  return (
    <>
      <div>
        <div className="container  text-center">
          <div className="row">
            <div className="col m-4 display-2">
              {[...Array(stars)].map((_, i) => {
                i++;
                return (
                  <FaStar
                    key={i}
                    onClick={() => {
                      handleClick(i);
                    }}
                    className={i <= (hov || rat) ? "active" : "inactive"}
                    onMouseEnter={() => {
                      handleHover(i);
                    }}
                    onMouseLeave={() => {
                      handleLeave();
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rating;
