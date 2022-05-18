import {
  CHANGE_BANNER,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_TOP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_SETTLE_SINGER,
} from "./constant";
import { Map } from "immutable";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topRanking: {},
  newRanking: {},
  originRanking: {},

  settleSings: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      // return { ...state, topBanners: action.topBanners };
      return state.set("topBanners", action.topBanners);
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    case CHANGE_TOP_RANKING:
      return state.set("topRanking", action.topRanking);
    case CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    case CHANGE_SETTLE_SINGER:
      return state.set("settleSings", action.settleSings);
    default:
      return state;
  }
}
export default reducer;
