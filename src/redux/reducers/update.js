import { UPDATE_STATS } from "../constants/actionTypes";

const initialState = {
  stats: {
    rank: 12890,
    percentile: 37,
    score: 7,
    totalQuestions: 15,
  },
};

export const update = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATS:
      const { rank, score, percentile, totalQuestions } = action.payload;
      return {
        stats: {
          ...state,
          rank,
          score,
          percentile,
          totalQuestions,
        },
      };
    default:
      return state;
  }
};
