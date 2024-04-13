import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import "./Card.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard
          params={props}
          setExpanded={() => setExpanded(false)}
        ></ExpandedCard>
      ) : (
        <CompactCard
          params={props}
          setExpanded={() => setExpanded(true)}
        ></CompactCard>
      )}
    </LayoutGroup>
  );
};

// CompactCard
function CompactCard({ params, setExpanded }) {
  return (
    <div
      className="CompactCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue}%`}
        ></CircularProgressbar>
        <span>{params.title}</span>
      </div>

      <div className="detail">
        <span>{params.value}</span>
        <span>Last 24 Hours</span>
      </div>
    </div>
  );
}

// ExpandedCard
function ExpandedCard({ params, setExpanded }) {
  return (
    <div
      className="ExpandedCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
    >
      <div>
        <UilTimes onClick={setExpanded}></UilTimes>
      </div>
      <span>{params.title}</span>
      <div className="chartContainer">Chart</div>
      <span>Last 24 Hours</span>
    </div>
  );
}

export default Card;
