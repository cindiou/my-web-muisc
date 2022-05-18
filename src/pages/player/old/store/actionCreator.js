import {
  CHANGE_SONG_DETAIL,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_MODE,
  CHANGE_SONG_LYRIC,
} from "./constants";
import { getSongDetail, getSongLyric } from "services/player";
import parseLyric from "utils/parseLyric";

function changeSongDetailAction(currentSong) {
  return {
    type: CHANGE_SONG_DETAIL,
    currentSong,
  };
}

function changePlayListAction(playList) {
  return {
    type: CHANGE_PLAY_LIST,
    playList,
  };
}

function changeCurrentSongIndexAction(currentSongIndex) {
  return {
    type: CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex,
  };
}

export function changePlayModeAction(playMode) {
  return {
    type: CHANGE_PLAY_MODE,
    playMode,
  };
}

export function changeSongLyricAction(lycList) {
  return {
    type: CHANGE_SONG_LYRIC,
    lycList,
  };
}

export function getSongOfSwitchAction(tag) {
  return (dispatch, getState) => {
    const playMode = getState().getIn(["player", "playMode"]);
    const playList = getState().getIn(["player", "playList"]);
    const currentSongIndex = getState().getIn(["player", "currentSongIndex"]);

    const len = playList.length;
    let nextIndex = 0;
    switch (true) {
      //手动切换时，2 循环播放与 0顺序播放 以及播放列表中只有一首歌并无差异
      case playMode === 1 && len !== 1:
        nextIndex = currentSongIndex;
        while (nextIndex === currentSongIndex) {
          nextIndex = (Math.random() * len) | 0;
        }
        break;
      default:
        nextIndex = (currentSongIndex + tag + len) % len;
    }

    dispatch(changeCurrentSongIndexAction(nextIndex));
    dispatch(changeSongDetailAction(playList[nextIndex]));

    //手动切换时也需要重新请求歌词；
    dispatch(getSongLyricAction(playList[nextIndex].id));
  };
}

export function getSongDetailAction(id) {
  return (dispatch, getState) => {
    //1.根据id确定歌曲是否存在于播放列表中
    let playList = getState().getIn(["player", "playList"]);

    const songIndex = playList.findIndex((song) => song.id === id);
    if (songIndex !== -1) {
      //播放列表已经存在，直接准备播放
      //先标记要播放的索引
      dispatch(changeCurrentSongIndexAction(songIndex));

      //准备播放
      dispatch(changeSongDetailAction(playList[songIndex]));

      //由于存储的是当前正在播放歌曲的歌词
      //意味着以前请求的歌曲歌词并没有保存，需要重新请求
      dispatch(getSongLyricAction(playList[songIndex].id));
    } else {
      //播放列表中不存在
      //先根据id获取该首歌曲
      getSongDetail(id)
        .then((res) => {
          const newSongForPlay = res && res.songs && res.songs[0];
          //歌曲没有获取到
          //这里应该根据歌曲ID首先确定该歌曲是否存在(能够播放)，是否登入或VIP才能播放；
          if (!newSongForPlay) return;

          //1.先添加到播放列表；由于redux-immutable使用的Map浅拷贝
          playList = [...playList];
          playList.push(newSongForPlay);
          dispatch(changePlayListAction(playList));

          //2.记录将要播放歌曲索引；
          dispatch(changeCurrentSongIndexAction(playList.length - 1));

          //3.在底部展示栏上展示当前歌曲信息，准备播放
          dispatch(changeSongDetailAction(newSongForPlay));

          //4.请求当前歌曲的歌词
          dispatch(getSongLyricAction(newSongForPlay.id));
        })
        .catch(console.error);
    }
  };
}

export const getSongLyricAction = (id) => {
  return (dispatch, getState) => {
    getSongLyric(id)
      .then((res) => {
        const lyric = res && res.lrc && res.lrc.lyric;
        if (!lyric) return;

        //当前播放歌曲的歌词；
        const lycList = parseLyric(lyric);
        dispatch(changeSongLyricAction(lycList));
      })
      .catch(console.error);
  };
};
