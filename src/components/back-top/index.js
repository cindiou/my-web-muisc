import React, { memo } from "react";
import { BackTop } from "antd";
import styled from "styled-components";
import topImage from "assets/img/sprite.png";

const BackTopWrapper = styled.div`
  width: 49px;
  height: 44px;
  background-image: url(${topImage});
  background-repeat: no-repeat;
  background-position: -265px -47px;
  &:hover {
    background-position: -325px -47px;
  }
`;

const style = {
  right: 128,
  bottom: "158px",
};
export default memo(function WMBackTop() {
  return (
    <BackTop style={style}>
      <BackTopWrapper />
    </BackTop>
  );
});
