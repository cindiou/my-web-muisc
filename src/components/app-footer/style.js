import styled from "styled-components";

import footer_01 from "@/assets/img/sprite_footer01.png";
import footer_02 from "@/assets/img/sprite_footer02.png";

export const FooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;

  .link {
    a {
      color: #999;
    }

    .line {
      color: #999;
    }
  }

  .copyright {
    span {
    }
  }

  .report {
    .inform-email {
      color: #333;
    }
  }

  .info {
    .logo {
      display: inline-block;
      width: 14px;
      height: 14px;
      background-image: url(${require("assets/img/police.png").default});
      background-size: 14px 14px;
      background-position: 0 1px;
    }
  }
`;

export const FooterRight = styled.ul`
  display: flex;

  .item {
    /* border: 1px solid red; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-left: 40px;
    /* margin-right: 40px; */

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${footer_02});
      background-size: 110px 552px;
    }

    :nth-child(1) .link {
      background-position: -60px -456.5px;
    }
    :nth-child(2) .link {
      background-position: -61px -101px;
    }
    :nth-child(3) .link {
      background-position: 0 0;
    }
    :nth-child(4) .link {
      background-position: -60px -50px;
    }
    :nth-child(5) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${footer_01});
      background-size: 180px 139px;
    }

    :nth-child(1) .title {
      width: 70px; /* 文字过长 */
      background-position: 0 -108px;
    }
    :nth-child(2) .title {
      background-position: -1px -91px;
    }
    :nth-child(3) .title {
      background-position: 0 0;
    }

    :nth-child(4) .title {
      background-position: 0 -54px;
    }

    :nth-child(5) .title {
      background-position: -1px -72px;
    }
  }
`;
