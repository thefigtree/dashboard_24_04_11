import React from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Portfolio</h1>
      <Cards></Cards>
      <h2>Portfolio</h2>
      <Table></Table>
    </div>
  );
};

export default MainDash;
