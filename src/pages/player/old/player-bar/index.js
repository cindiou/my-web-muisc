import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { NavLink } from "react-router-dom";
import { Slider } from "antd";

import {
  getSongDetailAction,
  changePlayModeAction,
  getSongOfSwitchAction,
} from "../store";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import {
  getSizeSongsCover,
  formatMinuteSecond,
  getUrlOfPlaySong,
} from "utils/data-format";

export default memo(function WMPlayerBar() {
  const audioRef = useRef();

  const [playingTime, setPlayingTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMovingProgress, setIsMovingProgress] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  //redux hook
  const dispatch = useDispatch();
  const {
    currentSong = {},
    playMode = 0,
    playList = [],
  } = useSelector((state) => {
    return {
      currentSong: state.getIn(["player", "currentSong"]),
      playMode: state.getIn(["player", "playMode"]),
      playList: state.getIn(["player", "playList"]),
    };
  }, shallowEqual);

  //other hook
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getUrlOfPlaySong(currentSong.id);

    //由于chrome禁止audio媒体自动播放，一开始就play可能存在失败
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong]);

  //data deal
  const al = currentSong.al || {};
  const artist = currentSong?.ar?.[0].name;
  const duration = currentSong.dt || 0;

  //handle function
  const controlMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  //不能简单使用useCallbck包裹，必须指明依赖项，或者第二参数不传空数组
  //否则将影响滚动条的前进，与播放时间的动态设置
  /*   const timeUpdate = (e) => {
    if (!isMovingProgress) {
      setPlayingTime(() => e.target.currentTime * 1000);

      const val = duration ? (playingTime / duration) * 100 : 0;
      setProgress(val);
    }
  }; */

  const changePlayMode = () => {
    const nextPlayModeStatus = (playMode + 1) % 3;

    dispatch(changePlayModeAction(nextPlayModeStatus));
  };

  const changeSong = (tag) => {
    dispatch(getSongOfSwitchAction(tag));
  };

  //自动播放结束后，根据播放模式决定，下一首的播放
  //只有循环播放需要从头开始处理；
  const autoPlay = () => {
    switch (playMode) {
      case 2:
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        break;
      default:
        dispatch(getSongOfSwitchAction(+1));
    }
  };

  const timeUpdate = useCallback(
    (e) => {
      if (!isMovingProgress) {
        setPlayingTime(() => e.target.currentTime * 1000);

        const val = duration ? (playingTime / duration) * 100 : 0;
        setProgress(val);
      }
    },
    [playingTime, isMovingProgress, duration]
  );

  const sliderChange = useCallback(
    (value) => {
      const stepTime = ((value / 100) * duration) / 1000;

      setIsMovingProgress(true);
      setPlayingTime(stepTime * 1000);
      setProgress(value);
    },
    [duration]
  );
  const sliderAfterChange = useCallback(
    (value) => {
      const stepTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = stepTime;
      setPlayingTime(stepTime * 1000);
      setIsMovingProgress(false);

      if (!isPlaying) {
        controlMusic();
      }
    },
    [duration, isPlaying, controlMusic]
  );

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="wrap-v2 content">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar prev"
            onClick={(e) => changeSong(-1)}
          ></button>
          <button
            className="sprite_playbar play"
            onClick={(e) => controlMusic()}
          ></button>
          <button
            className="sprite_playbar next"
            onClick={(e) => changeSong(+1)}
          ></button>
        </Control>

        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player" alt="">
              <img src={al.picUrl && getSizeSongsCover(al.picUrl, 35)} alt="" />
            </NavLink>
          </div>

          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name || al.name}</span>
              <span className="singer-name">{artist}</span>
            </div>

            <div className="progress">
              <Slider
                defaultValue={0}
                tipFormatter={null}
                tooltipVisible={false}
                value={progress}
                onAfterChange={sliderAfterChange}
                onChange={sliderChange}
              />
              <div className="time">
                <span className="now-time">
                  {formatMinuteSecond(playingTime)}
                </span>
                <span className="divider">/</span>
                <span className="duration">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>

        <Operator playMode={playMode}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>

          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button
              className="sprite_playbar btn loop"
              onClick={(e) => changePlayMode()}
            ></button>
            <div className="up-board">
              <button className="sprite_playbar btn playlist"></button>
              <span className="songsCount">{playList.length}</span>
            </div>
          </div>
        </Operator>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={(e) => autoPlay()}
      />
    </PlaybarWrapper>
  );
});
