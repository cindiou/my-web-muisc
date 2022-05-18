import { request } from "./request";

export function getHotAlbums() {
  return request({
    url: "/album/newest",
  });
}

export function getTopAlbums(offset = 0, area = "all", limit = 35) {
  return request({
    url: "/album/new",
    params: {
      limit,
      offset,
      area,
    },
  });
}
