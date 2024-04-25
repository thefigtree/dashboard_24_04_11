import React from "react";
import "./Stacks.css";
import { StacksData } from "../../Data/Data";

const Stacks = () => {
  return (
    <div className="Stacks">
      {StacksData.map((stack, index) => {
        return (
          <div className="stack" key={index}>
            <div className="notice">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{stack.name}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stacks;
