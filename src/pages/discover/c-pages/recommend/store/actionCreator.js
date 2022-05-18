import {
  CHANGE_BANNER,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_TOP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_SETTLE_SINGER,
} from "./constant";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getArtistList,
} from "services/recommend";

export const changeTopBannersAction = (res) => ({
  topBanners: res && res.banners,
  type: CHANGE_BANNER,
});
export const changeHotRecommendsAction = (res) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends: res && res.result,
  // hotRecommends: res.playlists,
});
export const changeNewAlbumsAction = (res) => {
  return {
    type: CHANGE_NEW_ALBUM,
    newAlbums: res && res.albums,
  };
};

export const changeNewRankingAction = (res) => {
  // console.log("NewRanking", res.playlist);
  return {
    type: CHANGE_NEW_RANKING,
    newRanking: res && res.playlist,
  };
};
export const changeTopRankingAction = (res) => {
  // console.log("TopRanking", res.playlist);
  return {
    type: CHANGE_TOP_RANKING,
    topRanking: res && res.playlist,
  };
};
export const changeOriginRankingAction = (res) => {
  // console.log("OriginRanking", res.playlist);
  return {
    type: CHANGE_ORIGIN_RANKING,
    originRanking: res && res.playlist,
  };
};

const changeSettleSingsAction = (res) => ({
  type: CHANGE_SETTLE_SINGER,
  settleSings: res && res.artists,
});

//===========Get Action============
export function getTopBannersAction() {
  return (dispatch, getState) => {
    getTopBanners().then((res) => {
      //将网络请求数据再次触发
      //使其保存到redux
      dispatch(changeTopBannersAction(res));
    });
  };
}

export function getHotRecommendsAction(limit) {
  return (dispatch, getState) => {
    getHotRecommends(limit)
      .then((res) => {
        dispatch(changeHotRecommendsAction(res));
      })
      .catch(console.error);
  };
}
export function getNewAlbumsAction(limit) {
  return (dispatch, getState) => {
    getNewAlbums(limit)
      .then((res) => {
        dispatch(changeNewAlbumsAction(res));
      })
      .catch(console.error);
  };
}

export function getTopListAction(idx) {
  return (dispatch, getState) => {
    getTopList(idx)
      .then((res) => {
        switch (idx) {
          case 3779629:
            dispatch(changeNewRankingAction(res));
            break;
          case 2884035:
            dispatch(changeOriginRankingAction(res));
            break;
          case 19723756:
            dispatch(changeTopRankingAction(res));
            break;
          default:
        }
      })
      .catch(console.error);
  };
}

export const getSettleSingers = () => {
  return (dispatch, getState) => {
    getArtistList(5, 5001).then((res) => {
      dispatch(changeSettleSingsAction(res));
    });
  };
};
