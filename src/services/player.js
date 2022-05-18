import { request } from "./request";

export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
}

export function getSimiPlaylist(id) {
  const timestamp = Date.now();
  return request({
    url: "/simi/playlist",
    params: {
      id,
      timestamp,
    },
  });
}

export function getSimiSong(id) {
  const timestamp = Date.now();
  return request({
    url: "/simi/song",
    params: {
      id,
      timestamp,
    },
  });
}

export function getSongComment(id, offset, limit = 20) {
  return request({
    url: "/comment/music",
    params: {
      id,
      offset,
    },
  });
}
