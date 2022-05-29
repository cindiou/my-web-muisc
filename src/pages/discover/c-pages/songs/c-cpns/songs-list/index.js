import React, { useState, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Spin } from "antd";

import { PER_PAGE_NUMBER } from "../../store/constants";
import { getSongList } from "../../store/actionCreators";

import WMSongsCover from "@/components/songs-cover";
import WMPagination from "@/components/pagination";
import { SongListWrapper } from "./style";

export default memo(function WMSongsList() {
  // hooks
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const { categorySongs = {}, isSpinning } = useSelector(
    (state) => ({
      categorySongs: state.getIn(["songs", "categorySongs"]),
      isSpinning: state.getIn(["songs", "isSpinning"]),
    }),
    shallowEqual,
  );
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;

  const dispatch = useDispatch();

  function onPageChange(page, pageSize) {
    setCurrentPage(page);
    dispatch(getSongList(page));
  }

  return (
    <SongListWrapper>
      <Spin spinning={isSpinning} delay={300} style={{ marginTop: 20 }}>
        <div className="songs-list">
          {songList.map((item, index) => {
            return (
              <WMSongsCover
                info={item}
                key={item.id}
                isHotRecommend={false}
                right="30px"
              />
            );
          })}
        </div>
      </Spin>
      <WMPagination
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange}
      />
    </SongListWrapper>
  );
});
