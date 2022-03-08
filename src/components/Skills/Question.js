import React from "react";
import CardHeading from "../Basics/CardHeading";
import { PieChart } from "react-minimal-pie-chart";

import { useSelector } from "react-redux";

const Question = () => {
  const stats = useSelector((state) => state.update.stats);
  return (
    <div className="question-analysis">
      <div className="analysis-top">
        <CardHeading heading="Question Analysis" />

        <div className="stats">
          {stats.score < 10 ? `0${stats.score}` : stats.score} /{" "}
          {stats.totalQuestions < 10
            ? `0${stats.totalQuestions}`
            : stats.totalQuestions}
        </div>
      </div>
      <div className="analysis-main">
        <div className="main-content">
          <b>You scored {stats.score} question correct out of 15.</b>
          However it still needs some improvements
        </div>
        <div className="main-chart">
          <div className="text-chart">🎯</div>
          <PieChart
            data={[
              { title: "Score", value: stats.score, color: "lightblue" },
              {
                title: "Wrong",
                value: stats.totalQuestions - stats.score,
                color: "#438AF61A",
              },
            ]}
            lineWidth={50}
            animate={true}
            animationDuration={1700}
            animationEasing="ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
