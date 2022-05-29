import React, { useState, memo, useRef, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import WMSongsCategory from "../songs-category";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function WMSongsHeader() {
  // hooks
  const [showCategory, setShowCategory] = useState(false);
  const songsCategoryRef = useRef();
  const btnRef = useRef();
  const showValueRef = useRef();
  showValueRef.current = showCategory;

  // redux
  const { currentCategory = "全部" } = useSelector(
    (state) => ({
      currentCategory: state.getIn(["songs", "currentCategory"]),
    }),
    shallowEqual,
  );

  useEffect(() => {
    const handleOuterClick = (e) => {
      if (
        (btnRef.current && btnRef.current.contains(e.target)) ||
        (showValueRef.current &&
          songsCategoryRef.current &&
          !songsCategoryRef.current.contains(e.target))
      ) {
        setShowCategory((v) => !v);
      }
    };
    window.addEventListener("click", handleOuterClick, false);
    return () => {
      window.removeEventListener("click", handleOuterClick);
    };
  }, []);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" ref={btnRef}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory ? (
          <WMSongsCategory
            forwardedRef={songsCategoryRef}
            hideSelfHandler={setShowCategory}
          />
        ) : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  );
});
