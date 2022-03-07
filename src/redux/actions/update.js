import { UPDATE_STATS } from "../constants/actionTypes";

export const updateStats = ({ rank, score, percentile, totalQuestions }) => {
  return {
    type: UPDATE_STATS,
    payload: {
      rank,
      score,
      percentile,
      totalQuestions,
    },
  };
};
