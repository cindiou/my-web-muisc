import React, { memo } from "react";

import { getSizeSongsCover } from "@/utils/data-format";

import { CoverWrapper } from "./style";

export default memo(function WMRadioRecommendCover(props) {
  const { info } = props;

  return (
    <CoverWrapper>
      <a href="#/todo">
        <img src={getSizeSongsCover(info.picUrl, 150)} alt="" />
      </a>
      <a href="#/todo" className="text-nowrap name">
        {info.name}
      </a>
      <p className="text-nowrap">{info.desc}</p>
    </CoverWrapper>
  );
});
