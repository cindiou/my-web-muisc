import React, { useEffect, memo } from "react";
import classNames from "classnames";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getSizeSongsCover } from "@/utils/data-format";
import { changeCurrentIndex, getRanking } from "../../store/actionCreators";

import { TopRankingWrapper } from "./style";

export default memo(function WMTopRanking() {
  // redux
  const { topList = [], currentIndex } = useSelector(
    (state) => ({
      topList: state.getIn(["ranking", "topList"]),
      currentIndex: state.getIn(["ranking", "currentIndex"]),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    const id = topList[currentIndex] && topList[currentIndex].id;
    if (!id) return;
    dispatch(getRanking(id));
  }, [topList, dispatch, currentIndex]);

  // handle function
  // const handleItemClick = (index) => {
  //   dispatch(changeCurrentIndex(index));
  //   const id = topList[currentIndex].id;
  //   dispatch(getRanking(id));
  // };
  const handleItemClick = (index) => {
    dispatch(changeCurrentIndex(index));
  };

  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? "云音乐特色榜" : "全球媒体榜"}
            </div>
          );
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames("item", { active: index === currentIndex })}
              onClick={(e) => handleItemClick(index)}
            >
              <img src={getSizeSongsCover(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </TopRankingWrapper>
  );
});
