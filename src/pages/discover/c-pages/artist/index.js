import React, { memo } from "react";

import WMArtistCategory from "./c-cpns/artist-category";
import WMArtistList from "./c-cpns/artist-list";
import { WMArtistWrapper } from "./style";

export default memo(function WMArtist() {
  return (
    <WMArtistWrapper>
      <div className="content wrap-v2">
        <WMArtistCategory />
        <WMArtistList />
      </div>
    </WMArtistWrapper>
  );
});
