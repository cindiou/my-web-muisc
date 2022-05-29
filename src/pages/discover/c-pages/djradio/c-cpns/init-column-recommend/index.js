import React, { memo } from "react";

import classNames from "classnames";

import { getSizeSongsCover } from "utils/data-format";

import HotRankBar from "./hotRankBar";
import PreRecommendHeader from "../preRecommend-header";
import { InitColumnRecommendWrapper, PartOneWrapper } from "./style";

export default memo(function WMInitColumnRecommendInRadio(props) {
  const {
    title,
    infoUnit = [],
    isRankingList = false,
    isNeedTitleSuffix = false,
  } = props;

  function getChangingRanking(lastRank, rank) {
    if (lastRank === undefined || rank === undefined) return undefined;

    if (lastRank < 0) {
      //new
      return <i className="global-icon new"></i>;
    } else if (lastRank === rank) {
      //-0
      return <span className="origin-text">-0</span>;
    } else {
      if (lastRank - rank > 0) {
        //up
        return (
          <div>
            <i className="global-icon up"></i>
            <span className="up-text">{lastRank - rank}</span>
          </div>
        );
      } else {
        //down
        return (
          <div>
            <i className="global-icon down"></i>
            <span className="down-text">{rank - lastRank}</span>
          </div>
        );
      }
    }
  }

  return (
    <InitColumnRecommendWrapper isRankingList={isRankingList}>
      <PreRecommendHeader title={title} isNeedTitleSuffix={isNeedTitleSuffix} />

      <div className="initRecommend-list">
        {infoUnit.slice(0, 9).map((item, index) => {
          // console.log("item=", item, item.id);
          return (
            <div className="initRecommend-list-item" key={item.rank}>
              {isRankingList ? (
                <div className="ranking-number">
                  <p className={classNames({ active: index < 3 })}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <PartOneWrapper>
                    {getChangingRanking(item?.lastRank, item?.rank)}
                  </PartOneWrapper>
                </div>
              ) : null}

              <div className="img">
                <a href="#/todo" alt="">
                  <img
                    src={getSizeSongsCover(
                      isRankingList
                        ? item?.program?.radio?.picUrl
                        : item?.coverUrl,
                      40,
                    )}
                    alt=""
                  ></img>
                  <button className="icon-play play">播放</button>
                </a>
              </div>

              <div className="info">
                <h3 className="text-nowrap">
                  {isRankingList
                    ? item?.program?.mainSong?.name
                    : item?.mainSong?.name}
                </h3>
                <p className="text-nowrap">
                  {isRankingList ? item?.program?.radio?.name : item?.dj?.brand}
                </p>
              </div>

              {isRankingList ? (
                <div className="progress">
                  <HotRankBar showWidth={40 + 50 * Math.random()} />
                </div>
              ) : (
                <a className="category" href="#/todo" alt="">
                  {item?.radio?.category}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </InitColumnRecommendWrapper>
  );
});
