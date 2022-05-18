import React, { memo } from "react";

import PreRecommendHeader from "../preRecommend-header";
import { getSizeSongsCover } from "utils/data-format";

import { RadioPreRecommendWrapper } from "./style";

export default memo(function WMRadioPreRecommend(props) {
  const { title, infoUnit = [] } = props;

  return (
    <RadioPreRecommendWrapper>
      <PreRecommendHeader title={title} />

      <div className="radio-list">
        {infoUnit.slice(0, 4).map((item, index) => {
          return (
            <div className="radio-list-item">
              <div className="img">
                <img src={getSizeSongsCover(item.picUrl, 120)} alt="" />
              </div>
              <div className="info text-nowrap">
                <a href="#/todo" alt="">
                  {item.name}
                </a>
                <p className="text-nowrap">{item.rcmdtext}</p>
              </div>
            </div>
          );
        })}
      </div>
    </RadioPreRecommendWrapper>
  );
});
