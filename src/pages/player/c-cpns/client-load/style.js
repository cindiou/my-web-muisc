import styled from "styled-components";

export const ClientLoadWrapper = styled.div`
  margin-top: 40px;

  .load-content {
    position: relative;
    height: 65px;
    margin-bottom: 10px;
    background-position: 0 -385px;
    /* border: 1px solid yellow; */

    .apple {
      display: block;
      width: 42px;
      height: 48px;
      text-indent: -9999px;

      position: absolute;
      left: 0;
      top: 7px;

      &:hover {
        background-position: 0 -472px;
      }
    }

    .window {
      display: block;
      width: 60px;
      height: 48px;
      text-indent: -9999px;

      position: absolute;
      left: 72px;
      top: 7px;
      &:hover {
        background-position: -72px -472px;
      }
    }

    .android {
      display: block;
      width: 42px;
      height: 48px;
      text-indent: -9999px;

      position: absolute;
      left: 158px;
      top: 7px;
      /* border: 1px solid red; */
      &:hover {
        background-position: -158px -472px;
      }
    }
  }

  p {
    color: #999999;
    font-size: 12px;
    margin: 20px 0 30px 0;
  }

  .additional {
    display: block;
    color: #333;
    font-size: 12px;
  }
`;
