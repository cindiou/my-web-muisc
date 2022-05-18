import React, { memo } from "react";

import { HotRankBarWrapper } from "./style";

export default memo(function HotRankBar(props) {
  const {
    width = 100,
    height = 8,
    showWidth,
    color = "#dedede",
    showColor = "#c5c5c5",
  } = props;

  return (
    <HotRankBarWrapper
      width={width}
      height={height}
      color={color}
      showWidth={showWidth}
      showColor={showColor}
    >
      <div className="show"></div>
    </HotRankBarWrapper>
  );
});
