import { useState } from "react";
import AccordianItem from "./AccordianItem";
import data from "./data.js";
import "./styles.css";
export default function Accordian() {
  const [active, setActive] = useState(null);
  const [multiActive, setMultiActive] = useState([]);
  const [multi, setMulti] = useState(false);
  const handleClick = (id) => {
    if (!multi) {
      setActive(active === id ? null : id);
    } else {
      const copy = [...multiActive];
      if (copy.includes(id)) {
        setMultiActive(copy.filter((activeId) => activeId !== id));
      } else {
        setMultiActive([...copy, id]);
      }
    }
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((item) => (
          <AccordianItem
            key={item.id}
            dataItem={item}
            isActive={
              multi ? multiActive.includes(item.id) : active === item.id
            }
            Click={handleClick}
          />
        ))}
      </div>
      <div>
        <div className="d-grid gap-2 col-8 mx-auto  mt-5">
          <button
            onClick={() => {
              setMulti((prev) => !prev);
              setMultiActive([]);
              setActive(null);
            }}
            className="btn btn-outline-primary "
            type="button"
          >
            {!multi ? "Enable" : "Disable"} Multi Selection.
          </button>
        </div>
      </div>
    </div>
  );
}
