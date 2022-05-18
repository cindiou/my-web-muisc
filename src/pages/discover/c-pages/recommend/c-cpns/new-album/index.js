import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd";

import WMThemeHeaderInRecommend from "components/rcm-theme-header";
import WMPerDisplayInNewAlbum from "components/album-cover";

import { NewAlbumWrapper } from "./style";
import { getNewAlbumsAction } from "../../store/actionCreator";

export default memo(function WMNewAlbumInRecommend(props) {
  const dispatch = useDispatch();
  const { newAlbums = [] } = useSelector((state) => ({
    newAlbums: state.getIn(["recommend", "newAlbums"]),
  }));

  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch]);
  const carouselRef = useRef();

  return (
    <NewAlbumWrapper>
      <WMThemeHeaderInRecommend
        title={"新碟上架"}
        moreLink={"#/discover/album"}
      />

      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => carouselRef.current.prev()}
        ></button>

        <div className="album">
          <Carousel dots={false} ref={carouselRef}>
            {[0, 1].map((item, index) => {
              return (
                <div key={index} className="page">
                  {newAlbums
                    .slice(item * 5, item * 5 + 5)
                    .map((iten, index) => {
                      return (
                        <WMPerDisplayInNewAlbum
                          key={iten.id}
                          size={100}
                          width={118}
                          bgp={-570}
                          info={iten}
                        />
                      );
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>

        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => carouselRef.current.next()}
        ></button>
      </div>
    </NewAlbumWrapper>
  );
});
