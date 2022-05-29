import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { Spin } from "antd";

import WMThemeHeaderNormal from "@/components/theme-header-normal";
import WMAlphaList from "./c-cpns/alpha-list";
import WMArtistItem from "./c-cpns/artist-item";
import { ArtistListWrapper } from "./style";

export default memo(function WMArtistList() {
  // redux hooks
  const {
    currentType = {},
    artistList = [],
    isSpinning,
  } = useSelector(
    (state) => ({
      currentType: state.getIn(["artist", "currentType"]),
      artistList: state.getIn(["artist", "artistList"]),

      isSpinning: state.getIn(["artist", "isSpinning"]),
    }),
    shallowEqual,
  );

  return (
    <ArtistListWrapper>
      <WMThemeHeaderNormal title={currentType.name} />
      <WMAlphaList />

      <Spin spinning={isSpinning} delay={300}>
        <div className="artist-list covers-height">
          {artistList.map((item, index) => {
            if (index < 10) {
              return <WMArtistItem key={item.id} index={index} info={item} />;
            }
          })}
        </div>
      </Spin>
      <div className="artist-list down">
        {artistList.map((item, index) => {
          if (index >= 10) {
            return <WMArtistItem key={item.id} index={index} info={item} />;
          }
        })}
      </div>
    </ArtistListWrapper>
  );
});
