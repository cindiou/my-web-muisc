import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSizeSongsCover } from "@/utils/data-format";

import WMThemeHeaderPlayer from "@/components/theme-header-player";
import { PlayerSongsWrapper } from "./style";
import { getSimiPlaylistAction } from "../../store/actionCreators";

export default memo(function WMPlayerSongs() {
  // redux hooks
  const { simiPlaylist = [], currentSong = {} } = useSelector(
    (state) => ({
      simiPlaylist: state.getIn(["player", "simiPlaylist"]),
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getSimiPlaylistAction(currentSong.id));
  }, [dispatch, currentSong]);

  return (
    <PlayerSongsWrapper>
      <WMThemeHeaderPlayer title="包含这首歌的歌单" />

      <div className="songs">
        {simiPlaylist.map((item, index) => {
          return (
            <div className="song-item" key={item.id}>
              <a className="image" href="#/todo">
                <img src={getSizeSongsCover(item.coverImgUrl, 50)} alt="" />
              </a>

              <div className="info text-nowrap">
                <a href="#/todo" className="name">
                  {item.name}
                </a>
                <div className="author">
                  by
                  <a href="#/todo" className="nickname">
                    {item.creator.nickname}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PlayerSongsWrapper>
  );
});
