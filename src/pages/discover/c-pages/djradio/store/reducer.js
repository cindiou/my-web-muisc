import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  categories: [],
  currentId: 0,
  recommends: [],
  radios: [],
  isSpinning: true,

  preMusic: [],
  preLife: [],
  preEmotion: [],
  preCover: [],
  preKnowledge: [],

  recommendProgram: [],
  rankingProgram: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_RADIO_CATEGORY:
      return state.set("categories", action.categories);
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set("currentId", action.currentId);
    case actionTypes.CHANGE_RECOMMENDS:
      return state.set("recommends", action.recommends);
    case actionTypes.CHANGE_RADIOS:
      return state.set("radios", action.radios);

    case actionTypes.CHANGE_PRE_MUSIC:
      return state.set("preMusic", action.preMusic);
    case actionTypes.CHANGE_PRE_LIFE:
      return state.set("preLife", action.preLife);
    case actionTypes.CHANGE_PRE_EMOTION:
      return state.set("preEmotion", action.preEmotion);
    case actionTypes.CHANGE_PRE_COVER:
      return state.set("preCover", action.preCover);
    case actionTypes.CHANGE_PRE_KNOWLEDGE:
      return state.set("preKnowledge", action.preKnowledge);

    case actionTypes.CHANGE_RECOMMEND_PROGRAM:
      return state.set("recommendProgram", action.recommendProgram);
    case actionTypes.CHANGE_RANKING_PROGRAM:
      return state.set("rankingProgram", action.rankingProgram);

    case "radio/is_spinning":
      return state.set("isSpinning", action.isSpinning);
    default:
      return state;
  }
};
