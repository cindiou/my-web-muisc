import React, { memo } from "react";

import { NotFoundWrapper } from "./style";

export default memo(function WMNotFound() {
  return (
    <NotFoundWrapper className="wrap-v2">
      <div className="inner">
        <i className="global-logo"></i>
        <p className="note s-fc3">很抱歉，你要查找的网页找不到</p>
      </div>
    </NotFoundWrapper>
  );
});
