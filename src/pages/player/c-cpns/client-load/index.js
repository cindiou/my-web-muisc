import React, { memo } from "react";
import { ClientLoadWrapper } from "./style";

import WMThemeHeaderPlayer from "@/components/theme-header-player";
export default memo(function WMClientLoad() {
  return (
    <ClientLoadWrapper>
      <WMThemeHeaderPlayer title={"网易云音乐多端下载"} />
      <div className="load-content global_sprite">
        <a href="#/todo" className="apple global_sprite" alt=""></a>
        <a href="#/todo" className="window global_sprite" alt=""></a>
        <a href="#/todo" className="android global_sprite" alt=""></a>
      </div>

      <p>同步歌单，随时畅听320k好音乐</p>
      <a href="#/todo" alt="" className="additional">
        补充或修改歌曲资料&gt;
      </a>
      <a href="#/todo" alt="" className="additional">
        用户wiki任务中心&gt;
      </a>
    </ClientLoadWrapper>
  );
});
