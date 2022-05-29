import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { formatMonthDay } from "@/utils/data-format";

import WMSongOperationBar from "@/components/song-operation-bar";
import { RankingHeaderWrapper } from "./style";

export default memo(function WMRankingHeader() {
  // redux
  const {
    playList: topInfo = {},
    topList = [],
    currentIndex = 0,
  } = useSelector(
    (state) => ({
      playList: state.getIn(["ranking", "playList"]),
      topList: state.getIn(["ranking", "topList"]),
      currentIndex: state.getIn(["ranking", "currentIndex"]),
    }),
    shallowEqual,
  );
  const preInfo = topList[currentIndex] || {};

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={preInfo.coverImgUrl || ""} alt="" />
        <span className="image_cover">封面</span>
      </div>

      <div className="info">
        <h2 className="title">{preInfo.name || " "}</h2>

        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>
            最近更新：
            {(preInfo.updateTime && formatMonthDay(preInfo.updateTime)) ||
              "**月**日"}
          </div>
          <div className="update-f">（{preInfo.updateFrequency}）</div>
        </div>

        <WMSongOperationBar
          favorTitle={`(${preInfo.subscribedCount || 0})`}
          shareTitle={`(${topInfo.shareCount || 0})`}
          downloadTitle="下载"
          commentTitle={`(${topInfo.commentCount || 0})`}
        />
      </div>
    </RankingHeaderWrapper>
  );
});
