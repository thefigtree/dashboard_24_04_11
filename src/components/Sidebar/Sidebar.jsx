import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      <div className="logo">
        <span>이동진</span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon></item.icon>
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
