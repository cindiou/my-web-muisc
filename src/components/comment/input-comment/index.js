import React, { memo } from "react";

import { InputCommentWrapper } from "./style";

export default memo(function ChildInputComment(props) {
  return (
    <InputCommentWrapper>
      <div className="header-comment">
        <h2>评论</h2>
        <span>共{props.commentCount}条评论</span>
      </div>

      <div className="content-input">
        <div className="left-input">
          <div className="default_avatar img"></div>
        </div>

        <div className="right-input">
          <textarea className="input" placeholder="评论"></textarea>
          <div className="mask-triangle"></div>

          <div className="bottom-input">
            <div className="emoji">
              <span className="global-icon smile"></span>
              <span className="global-icon at-comment"></span>
            </div>

            <div className="comment">
              <span className="mark-comment">140</span>
              <button className="btn">评论</button>
            </div>
          </div>
        </div>
      </div>
    </InputCommentWrapper>
  );
});
