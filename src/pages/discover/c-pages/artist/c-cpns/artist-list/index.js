import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import WMThemeHeaderNormal from "@/components/theme-header-normal";
import WMAlphaList from "./c-cpns/alpha-list";
import WMArtistItem from "./c-cpns/artist-item";
import { ArtistListWrapper } from "./style";

export default memo(function WMArtistList() {
  // redux hooks
  const { currentType = {}, artistList = [] } = useSelector(
    (state) => ({
      currentType: state.getIn(["artist", "currentType"]),
      artistList: state.getIn(["artist", "artistList"]),
    }),
    shallowEqual
  );

  return (
    <ArtistListWrapper>
      <WMThemeHeaderNormal title={currentType.name} />
      <WMAlphaList />
      <div className="artist-list">
        {artistList.map((item, index) => {
          if (index < 10) {
            return <WMArtistItem key={item.id} index={index} info={item} />;
          }
        })}
      </div>
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
