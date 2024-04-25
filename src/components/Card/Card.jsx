import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
// import Chart from "react-apexcharts";
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
    <motion.div
      className="CompactCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      onClick={setExpanded}
      // layoutId="expandableCard"
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
    </motion.div>
  );
}

// ExpandedCard
function ExpandedCard({ params, setExpanded }) {
  // const data = {
  //   options: {
  //     chart: {
  //       type: "area",
  //       height: "auto",
  //     },
  //     dropShadow: {
  //       enabled: false,
  //       enabledOnSeries: undefined,
  //       top: 0,
  //       left: 0,
  //       blur: 3,
  //       color: "#000",
  //       opacity: 0.35,
  //     },
  //     fill: {
  //       colors: ["#fff"],
  //       type: "gradient",
  //     },
  //     dataLables: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //       colors: ["white"],
  //     },
  //     tooltip: {
  //       x: {
  //         format: "dd/MM/yy HH:mm",
  //       },
  //     },
  //     grid: {
  //       show: true,
  //     },
  //     xaxis: {
  //       type: "datetime",
  //       categories: [
  //         "2024-04-14T00:00.000Z",
  //         "2024-04-14T00:00.000Z",
  //         "2024-04-14T00:00.000Z",
  //         "2024-04-14T00:00.000Z",
  //         "2024-04-14T00:00.000Z",
  //         "2024-04-14T00:00.000Z",
  //         "2024-04-14T00:00.000Z",
  //       ],
  //     },
  //   },
  // };

  // console.log(data);

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      // layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded}></UilTimes>
      </div>
      <span>{params.title}</span>
      <div className="chartContainer">
        {/* <Chart
          series={params.series}
          type="area"
          options={data.options}
        ></Chart> */}
      </div>
      <span>Last 24 Hours</span>
    </motion.div>
  );
}

export default Card;
