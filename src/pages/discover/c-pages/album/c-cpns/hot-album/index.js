import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Spin } from "antd";

import { getHotAlbumsAction } from "../../store/actionCreators";

import WMAlbumCover from "@/components/album-cover";
import WMThemHeaderNormal from "@/components/theme-header-normal";
import { HotAlbumWrapper } from "./style";

export default memo(function WMHotAlbum() {
  const { hotAlbums = [], isSpinning } = useSelector(
    (state) => ({
      hotAlbums: state.getIn(["album", "hotAlbums"]),
      isSpinning: state.getIn(["album", "isSpinning"]),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <WMThemHeaderNormal title="热门新碟" />
      <Spin spinning={isSpinning} delay={300}>
        <div className="album-list">
          {hotAlbums.slice(0, 10).map((item, index) => {
            return <WMAlbumCover key={item.id} info={item} />;
          })}
        </div>
      </Spin>
    </HotAlbumWrapper>
  );
});

// size={"130px"}
// width={"153px"}
// bgp={"-845px"}
