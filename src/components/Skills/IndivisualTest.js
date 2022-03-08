import React from "react";
import CardHeading from "../Basics/CardHeading";

import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Update from "./Update";
import { useSelector } from "react-redux";

const IndivisualTest = () => {
  const stats = useSelector((state) => state.update.stats);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="indivisual">
      <div className="skills-indivisual">
        <div className="logo">
          <div className="logo-name">HTML</div>
          <div className="logo-image">
            <img
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              alt="HTML"
            />
          </div>
        </div>
        <div className="detail">
          <CardHeading heading="Hypertext Markup Language" />
          <div className="detail-content">
            Questions : 08 | Duration : 15 min | Submitted on 5 June 2021
          </div>
        </div>
        <div className="button">
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Update
          </Button>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={open} aria-labelledby="responsive-dialog-title">
        <Update handleClose={handleClose} />
      </Dialog>
      {/* ---- */}

      <div className="statics-indivisual">
        <CardHeading heading="Quick Statistics" />
        <div className="data-statics">
          <div className="ind-stat">
            <div className="stat-image">🏆</div>
            <div className="stat-detail">
              <div className="stat-number">{stats.rank}</div>
              <div className="stat-type">Your Rank</div>
            </div>
          </div>
          <div className="ind-stat">
            <div className="stat-image">📉</div>
            <div className="stat-detail">
              <div className="stat-number">
                {stats.percentile < 10
                  ? `0${stats.percentile}`
                  : stats.percentile}
                %
              </div>
              <div className="stat-type">Percentile</div>
            </div>
          </div>
          <div className="ind-stat">
            <div className="stat-image">✅</div>
            <div className="stat-detail">
              <div className="stat-number">
                {stats.score < 10 ? `0${stats.score}` : stats.score} /{" "}
                {stats.totalQuestions < 10
                  ? `0${stats.totalQuestions}`
                  : stats.totalQuestions}
              </div>
              <div className="stat-type">Correct Answers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndivisualTest;
