import React, { memo } from "react";

import { getSizeSongsCover } from "@/utils/data-format";

import { CoverWrapper } from "./style";

export default memo(function WmRadioRankingCover(props) {
  const { radio } = props;

  const suffixImg = radio?.dj?.avatarDetail?.identityIconUrl;

  return (
    <CoverWrapper>
      <a href="#/todo">
        <img src={getSizeSongsCover(radio.picUrl, 120)} alt="" />
      </a>

      <div className="info">
        <h2 className="title">{radio.name}</h2>

        <div className="nickname sprite_icon2">
          <i className="sprite_icon2 left"></i>
          <span className="nickname text-nowrap">{radio.dj.nickname}</span>
          {suffixImg && <img src={suffixImg} alt="" className="suffix-img" />}
        </div>

        <div className="count">
          <span className="phase">共{radio.programCount}期</span>
          <span className="subscribe">订阅{radio.subCount}次</span>
        </div>
      </div>
    </CoverWrapper>
  );
});
