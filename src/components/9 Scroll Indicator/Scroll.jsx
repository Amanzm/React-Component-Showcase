import React, { useEffect, useState } from "react";
import "./Scroll.css";
function Scroll() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScrollPercent = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollPercent(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="progress " style={{ height: "15px" }}>
      <div className="progress-bar " style={{ width: `${scrollPercent}%` }}>
        {Math.ceil(scrollPercent)} %
      </div>
    </div>
  );
}
export default Scroll;
