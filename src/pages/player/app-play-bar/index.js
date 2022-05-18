import React, { memo, useRef, useEffect, useState, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import classNames from "classnames";
import { message, Spin, Slider } from "antd";

import {
  getSizeSongsCover,
  getUrlOfPlaySong,
  formatMinuteSecond,
} from "@/utils/data-format";
import {
  getSongDetailAction,
  changeCurrentLyricIndexAction,
  changePlaySequenceAction,
  changePlaySongAction,
} from "../store/actionCreators";

import WMAppPlayPanel from "../app-play-panel";
import RotateLoadingCPN from "../c-cpns/loading";
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator,
  ShowPlayBarWrapper,
  VolumeBarWrapper,
  LoadingProgressWrapper,
  BufferProgressWrapper,
} from "./style";

export default memo(function WMAppPlaybar() {
  // props and state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isChanging, setIsChanging] = useState(false); //是否拖动滑动条
  const [showPanel, setShowPanel] = useState(false);
  //是否显示底部playBar
  const [isLocked, setIsLocked] = useState(true);
  // 是否显示音量控制滑块
  const [showVolumeBar, setShowVolumeBar] = useState(false);
  const [showSpin, setShowSpin] = useState(true);

  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [bufferProgress, setBufferProgress] = useState(0);

  // redux hooks
  const {
    currentSong,
    currentLyrics,
    currentLyricIndex,
    playList,
    playSequence,
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      currentLyrics: state.getIn(["player", "currentLyrics"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
      playList: state.getIn(["player", "playList"]),
      playSequence: state.getIn(["player", "playSequence"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getUrlOfPlaySong(currentSong.id);

    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });

    setDuration(currentSong.dt); //获取歌曲时长，单位毫秒
  }, [currentSong]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // 其他业务
  const play = useCallback(() => {
    setIsPlaying(!isPlaying);
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch((err) => {
          setIsPlaying(false);
        });
  }, [isPlaying]);

  const timeUpdate = (e) => {
    //默认audio返回的currentTime属性的单位为秒
    //而数据库返回的歌曲总时长单位为毫秒
    //antd中组件Progress的默认最大值为100

    const timeRanges = e.target.buffered;
    if (timeRanges.length !== 0) {
      //获取缓存数据中的最后一次时间戳
      //显示加载进度条
      let curBufferProgress =
        timeRanges.end(timeRanges.length - 1) / (duration / 1000);

      curBufferProgress = curBufferProgress.toFixed(4) * 100;
      if (bufferProgress !== curBufferProgress) {
        setBufferProgress(curBufferProgress);
        // console.log(curBufferProgress);
      }
    }

    const currentTime = e.target.currentTime;
    if (!isChanging) {
      //是否正处于拖动进度条的时候
      setCurrentTime(currentTime); //设置歌曲的当前已经播放的时长
      setProgress(((currentTime * 1000) / duration) * 100); //设置进度条的长度
      //这个setProgress在本轮设置了两次，突然跳转的原因
    }

    let lrcLength = currentLyrics.length;
    let i = 0;
    for (; i < lrcLength; i++) {
      const lrcTime = currentLyrics[i].time;
      if (lrcTime > currentTime * 1000) {
        break;
      }
    }
    const finalIndex = i - 1;
    if (finalIndex !== currentLyricIndex) {
      //当前播发时间戳所对应的歌词索引
      dispatch(changeCurrentLyricIndexAction(finalIndex));

      message.open({
        content: currentLyrics[finalIndex].content,
        key: "lyric", //表示所打开的消息框的ID，确保只是更改同一个消息框的内容而不是重复打开不相同的消息框；
        duration: 0,
        className: "lyric-message",
      });
    }
  };

  const timeEnded = () => {
    //切换到下一首前先重置缓存条
    setBufferProgress(0);

    // 0 顺序播放 1 随机播放 2 单曲循环
    if (playSequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0; //归零
      audioRef.current.play(); //重置播放
    } else {
      setShowSpin(true);
      dispatch(changePlaySongAction(1));
    }
  };

  const sliderChange = useCallback(
    (value) => {
      setProgress(value);
      // const time = ((value / 100.0) * duration) / 1000;
      const time = ((value / 100) * duration) / 1000;
      //在滑动期间播发器是禁止播放的
      setCurrentTime(time); //监听audio媒体的实际播放时间
      setIsChanging(true); //确定现在是在拖动过程，不允许audio播放器的播放时长自动增长
    },
    [duration] //只依赖duration(唯一输入)，也就是只有当duration发生改变后，useCallback才会返回新的，即同一首歌不会导致progress组件的重复渲染
  );

  const sliderAfterChange = useCallback(
    (value) => {
      const time = ((value / 100.0) * duration) / 1000;
      //确定播放器的播放位置，定位时间戳
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      setIsChanging(false); //确定滑动行为结束，播发器允许自动播发

      if (!isPlaying) {
        play(); //重置行为，没有播放时只要拖动结束，就开始自动播放
      }
    },
    [duration, isPlaying, play]
  );

  return (
    <PlaybarWrapper
      className={classNames("sprite_playbar", { isUnLocked: !isLocked })}
    >
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar btn prev"
            onClick={(e) => {
              setBufferProgress(0);
              setShowSpin(true);
              dispatch(changePlaySongAction(-1));
            }}
          ></button>
          <button
            className="sprite_playbar btn play"
            onClick={(e) => play()}
          ></button>
          <button
            className="sprite_playbar btn next"
            onClick={(e) => {
              setBufferProgress(0);
              setShowSpin(true);
              dispatch(changePlaySongAction(1));
            }}
          ></button>
        </Control>

        <PlayInfo>
          <div className="image">
            <img
              src={
                currentSong?.al?.picUrl &&
                getSizeSongsCover(currentSong.al.picUrl, 35)
              }
              alt=""
            />
            <NavLink
              to="/discover/player"
              className="sprite_playbar cover-mask"
            />
          </div>

          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>

            <div className="progress">
              <LoadingProgressWrapper>
                <Slider
                  value={progress}
                  onChange={sliderChange}
                  onAfterChange={sliderAfterChange}
                  defaultValue={0}
                  tipFormatter={null}
                  tooltipVisible={false}
                />
                <BufferProgressWrapper
                  width={bufferProgress}
                ></BufferProgressWrapper>
                <RotateLoadingCPN spinning={showSpin} left={-1} top={10} />
              </LoadingProgressWrapper>

              <div className="time">
                <span className="now-time">
                  {formatMinuteSecond(currentTime * 1000)}
                </span>
                <span className="divider">/</span>
                <span className="total-time">
                  {formatMinuteSecond(duration)}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>

        <Operator sequence={playSequence} isMuted={volume === 0}>
          <div className="left">
            <button className="global_repaint btn repaint"></button>
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>

          <div className="sprite_playbar mid-divider"></div>

          <div className="right">
            <button
              className="sprite_playbar btn volume"
              onClick={(e) => setShowVolumeBar(!showVolumeBar)}
            >
              <VolumeBarWrapper showVolumeBar={showVolumeBar}>
                <Slider
                  vertical={true}
                  tipFormatter={null}
                  tooltipVisible={false}
                  value={volume * 100}
                  onChange={(value) => {
                    setVolume(value / 100);
                  }}
                />
              </VolumeBarWrapper>
            </button>
            <button
              className="sprite_playbar btn loop"
              onClick={(e) =>
                dispatch(changePlaySequenceAction(playSequence + 1))
              }
            ></button>
            <button
              className="sprite_playbar btn playlist"
              onClick={(e) => setShowPanel(!showPanel)}
            >
              {playList.length}
            </button>
          </div>
        </Operator>
      </div>

      <ShowPlayBarWrapper isLocked={isLocked}>
        <div className="sprite_playbar adjust-lock">
          <button
            className="sprite_playbar lock"
            onClick={(e) => {
              setIsLocked(!isLocked);
            }}
          ></button>
        </div>
      </ShowPlayBarWrapper>

      {showPanel && <WMAppPlayPanel />}
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={timeEnded}
        onCanPlay={() => {
          setShowSpin(false);
        }}
      />
    </PlaybarWrapper>
  );
});
