import { request } from "./request";

export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    // url: "/top/playlist",
    params: {
      limit,
    },
  });
}

export function getNewAlbums(limit) {
  return request({
    url: "/album/newest",
    params: {
      limit,
    },
  });
  //老版 url: "/top/album",
}

export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit,
    },
  });
}
