import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  hotAlbums: [],
  topAlbums: [],
  topTotal: 0,
  isSpinningInTopAlbum: true,
  isSpinning: true,
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums", action.hotAlbums);
    case actionTypes.CHANGE_TOP_ALBUMS:
      return state.set("topAlbums", action.topAlbums);
    case actionTypes.CHANGE_TOP_TOTAL:
      return state.set("topTotal", action.total);
    case "album/is_spinning_in_top_album":
      return state.set("isSpinningInTopAlbum", action.isSpinningInTopAlbum);
    case "album/is_spinning":
      return state.set("isSpinning", action.isSpinning);
    default:
      return state;
  }
}
