import React, { memo } from "react";

import WMPlayHeader from "./c-cpns/play-header";
import WMPlayList from "./c-cpns/play-list";
import WMLyricPanel from "./c-cpns/lyric-panel";
import { PanelWrapper } from "./style";

// import { getBlurImage } from "utils/data-format";

export default memo(function WMAppPlayPanel(props) {
  // const { imgUrl } = props;

  return (
    <PanelWrapper>
      <WMPlayHeader />

      <div className="main">
        <img
          className="image"
          src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg"
          alt=""
        />
        <WMPlayList />
        <WMLyricPanel />
      </div>
    </PanelWrapper>
  );
});
