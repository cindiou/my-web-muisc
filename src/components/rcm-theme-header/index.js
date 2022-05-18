import React, { memo } from "react";

import PropTypes from "prop-types";

import { HeaderWrapper } from "./style";
function WMThemeHeaderInRecommend(props) {
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{props.title}</h3>
        <div className="keyword">
          {props.keyword.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href={`#/discover/songs?cat=${item}`} alt={item}>
                  {item}
                </a>
                {index < props.keyword.length - 1 && (
                  <span className="divider">|</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href={props.moreLink || "#/todo"}>更多</a>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderWrapper>
  );
}

WMThemeHeaderInRecommend.propTypes = {
  title: PropTypes.string.isRequired,
  keyword: PropTypes.array,
};

WMThemeHeaderInRecommend.defaultProps = {
  keyword: [],
};

export default memo(WMThemeHeaderInRecommend);
