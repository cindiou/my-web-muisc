import {
  getDjRadioCatelist,
  getDjRadioRecommend,
  getDjRadios,
  getPreRecommend,
  getRecommendProgram,
  getRankingProgram,
} from "@/services/djradio";
import * as actionTypes from "./constants";

const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories: res && res.categories,
});

const changeRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends: res && res.djRadios,
});

const changeRadiosAction = (res) => ({
  type: actionTypes.CHANGE_RADIOS,
  radios: res && res.djRadios,
});

export const changeCurrentIdActio = (id) => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  currentId: id,
});

export const getRadioCategories = () => {
  return (dispatch) => {
    getDjRadioCatelist().then((res) => {
      dispatch(changeCategoryAction(res));
      // const currentId = res.categories[0].id;
      // dispatch(changeCurrentIdAction(currentId));
    });
  };
};

export const getRadioRecommend = (currentId) => {
  return (dispatch) => {
    getDjRadioRecommend(currentId).then((res) => {
      dispatch(changeRecommendsAction(res));
    });
  };
};

export const getRadios = (currentId, offset) => {
  return (dispatch) => {
    dispatch({ type: "radio/is_spinning", isSpinning: true });

    getDjRadios(currentId, 30, offset).then((res) => {
      dispatch(changeRadiosAction(res));
      dispatch({ type: "radio/is_spinning", isSpinning: false });
    });
  };
};

//=================

const changePreMusicAction = (res) => {
  return {
    type: actionTypes.CHANGE_PRE_MUSIC,
    preMusic: res && res.djRadios,
  };
};

const changePreLifeAction = (res) => {
  return {
    type: actionTypes.CHANGE_PRE_LIFE,
    preLife: res && res.djRadios,
  };
};

const changePreEmotionAction = (res) => {
  return {
    type: actionTypes.CHANGE_PRE_EMOTION,
    preEmotion: res && res.djRadios,
  };
};

const changePreCoverAction = (res) => {
  return {
    type: actionTypes.CHANGE_PRE_COVER,
    preCover: res && res.djRadios,
  };
};

const changePreKnowledgeAction = (res) => {
  return {
    type: actionTypes.CHANGE_PRE_KNOWLEDGE,
    preKnowledge: res && res.djRadios,
  };
};

const changeRecommendProgramAction = (res) => {
  return {
    type: actionTypes.CHANGE_RECOMMEND_PROGRAM,
    recommendProgram: res && res.programs,
  };
};

const changeRankingProgramAction = (res) => {
  return {
    type: actionTypes.CHANGE_RANKING_PROGRAM,
    rankingProgram: res && res.toplist,
  };
};

export const getRecommendProgramAction = () => {
  return (dispatch, getState) => {
    getRecommendProgram().then((res) => {
      dispatch(changeRecommendProgramAction(res));
    });
  };
};

export const getRankingProgramAction = () => {
  return (dispatch, getState) => {
    getRankingProgram().then((res) => {
      dispatch(changeRankingProgramAction(res));
    });
  };
};

export const getPreRecommendAction = (type) => {
  return (dispatch, getState) => {
    getPreRecommend(type).then((res) => {
      switch (type) {
        case 2: //音乐推荐
          dispatch(changePreMusicAction(res));
          break;
        case 6: //生活
          dispatch(changePreLifeAction(res));
          break;
        case 3: //情感
          dispatch(changePreEmotionAction(res));
          break;
        case 2001: //创作翻唱
          dispatch(changePreCoverAction(res));
          break;
        case 11: //知识
          dispatch(changePreKnowledgeAction(res));
          break;
        default:
          console.log("参数错误");
      }
    });
  };
};
