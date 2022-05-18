// import * as actionTypes from "./constants";
import {
  CHANGE_CURRENT_SONG,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_LIST,
  CHANGE_LYRICS,
  CHANGE_SIMI_PLAYLIST,
  CHANGE_SIMI_SONGS,
  CHANGE_CURRENT_LYRIC_INDEX,
  CHANGE_PLAY_SEQUENCE,
  CHANGE_SONG_COMMENT,
} from "./constants";

import {
  getSongDetail,
  getLyric,
  getSimiPlaylist,
  getSimiSong,
  getSongComment,
} from "@/services/player";
import { parseLyric } from "@/utils/parseLyric";

const changeCurrentSongAction = (song) => ({
  type: CHANGE_CURRENT_SONG,
  song,
});

const changeCurrentSongIndexAction = (index) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  index,
});

const changePlayListAction = (playList) => ({
  type: CHANGE_PLAY_LIST,
  playList: playList,
});

const changeLyricsAction = (lyrics) => ({
  type: CHANGE_LYRICS,
  lyrics,
});

const changeSimiPlaylistAction = (res) => ({
  type: CHANGE_SIMI_PLAYLIST,
  simiPlaylist: res?.playlists,
});

const changeSimiSongsAction = (res) => ({
  type: CHANGE_SIMI_SONGS,
  simiSongs: res?.songs,
});

export const changeCurrentLyricIndexAction = (index) => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  index,
});

export const changePlaySequenceAction = (currentSequence) => {
  if (currentSequence === 3) currentSequence = 0;
  return {
    type: CHANGE_PLAY_SEQUENCE,
    sequence: currentSequence,
  };
};

export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1.获取当前的index
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    const playSequence = getState().getIn(["player", "playSequence"]);
    const playList = getState().getIn(["player", "playList"]);

    // 2.判断当前播放列表
    // 0 顺序播放 1 随机播放 2 单曲循环
    switch (playSequence) {
      case 1:
        //该逻辑代码下，随机播放模式允许重复播发
        currentSongIndex = Math.floor(Math.random() * playList.length);
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex === playList.length) currentSongIndex = 0;
        if (currentSongIndex === -1) currentSongIndex = playList.length - 1;
    }

    // 3.处理修改数据
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(currentSong));

    // 获取当前的歌词,并且解析
    getLyric(currentSong.id).then((res) => {
      const lrcString = res?.lrc?.lyric;
      if (!lrcString) return;

      const lyrics = parseLyric(lrcString);
      dispatch(changeLyricsAction(lyrics));
    });
  };
};

function changeSongCommentAction(res) {
  return {
    type: CHANGE_SONG_COMMENT,
    songComment: res,
  };
}

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.判断是否歌曲存在playList中
    const playList = getState().getIn(["player", "playList"]);

    const songIndex = playList.findIndex((song) => song.id === ids);
    if (songIndex !== -1) {
      // 找到数据
      const currentSong = playList[songIndex];
      dispatch(changeCurrentSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(currentSong));
    } else {
      // 未找到数据
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        // 1.添加到playList中
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        // 2.改变当前index
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }

    // 获取当前的歌词,并且解析
    getLyric(ids).then((res) => {
      const lrcString = res?.lrc?.lyric;
      if (!lrcString) return;

      const lyrics = parseLyric(lrcString);
      dispatch(changeLyricsAction(lyrics));
    });
  };
};

export const getSimiPlaylistAction = (id) => {
  return (dispatch, getState) => {
    getSimiPlaylist(id).then((res) => {
      dispatch(changeSimiPlaylistAction(res));
    });
  };
};

export const getSimiSongAction = (id) => {
  return (dispatch, getState) => {
    getSimiSong(id).then((res) => {
      dispatch(changeSimiSongsAction(res));
    });
  };
};

export function getSongCommentAction(id, offset) {
  return (dispatch, getState) => {
    getSongComment(id, offset).then((res) => {
      dispatch(changeSongCommentAction(res));
    });
  };
}
