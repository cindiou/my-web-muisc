import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { Spin } from "antd";

import { getSizeSongsCover, formatMinuteSecond } from "@/utils/data-format";

import WMThemeHeaderSong from "@/components/theme-header-song";
import { RankingListWrapper } from "./style";

export default memo(function WMRankingList() {
  const { playList = {}, isSpinning } = useSelector(
    (state) => ({
      playList: state.getIn(["ranking", "playList"]),
      isSpinning: state.getIn(["ranking", "isSpinning"]),
    }),
    shallowEqual,
  );
  const tracks = playList.tracks || [];

  return (
    <RankingListWrapper>
      <WMThemeHeaderSong />
      <Spin spinning={isSpinning} delay={300}>
        <div className="play-list">
          <table>
            <thead>
              <tr className="header">
                <th className="ranking"></th>
                <th className="title" align="left">
                  标题
                </th>
                <th className="duration" align="left">
                  时长
                </th>
                <th className="singer" align="left">
                  歌手
                </th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((item, index) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>

                    <td>
                      <div className="song-name">
                        {index < 3 ? (
                          <img
                            src={getSizeSongsCover(item.al.picUrl, 50)}
                            alt=""
                          />
                        ) : null}
                        <span className="play sprite_table"></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>

                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Spin>
    </RankingListWrapper>
  );
});
