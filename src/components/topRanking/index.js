import React, { memo } from "react";

import { useDispatch } from "react-redux";

import { getSongDetailAction } from "pages/player/store";

import { TopRankingWrapper } from "./style";
import { getSizeSongsCover } from "utils/data-format";

export default memo(function WMTopRanking(props) {
  const dispatch = useDispatch();

  const { info = {} } = props;
  const { tracks = [] } = info;

  function playMusic(item) {
    // console.log(item.id);
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeSongsCover(info.coverImgUrl, 80)} alt="" />
          <a href="#/todo" alt="" className="image_cover">
            ranking
          </a>
        </div>

        <div className="info">
          <a href="#/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02">播放</button>
            <button className="btn favor sprite_02">收藏</button>
          </div>
        </div>
      </div>

      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>

                <div className="operate">
                  <button
                    className="btn sprite_02 play"
                    onClick={(e) => playMusic(item)}
                  ></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="#/todo" target="_blank" rel="noopener noreferrer">
          查看更多&gt;
        </a>
      </div>
    </TopRankingWrapper>
  );
});
