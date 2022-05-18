import React, { memo } from "react";

import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data.js";

export default memo(function WMAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        /* NavLink对于激活的样式会添加一个class属性 */
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            WebMusic
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <button className="musician-center">创作者中心</button>
          <a href="#/todo" className="login">
            登录
          </a>
        </HeaderRight>
      </div>

      <div className="divider"></div>
    </HeaderWrapper>
  );
});
