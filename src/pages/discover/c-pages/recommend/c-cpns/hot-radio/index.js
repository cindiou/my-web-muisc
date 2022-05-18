import React, { memo } from "react";

import { hotRadios } from "common/local-data";

import WMThemeHeaderSmall from "components/theme-header-small";
import { HotRadioWrapper } from "./style";

export default memo(function WMHotRadio() {
  return (
    <HotRadioWrapper>
      <WMThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href={`https://music.163.com${item.url}`} className="image">
                <img src={item.picUrl} alt={item.name} />
              </a>
              <div className="info">
                <p>
                  <a className="name" href={`https://music.163.com${item.url}`}>
                    {item.name}
                  </a>
                </p>
                <p className="position text-nowrap">{item.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
});
