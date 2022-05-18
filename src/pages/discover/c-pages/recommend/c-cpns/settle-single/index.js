import React, { memo } from "react";

import { settleSingers } from "common/local-data";
import WMThemeHeaderSmall from "@/components/theme-header-small";
import { SetterSingerWrapper } from "./style";

export default memo(function WMSettleSinger() {
  return (
    <SetterSingerWrapper>
      <WMThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {settleSingers.map((item, index) => {
          return (
            <a href="#/todo" key={item.alias} className="item">
              <img src={item.imgUrl} alt="" />
              <div className="info">
                <div className="title">{item.alias}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a
          href="https://music.163.com/st/musician"
          target="_blank"
          rel="noreferrer noopenerer"
        >
          申请成为网易音乐人
        </a>
      </div>
    </SetterSingerWrapper>
  );
});

/* import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSettleSingers } from "../../store/actionCreator";
import { getSizeSongsCover } from "@/utils/data-format";

import WMThemeHeaderSmall from "@/components/theme-header-small";
import { SetterSingerWrapper } from "./style";

export default memo(function WMSettleSinger() {
  // redux
  const dispatch = useDispatch();
  const { settleSings = {} } = useSelector(
    (state) => ({
      settleSings: state.getIn(["recommend", "settleSings"]),
    }),
    shallowEqual
  );

  // hooks
  useEffect(() => {
    dispatch(getSettleSingers());
  }, [dispatch]);

  return (
    <SetterSingerWrapper>
      <HYThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {settleSings.map((item, index) => {
          return (
            <a href="#/singer" key={item.id} className="item">
              <img src={getSizeSongsCover(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="title">{item.alias.join("") || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a
          href="https://music.163.com/st/musician"
          target="_blank"
          rel="noreferrer noopenerer"
        >
          申请成为网易音乐人
        </a>
      </div>
    </SetterSingerWrapper>
  );
});
 */
