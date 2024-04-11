import React from "react";
import "./Sidebar.css";
import { UilEstate } from "@iconscout/react-unicons";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <span>이동진</span>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
            <UilEstate></UilEstate>
          </div>
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
