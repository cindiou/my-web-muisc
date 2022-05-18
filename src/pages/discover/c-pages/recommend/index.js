import React, { memo } from "react";

import WMTopBannerInRecommend from "./c-cpns/top-banner";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import WMHotRecommend from "./c-cpns/hot-recommend";
import WMNewAlbumInRecommend from "./c-cpns/new-album";
import WMRankingInRecommend from "./c-cpns/ranking";
import WMUserLogin from "./c-cpns/user-login";
import WMSettleSinger from "./c-cpns/settle-single";
import WMHotRadio from "./c-cpns/hot-radio";

export default memo(function WMRecommendInDiscover(props) {
  return (
    <RecommendWrapper>
      <WMTopBannerInRecommend />
      <Content className="wrap-v2">
        <RecommendLeft>
          <WMHotRecommend></WMHotRecommend>

          <WMNewAlbumInRecommend></WMNewAlbumInRecommend>
          <WMRankingInRecommend></WMRankingInRecommend>
        </RecommendLeft>

        <RecommendRight>
          <WMUserLogin />
          <WMSettleSinger />
          <WMHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});

/* function WMRecommendInDiscover(props) {
  const { getBanner, topBanner } = props;

  useEffect(() => {
    getBanner();
  }, [getBanner]);

  return (
    <div>
      <h2>WMRecommendInDiscover:{topBanner.length}</h2>
    </div>
  ); 
}

const mapStateToProps = (state) => {
  return {
    topBanner: state.recommend.topBanner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBanner() {
      dispatch(getTopBannerAction());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(WMRecommendInDiscover)); */
