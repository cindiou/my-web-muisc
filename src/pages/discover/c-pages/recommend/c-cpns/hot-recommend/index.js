import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HotRecommendWrapper } from "./style";
import WMThemeHeaderInRecommend from "components/rcm-theme-header";
import { getHotRecommendsAction } from "../../store/actionCreator";
import { HOT_RECOMMENDS_LIMIT } from "common/constants.js";
import MWSongsCover from "components/songs-cover";

export default memo(function WMHotRecommend() {
  //state数据

  //redux Hooks
  const dispatch = useDispatch();
  const { hotRecommends = [] } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  //react Hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMENDS_LIMIT));
  }, [dispatch]);

  //其他操作

  return (
    <HotRecommendWrapper>
      <WMThemeHeaderInRecommend
        title={"热门推荐"}
        keyword={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink={"#/discover/songs"}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          if (index < HOT_RECOMMENDS_LIMIT) {
            return (
              <MWSongsCover key={item.id} info={item} isHotRecommend={true} />
            );
          }
        })}
      </div>
    </HotRecommendWrapper>
  );
});
