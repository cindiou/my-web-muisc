import React, { memo } from "react";

import { PerDisplayInNewAlbumWrapper } from "./style";
import { getSizeSongsCover } from "utils/data-format";

export default memo(function WMPerDisplayInNewAlbum(props) {
  const { info, width = 153, size = 130, bgp = -845 } = props;

  return (
    <PerDisplayInNewAlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeSongsCover(info.picUrl, size)} alt={info.name} />
        <a href="#/todo" className="cover image_cover" alt={info.name}>
          {info.name}
        </a>
        <i className="play sprite_icon"></i>
      </div>

      <div className="album-info">
        <p className="text-nowrap">
          <a href="#/todo" alt="" className="name">
            {info.name}
          </a>
        </p>
        <p className="text-nowrap">
          <a href="#/todo" alt="" className="artist">
            {info.artist.name}
          </a>
        </p>
      </div>
    </PerDisplayInNewAlbumWrapper>
  );
});
