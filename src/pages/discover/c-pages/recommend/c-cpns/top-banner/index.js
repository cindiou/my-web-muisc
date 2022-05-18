import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import { getTopBannersAction } from "../../store/actionCreator";
import { BannerWrapper, LeftBanner, RightBanner, ControlBanner } from "./style";
import { getBlurOfBgImage } from "utils/data-format";

export default memo(function WMTopBannerInRecommend(props) {
  //不引入react-immutable和immutable
  // topBanners: state.recommend.topBanners,

  //只引入immutable
  // topBanners: state.recommend.get("topBanners"),

  //同时引入immutable和react-immutable
  // topBanners: state.get("recommend").get("topBanners")
  //等价于下面

  const { topBanners = [] } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);

  //轮播图切换
  //横幅高斯模糊
  const carouselRef = useRef();
  const [curIndex, setCurIndex] = useState(0);
  const carouseChange = useCallback((from, to) => {
    setCurIndex(to);
  }, []);

  const bgImage = getBlurOfBgImage(topBanners, curIndex);

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="wrap-v2 banner">
        <LeftBanner>
          <Carousel
            ref={carouselRef}
            effect="fade"
            autoplay
            autoplaySpeed={3000}
            dots={{
              className: "dots",
              pauseOnFocus: true,
            }}
            beforeChange={carouseChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.imageUrl} alt={item.typeTitle} />
                  </a>
                </div>
              );
            })}
          </Carousel>
        </LeftBanner>

        <RightBanner>
          <a
            href="https://music.163.com/#/download"
            target="_blank"
            rel="noreferrer noopener"
          >
            下载客户端
          </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </RightBanner>

        <ControlBanner>
          <button
            className="btn left"
            onClick={(e) => {
              console.log("Hi!");
              carouselRef.current.prev();
            }}
          ></button>
          <button
            className="btn right"
            onClick={(e) => {
              console.log("qi!");
              carouselRef.current.next();
            }}
          ></button>
        </ControlBanner>
      </div>
    </BannerWrapper>
  );
});
