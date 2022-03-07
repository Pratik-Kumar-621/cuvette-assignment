import React from "react";
import Heading from "../components/Basics/Heading";
import Skeleteon from "../components/Basics/Skeleteon";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Heading heading="Dashboard" />
      <Skeleteon skeleton="Dashboard" />
    </div>
  );
};

export default Dashboard;
