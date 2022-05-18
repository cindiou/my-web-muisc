import React, { useEffect, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Spin } from "antd";

import { getRadios } from "../../store/actionCreators";

import WMThemeHeaderRadio from "@/components/theme-header-radio";
import WMRadioRankingCover from "@/components/radio-ranking-cover";
import WMPagination from "@/components/pagination";
import { RankingWrapper } from "./style";
import { useState } from "react";

export default memo(function WMRadioRanking() {
  // state
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const {
    currentId,
    radios = [],
    isSpinning = true,
  } = useSelector(
    (state) => ({
      currentId: state.getIn(["djradio", "currentId"]),
      radios: state.getIn(["djradio", "radios"]),
      isSpinning: state.getIn(["djradio", "isSpinning"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    if (currentId === 0) return;

    dispatch(getRadios(currentId, 0));
  }, [dispatch, currentId]);

  // handle function
  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getRadios(currentId, page * 30));
  };

  return (
    <RankingWrapper>
      <WMThemeHeaderRadio title="电台排行榜" sub={["上升最快", "最热电台"]} />

      <Spin spinning={isSpinning} style={{ marginTop: 13 }}>
        <div className="ranking-list">
          {radios.map((item, index) => {
            return <WMRadioRankingCover key={item.id} radio={item} />;
          })}
        </div>
      </Spin>

      <WMPagination
        currentPage={currentPage}
        total={1000}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </RankingWrapper>
  );
});
