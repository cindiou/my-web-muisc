import React from "react";
import { Redirect } from "react-router-dom";

import WMDiscover from "pages/discover";
import WMMine from "pages/mine";
import WMFriend from "pages/friend";
import WMNotFound from "pages/notFound";

import WMRecommendInDiscover from "pages/discover/c-pages/recommend";
import WMAlbumInDiscover from "pages/discover/c-pages/album";
import WMSongsInDiscover from "pages/discover/c-pages/songs";
import WMArtistInDiscover from "pages/discover/c-pages/artist";
import WMRankingInDiscover from "pages/discover/c-pages/ranking";
import WMDjradioInDiscover from "pages/discover/c-pages/djradio";
import WMPlayer from "pages/player";

const routes = [
  {
    path: "/",
    exact: true,
    render() {
      //render函数实现重定向
      return <Redirect to="/discover" />;
    },
  },
  {
    path: "/discover",
    component: WMDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render() {
          return <Redirect to="/discover/recommend" />;
        },
      },
      {
        path: "/discover/recommend",
        component: WMRecommendInDiscover,
      },
      {
        path: "/discover/album",
        component: WMAlbumInDiscover,
      },
      {
        path: "/discover/songs",
        component: WMSongsInDiscover,
      },
      {
        path: "/discover/artist",
        component: WMArtistInDiscover,
      },
      {
        path: "/discover/djradio",
        component: WMDjradioInDiscover,
      },
      {
        path: "/discover/ranking",
        component: WMRankingInDiscover,
      },
      {
        path: "/discover/player",
        component: WMPlayer,
      },
    ],
  },
  {
    path: "/mine",
    component: WMMine,
  },
  {
    path: "/friend",
    component: WMFriend,
  },
  {
    path: "",
    component: WMNotFound,
  },
];

export default routes;
