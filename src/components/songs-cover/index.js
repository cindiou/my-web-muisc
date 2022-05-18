import React, { memo } from "react";

import { SongsCoverWrapper } from "./style";
import { getFormaPlayCount, getSizeSongsCover } from "utils/data-format";

export default memo(function WMSongsCover(props) {
  const { info, isHotRecommend = true } = props;
  const url = isHotRecommend ? info.picUrl : info.coverImgUrl;

  return (
    <SongsCoverWrapper right={props.right}>
      <div className="cover-top">
        <img src={getSizeSongsCover(url, 140)} alt={info.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon  erji"></i>
              {getFormaPlayCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>

      <div className={"cover-bottom" + (isHotRecommend ? "" : " text-nowrap")}>
        <a
          href={`https://music.163.com/#/playlist?id=${info.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.name}
        </a>
      </div>
      {isHotRecommend || (
        <div className="cover-source">
          <span>by&ensp;</span>
          <a
            href={`https://music.163.com/#/user/home?id=${info.userId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-nowrap"
            alt={info.creator.nickname}
          >
            {info.creator.nickname}
          </a>
          {info.creator && info.creator.avatarDetail && (
            <img src={info.creator.avatarDetail.identityIconUrl} alt="" />
          )}
        </div>
      )}
    </SongsCoverWrapper>
  );
});
