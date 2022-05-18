import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import WMRadioCategory from "./c-cpns/radio-category";
import WMRadioRecommend from "./c-cpns/radio-recommend";
import WMRadioRanking from "./c-cpns/radio-ranking";
import WMInitRadioBottomPage from "./c-cpns/init-radio-bottom";

import { DjRadioWrapper } from "./style";

export default memo(function WMDjradio() {
  const { currentId = 0 } = useSelector((state) => {
    return {
      currentId: state.getIn(["djradio", "currentId"]),
    };
  }, shallowEqual);

  return (
    <DjRadioWrapper className="wrap-v2">
      <WMRadioCategory />
      {currentId !== 0 ? (
        <div className="afterClickCategory">
          <WMRadioRecommend />
          <WMRadioRanking />
        </div>
      ) : (
        <WMInitRadioBottomPage />
      )}
    </DjRadioWrapper>
  );
});
