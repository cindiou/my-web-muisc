import styled from "styled-components";
import copyRight from "assets/img/white-r-icon@3x.png";

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #c20c0c;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;

  position: relative;
  top: -4px;

  a.copy-right {
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background-image: url(${copyRight});
      background-repeat: no-repeat;
      background-size: 8px 8px;
      background-position: 0 0;

      position: absolute;
      top: 0;
      right: 5px;

      /* border: 1px solid yellow; */
    }
  }

  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;

      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      &:hover,
      &.active {
        text-decoration: none;
        background-color: #980909;
        border-radius: 10px;
      }
    }
  }
`;
