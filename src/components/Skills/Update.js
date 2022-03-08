import React, { useState } from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import { updateStats } from "../../redux/actions/update";
import { useDispatch } from "react-redux";

const Update = ({ handleClose }) => {
  const dispatch = useDispatch();

  const stats = useSelector((state) => state.update.stats);

  const [ranks, setRank] = useState(stats.rank);
  const [percentiles, setPercentile] = useState(stats.percentile);
  const [scores, setScore] = useState(stats.score);
  const saveData = () => {
    dispatch(
      updateStats({
        rank: ranks,
        percentile: percentiles,
        score: scores,
        totalQuestions: stats.totalQuestions,
      })
    );
    handleClose();
  };
  return (
    <div className="Update">
      <div className="dialog-heading">
        <div className="heading-name">Update Score Skills</div>
        <div className="logo">
          <div className="logo-name">HTML</div>
          <div className="logo-image">
            <img
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              alt="LOGO"
            />
          </div>
        </div>
      </div>

      <div className="dialog-content">
        <div className="input-rank">
          <div className="content-input">
            <span>1</span>Update your <b>Rank</b>
          </div>
          <div className="button-input">
            <Button
              onClick={() => {
                ranks > 0 && setRank(ranks - 1);
              }}
            >
              -
            </Button>
            <input
              type="number"
              value={ranks}
              onChange={(e) => {
                setRank(e.target.value);
              }}
            ></input>
            <Button
              onClick={() => {
                setRank(ranks + 1);
              }}
            >
              +
            </Button>
          </div>
        </div>
        <div className="input-rank">
          <div className="content-input">
            <span>2</span>Update your <b>Percentile</b>
          </div>
          <div className="button-input">
            <Button
              onClick={() => {
                percentiles > 0 && setPercentile(percentiles - 1);
              }}
            >
              -
            </Button>
            <input
              type="number"
              value={percentiles}
              onChange={(e) => {
                setPercentile(e.target.value);
              }}
              max="100"
            ></input>
            <Button
              onClick={() => {
                percentiles < 100 && setPercentile(percentiles + 1);
              }}
            >
              +
            </Button>
          </div>
        </div>
        <div className="input-rank">
          <div className="content-input">
            <span>3</span>Update your <b>Rank</b>
          </div>
          <div className="button-input">
            <Button
              onClick={() => {
                scores > 0 && setScore(scores - 1);
              }}
            >
              -
            </Button>
            <input
              type="number"
              value={scores}
              onChange={(e) => {
                setScore(e.target.value);
              }}
            ></input>
            <Button
              onClick={() => {
                scores < stats.totalQuestions && setScore(scores + 1);
              }}
            >
              +
            </Button>
          </div>
        </div>
      </div>
      <div className="dialog-buttons">
        <Button
          className="out"
          variant="outlined"
          color="primary"
          onClick={handleClose}
        >
          {" "}
          Cancel{" "}
        </Button>
        <Button
          className="fill"
          variant="contained"
          color="primary"
          onClick={saveData}
        >
          {" "}
          Save &nbsp; <ArrowForwardIcon fontSize="14px" />
        </Button>
      </div>
    </div>
  );
};

export default Update;
