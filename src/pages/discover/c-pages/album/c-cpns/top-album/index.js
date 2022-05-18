import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

// import Loadable from "react-loadable";
import { Spin } from "antd";

import { PER_PAGE_ALL_ALBUM_COUNT } from "../../store/constants";
import { getTopAlbumsAction } from "../../store/actionCreators";

import WMThemeHeaderNormal from "@/components/theme-header-normal";
import WMAlbumCover from "@/components/album-cover";
import WMPagination from "@/components/pagination";
import { TopAlbumWrapper } from "./style";

const WMTopAlbum = memo(function () {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    topAlbums = [],
    total,
    isSpinning,
  } = useSelector(
    (state) => ({
      topAlbums: state.getIn(["album", "topAlbums"]),
      total: state.getIn(["album", "topTotal"]),
      isSpinning: state.getIn(["album", "isSpinningInTopAlbum"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAlbumsAction(1));
  }, [dispatch]);

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getTopAlbumsAction(page));
  };

  return (
    <TopAlbumWrapper>
      <WMThemeHeaderNormal
        title="全部新碟"
        sub={["全部", "华语", "欧美", "韩国", "日本"]}
      />
      <Spin spinning={isSpinning} style={{ marginTop: 20 }}>
        <div className="album-list">
          {topAlbums.map((item, index) => {
            return <WMAlbumCover key={item.id} info={item} />;
          })}
        </div>
      </Spin>
      <WMPagination
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_ALL_ALBUM_COUNT}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  );
});

export default WMTopAlbum;

// size={"130px"}
// width={"153px"}
// bgp={"-845px"}
