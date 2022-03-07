import React from "react";
import CardHeading from "../Basics/CardHeading";

const syllabusData = [
  {
    id: 1,
    name: "HTML Tools, Forms, History",
    percentage: "80",
  },
  {
    id: 2,
    name: "Tags and References in HTML",
    percentage: "60",
  },
  {
    id: 3,
    name: "Tables and CSS Basics",
    percentage: "24",
  },
  {
    id: 4,
    name: "Tables and CSS Basics",
    percentage: "96",
  },
];

const SyllabusAnalysis = () => {
  return (
    <div className="syllabus-analysis">
      <CardHeading heading="Syllabus wise Analysis" />

      <div className="syllabus-data">
        {syllabusData.map((data) => (
          <div className="syllabus-data-item">
            <div className="syllabus-data-item-name">{data.name}</div>

            <div
              className={`syllabus-data-item-percentage ${
                data.percentage >= 0 && data.percentage <= 40 && "red"
              } ${data.percentage >= 41 && data.percentage <= 60 && "orange"} ${
                data.percentage >= 61 && data.percentage <= 80 && "blue"
              } ${data.percentage >= 81 && data.percentage <= 100 && "green"} `}
            >
              <div className="bar-status">
                <div style={{ width: data.percentage + "%", height: "100%" }}>
                  <div className="main-bar"></div>{" "}
                </div>
                <div className="below-bar"></div>
              </div>
              {data.percentage}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusAnalysis;
