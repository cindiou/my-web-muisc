import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSimiSongAction } from "../../store/actionCreators";

import WMThemeHeaderPlayer from "@/components/theme-header-player";
import { RelevantWrapper } from "./style";

export default memo(function WMRelevant() {
  const { simiSongs = [], currentSong = {} } = useSelector(
    (state) => ({
      simiSongs: state.getIn(["player", "simiSongs"]),
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimiSongAction(currentSong.id));
  }, [dispatch, currentSong]);

  return (
    <RelevantWrapper>
      <WMThemeHeaderPlayer title="相似歌曲" />

      <div className="songs">
        {simiSongs.map((item, index) => {
          return (
            <div className="song-item" key={item.id}>
              <div className="info">
                <div className="title">
                  <a href="#/todo">{item.name}</a>
                </div>

                <div className="artist">
                  <a href="#/todo">{item.artists[0].name}</a>
                </div>
              </div>

              <div className="operate">
                <button className="item sprite_icon3 play"></button>
                <button className="item sprite_icon3 add"></button>
              </div>
            </div>
          );
        })}
      </div>
    </RelevantWrapper>
  );
});
