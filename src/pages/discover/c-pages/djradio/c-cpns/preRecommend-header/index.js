import React, { memo } from "react";
import { PreRecommendHeaderWrapper } from "./style";

export default memo(function PreRecommendHeader(props) {
  const { title, isNeedTitleSuffix = true } = props;

  return (
    <PreRecommendHeaderWrapper>
      <div className="title">
        <a href="#/todo">{title}</a>
        {isNeedTitleSuffix ? <span> • 电台</span> : null}
      </div>
      <a href="#/todo" alt="" className="more">
        <span>更多</span>
        <span>&gt;</span>
      </a>
    </PreRecommendHeaderWrapper>
  );
});
