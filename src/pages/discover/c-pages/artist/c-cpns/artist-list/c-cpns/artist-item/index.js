import React, { memo } from "react";
import classNames from "classnames";

import { getSizeSongsCover } from "@/utils/data-format";

import { ItemWrapper } from "./style";

export default memo(function HYArtistItemV1(props) {
  const { info, index } = props;

  return (
    <ItemWrapper>
      {index < 10 && (
        <div className="image">
          <img src={getSizeSongsCover(info.img1v1Url, 130)} alt="" />
        </div>
      )}
      <div className={classNames("info", { differ: index >= 10 })}>
        <span className="name">{info.name}</span>
        {info.accountId && <i className="sprite_icon2 icon"></i>}
      </div>
    </ItemWrapper>
  );
});
