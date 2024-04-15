import React from "react";
import "./RightSide.css";
import Stacks from "../Stacks/Stacks";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Stacks</h3>
        <Stacks></Stacks>
      </div>
      <div>
        <h3>Customer Review</h3>
      </div>
    </div>
  );
};

export default RightSide;
