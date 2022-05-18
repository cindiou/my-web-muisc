import React, { memo } from "react";

import classNames from "classnames";

import { formatDate } from "utils/data-format";

import { UserCommentWrapper } from "./style";
export default memo(function WMUserComment(props) {
  const { info } = props;

  const logo1 = info?.user?.avatarDetail?.identityIconUrl;
  let logo2 = info?.user?.vipRights?.redVipLevel;
  logo2 = logo2 && logo2 > 6 ? 6 : logo2;

  return (
    <UserCommentWrapper>
      <div className="img">
        <img src={info?.user?.avatarUrl} alt="" />
      </div>

      <div className="content-user">
        <div className="replay">
          <p>
            <a href="#/todo" alt="" className="nickname">
              {info?.user?.nickname}
            </a>
            <i
              className={classNames({
                "logo-1": Boolean(logo1),
                little_logo: Boolean(logo1),
              })}
            ></i>
            <i
              className={classNames({
                "logo-2": Boolean(logo2),
                ["cvip_" + logo2]: Boolean(logo2),
              })}
            ></i>
            <span> ：</span>
            <span className="replay-text">{info.content}</span>
          </p>
        </div>

        <div className="replied">
          {info.beReplied &&
            info.beReplied.map((item, index) => {
              return (
                <div className="replied-item">
                  <span className="link nickname">{item.user.nickname}</span>
                  <span> ：</span>
                  <span className="replay-text">{item.content}</span>
                </div>
              );
            })}
        </div>

        <div className="rest-info">
          <span className="time">
            {formatDate(info.time, "MM月dd日 hh:mm")}
          </span>

          <div>
            <a href="#/todo" alt="">
              <i className="sprite_icon3 favour"></i>({info.likedCount})
            </a>
            <span className="divider">|</span>
            <a src="#/todo" alt="">
              回复
            </a>
          </div>
        </div>
      </div>
    </UserCommentWrapper>
  );
});
