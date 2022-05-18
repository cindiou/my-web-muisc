import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import WMTopRanking from "components/topRanking";
import WMThemeHeaderInRecommend from "components/rcm-theme-header";
import { RankingWrapper } from "./style";

import { getTopListAction } from "../../store/actionCreator";

export default memo(function WMRankingInRecommend() {
  const dispatch = useDispatch();
  const {
    newRanking = {},
    topRanking = {},
    originRanking = {},
  } = useSelector(
    (state) => ({
      newRanking: state.getIn(["recommend", "newRanking"]),
      topRanking: state.getIn(["recommend", "topRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getTopListAction(19723756));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(2884035));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <WMThemeHeaderInRecommend
        title={"榜单"}
        moreLink={"#/discover/ranking"}
      />
      <div className="tops">
        <WMTopRanking info={topRanking} key={"topRanking"} />
        <WMTopRanking info={newRanking} key={"newRanking"} />
        <WMTopRanking info={originRanking} key={"originRanking"} />
      </div>
    </RankingWrapper>
  );
});
