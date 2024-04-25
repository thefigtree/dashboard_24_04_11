import React from "react";
import Chart from "react-apexcharts";
// import Chart from "react-apexcharts";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLables: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-04-14T00:00.000Z",
          "2024-04-14T00:00.000Z",
          "2024-04-14T00:00.000Z",
          "2024-04-14T00:00.000Z",
          "2024-04-14T00:00.000Z",
          "2024-04-14T00:00.000Z",
          "2024-04-14T00:00.000Z",
        ],
      },
    },
  };

  return (
    <div className="CustomerReview">
      <Chart series={data.series} options={data.options} type="area"></Chart>
    </div>
  );
};

export default CustomerReview;
