import React, { memo, lazy, Suspense } from "react";

import WMHotAlbum from "./c-cpns/hot-album";
import WMTopAlbum from "./c-cpns/top-album";
import { AlbumWrapper } from "./style";

// const WMTopAlbumLazy = lazy(() => import("./c-cpns/top-album"));

export default memo(function WMAlbum() {
  return (
    <AlbumWrapper className="wrap-v2">
      <WMHotAlbum />
      <WMTopAlbum />
    </AlbumWrapper>
  );
});
