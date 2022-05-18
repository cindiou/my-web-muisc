// import { combineReducers } from "redux";

import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "pages/player/store";
import { default as songsReducer } from "pages/discover/c-pages/songs/store/reducer.js";
import { default as albumReducer } from "pages/discover/c-pages/album/store/reducer.js";
import { default as artistReducer } from "pages/discover/c-pages/artist/store/reducer.js";
import { default as rankingReducer } from "pages/discover/c-pages/ranking/store/reducer.js";
import { default as radioReducer } from "pages/discover/c-pages/djradio/store/reducer.js";

const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  songs: songsReducer,
  album: albumReducer,
  artist: artistReducer,
  ranking: rankingReducer,
  djradio: radioReducer,
});

export default reducer;
