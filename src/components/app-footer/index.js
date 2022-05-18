import React, { memo, Fragment } from "react";

import { footerImages, footerLinks } from "common/local-data.js";
import { FooterLeft, FooterRight, FooterWrapper } from "./style";

export default memo(function WMAppFooter() {
  return (
    <FooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft className="left">
          <div className="link">
            {footerLinks.map((item) => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <span className="line">&emsp;|&emsp;</span>
                </Fragment>
              );
            })}
          </div>

          <div className="copyright">
            <span>网易公司版权所有©1997-2021&emsp;</span>
            <span>
              杭州乐读科技有限公司运营：
              <a
                href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙网文[2021] 1186-054号
              </a>
            </span>
          </div>

          <div className="report">
            <span>违法和不良信息举报电话：0571-89853516&emsp;&emsp;</span>
            <span>
              举报邮箱：
              <a
                href="mailto:ncm5990@163.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inform-email"
              >
                ncm5990@163.com
              </a>
            </span>
          </div>
          <div className="info">
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>粤B2-20090191-18&ensp;</span>
              <span>工业和信息化部备案管理系统网站&ensp;</span>
            </a>

            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="logo"></span>
              <span className="police-text">浙公网安备 33010902002564号</span>
            </a>
          </div>
        </FooterLeft>

        <FooterRight className="right">
          {footerImages.map((item, index) => {
            return (
              <li className="item" key={item.link}>
                <a
                  className="link"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                </a>
                <span className="title">{item.title}</span>
              </li>
            );
          })}
        </FooterRight>
      </div>
    </FooterWrapper>
  );
});
