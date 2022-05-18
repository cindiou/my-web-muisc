import React, { memo } from "react";

import WMPlayerInfo from "./c-cpns/player-info";
import WMPlayerComment from "./c-cpns/player-comment";

import WMPlayerSongs from "./c-cpns/player-songs";
import WMPlayerRelevant from "./c-cpns/player-relevant";
import WMClientLoad from "./c-cpns/client-load";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function WMPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <WMPlayerInfo />
          <WMPlayerComment />
        </PlayerLeft>

        <PlayerRight>
          <WMPlayerSongs />
          <WMPlayerRelevant />
          <WMClientLoad />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
