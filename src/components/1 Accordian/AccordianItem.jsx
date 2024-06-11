import React from "react";
import "./styles.css";

function AccordianItem({ dataItem, Click, isActive }) {
  return (
    <div className="item">
      <div className="title" onClick={() => Click(dataItem.id)}>
        {dataItem.title}
        <span>
          {isActive ? (
            <i className="bi bi-arrow-up-short"></i>
          ) : (
            <i className="bi bi-arrow-down-short"></i>
          )}
        </span>
      </div>
      {isActive ? <div className="content">{dataItem.content}</div> : null}
    </div>
  );
}

export default AccordianItem;
