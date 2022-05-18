import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { TopMenu, DiscoverWrapper } from "./style";
import { discoverMenu } from "common/local-data.js";

export default memo(function WMDiscover(props) {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink
                  to={item.link}
                  className={item.title === "歌单" ? "copy-right" : ""}
                >
                  {item.title}
                </NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  );
});
