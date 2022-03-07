import React from "react";
import LeftNav from "./components/Basics/LeftNav";
import TopBar from "./components/Basics/TopBar";

const PageStructure = (props) => {
  return (
    <div className="page-structure">
      <TopBar />
      <LeftNav />
      <div className="children">{props.children}</div>
    </div>
  );
};

export default PageStructure;
