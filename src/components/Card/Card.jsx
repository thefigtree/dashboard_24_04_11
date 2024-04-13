import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";
import "./Card.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded ? "Expanded" : <CompactCard params={props}></CompactCard>}
    </LayoutGroup>
  );
};

// CompactCard
function CompactCard({ params }) {
  return (
    <div className="CompactCard">
      <div className="radialBar">Chart</div>

      <div className="detail">
        <span>{params.value}</span>
        <span>Last 24 Hours</span>
      </div>
    </div>
  );
}

export default Card;
