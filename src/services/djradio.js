import { request } from "./request";

export function getDjRadioCatelist() {
  return request({
    url: "/dj/catelist",
  });
}

export function getDjRadioRecommend(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type,
    },
  });
}

export function getDjRadios(cateId, limit = 30, offset) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset,
    },
  });
}

export function getPreRecommend(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type,
    },
  });
}

export function getRecommendProgram(limit = 10) {
  return request({
    url: "/program/recommend",
    params: {
      limit,
    },
  });
}

export function getRankingProgram(limit = 10) {
  return request({
    url: "/dj/program/toplist",
    params: {
      limit,
    },
  });
}
