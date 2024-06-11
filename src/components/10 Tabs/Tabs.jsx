import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs) return;
  return (
    <div className="container">
      <ul className="nav nav-tabs nav-fill">
        {tabs.map((tab, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setActiveTab(index);
              }}
              className="nav-item"
            >
              <a
                className={`nav-link text-info   ${
                  activeTab == index ? "active" : ""
                }`}
              >
                {tab.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div>{tabs && tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
