import React from "react";
import CardHeading from "../Basics/CardHeading";
import { useSelector } from "react-redux";
import GraphImg from "../../media/graph/graph.png";

const Graph = () => {
  const stats = useSelector((state) => state.update.stats);

  return (
    <div className="comparision-graph">
      <div className="graph-head">
        <CardHeading heading="Comparision Graph" />
        <div className="head-graph">📈</div>
      </div>
      <div className="graph-main">
        <div className="main-content">
          <b>You scored {stats.percentile}% percentile</b>&nbsp; which is lower
          than the average percentile 72% of all the engineers who took this
          assessment
        </div>
        <div className="main-graph">
          <img src={GraphImg} alt="Graph" />
        </div>
      </div>
    </div>
  );
};

export default Graph;
