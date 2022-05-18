import { Map } from "immutable";

import {
  CHANGE_SONG_DETAIL,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_MODE,
  CHANGE_SONG_LYRIC,
} from "./constants";
import { defaultSongs } from "./defaultSongs";

const defaultState = Map({
  currentSong: {},
  playList: [...defaultSongs],
  currentSongIndex: 0,
  playMode: 0, //0 顺序;1 随机;2 循环播放;
  lycList: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_SONG_DETAIL:
      return state.set("currentSong", action.currentSong);
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);
    case CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case CHANGE_PLAY_MODE:
      return state.set("playMode", action.playMode);
    case CHANGE_SONG_LYRIC:
      return state.set("lycList", action.lycList);
    default:
      return state;
  }
}

export default reducer;
