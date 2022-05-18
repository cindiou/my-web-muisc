import React, { memo, useEffect } from "react";

import { useSelector, useDispatch, shallowEqual } from "react-redux";

import WMRadioPreRecommend from "../radio-preRecommend";
import WMRadioInitColumn from "../init-column-recommend";

import {
  getPreRecommendAction,
  getRecommendProgramAction,
  getRankingProgramAction,
} from "../../store/actionCreators";

import { InitRadioBottomPageWrapper } from "./style";

export default memo(function InitRadioBottomPage() {
  const {
    preMusic = [],
    preLife = [],
    preEmotion = [],
    preCover = [],
    preKnowledge = [],
    recommendProgram = [],
    rankingProgram = [],
  } = useSelector((state) => {
    return {
      currentId: state.getIn(["djradio", "currentId"]),
      preMusic: state.getIn(["djradio", "preMusic"]),
      preLife: state.getIn(["djradio", "preLife"]),
      preEmotion: state.getIn(["djradio", "preEmotion"]),
      preCover: state.getIn(["djradio", "preCover"]),
      preKnowledge: state.getIn(["djradio", "preKnowledge"]),
      recommendProgram: state.getIn(["djradio", "recommendProgram"]),
      rankingProgram: state.getIn(["djradio", "rankingProgram"]),
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommendProgramAction());
    dispatch(getRankingProgramAction());

    dispatch(getPreRecommendAction(2)); //音乐
    dispatch(getPreRecommendAction(6)); //生活
    dispatch(getPreRecommendAction(3)); //情感
    dispatch(getPreRecommendAction(2001)); //翻唱
    dispatch(getPreRecommendAction(11)); //知识
  }, [dispatch]);

  return (
    <InitRadioBottomPageWrapper>
      <div className="programWrapper">
        <WMRadioInitColumn
          title={"推荐节目"}
          infoUnit={recommendProgram}
          isNeedTitleSuffix={false}
        />
        <WMRadioInitColumn
          title={"节目排行榜"}
          infoUnit={rankingProgram}
          isRankingList={true}
          isNeedTitleSuffix={false}
        />
      </div>
      <WMRadioPreRecommend title="音乐推荐" infoUnit={preMusic} />
      <WMRadioPreRecommend title="生活" infoUnit={preLife} />
      <WMRadioPreRecommend title="情感" infoUnit={preEmotion} />
      <WMRadioPreRecommend title="创作翻唱" infoUnit={preCover} />
      <WMRadioPreRecommend title="知识" infoUnit={preKnowledge} />
    </InitRadioBottomPageWrapper>
  );
});
