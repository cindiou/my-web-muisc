import React, { useEffect, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getRadioRecommend } from "../../store/actionCreators";

import WMThemeHeaderNormal from "@/components/theme-header-normal";
import WMRadioRecommendCover from "@/components/radio-recommend-cover";
import { RecommendWrapper } from "./style";

export default memo(function WMRadioRecommend() {
  // redux
  const { currentId, recommends = [] } = useSelector(
    (state) => ({
      currentId: state.getIn(["djradio", "currentId"]),
      recommends: state.getIn(["djradio", "recommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    if (currentId === 0) return;

    dispatch(getRadioRecommend(currentId));
  }, [dispatch, currentId]);

  const restRecommend = recommends.slice(0, 5);

  return (
    <RecommendWrapper adjustSpace={restRecommend.length === 5}>
      <WMThemeHeaderNormal title="优秀新电台" />

      <div className="radio-list">
        {restRecommend.map((item) => {
          return (
            <div className="radio-list-item">
              <WMRadioRecommendCover info={item} key={item.id} />
            </div>
          );
        })}
      </div>
    </RecommendWrapper>
  );
});
