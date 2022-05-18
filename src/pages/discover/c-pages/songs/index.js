import React, { useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  getCategory,
  getSongList,
  changeCurrentCategoryAction,
} from "./store/actionCreators";

import WMSongsHeader from "./c-cpns/songs-header";
import WMSongsList from "./c-cpns/songs-list";
import { SongsWrapper } from "./style";

export default memo(function WMSongsInDiscover() {
  // redux
  const dispatch = useDispatch();
  const location = useLocation();
  const query = location.search !== "" && new URLSearchParams(location.search);
  // console.log(query);

  const cat = (query && query.get("cat")) || "全部";
  // console.log(cat);

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat));
  }, [dispatch, cat]);

  // hooks
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSongList(0));
  }, [dispatch]);

  return (
    <SongsWrapper className="wrap-v2">
      <WMSongsHeader />
      <WMSongsList />
    </SongsWrapper>
  );
});
