import styled from "styled-components";

export const BannerWrapper = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: 6000px 6000px;
  /* backdrop-filter: blur(1000px); */
  /* filter: blur(10px); */

  .banner {
    height: 285px;
    /* background-color: red; */
    background-color: transparent;

    display: flex;
    position: relative;
  }
`;

export const LeftBanner = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  /* 
  .slick-dots {
    li {
      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: white;

        &:hover {
          background-color: red;
        }
      }
    }

    li.slick-active {
      button {
        background-color: red;
      }
    }
  } */

  .dots {
    bottom: 5px;
    li {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;

      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }

    li.slick-active {
      width: 20px;
      button {
        background-color: #c20c0c;
      }
    }
  }
`;

export const RightBanner = styled.div`
  width: 254px;
  height: 285px;
  overflow: hidden;

  background: url(${require("assets/img/download_01.jpg").default}) no-repeat 0
    0;

  a {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
    text-decoration: none;

    background-image: url(${require("assets/img/download_02.png").default});
    background-repeat: no-repeat;
    background-position: 0 -9999px;

    &:hover {
      background-position: 0px -290px;
    }
  }

  p {
    position: absolute;
    bottom: 0;
    width: 254px;
    background-color: transparent;
    color: #8d8d8d;
    margin: 10px 0;
    text-align: center;
  }
`;

export const ControlBanner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  /* border: 1px solid black; */

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    /* border: 1px solid red; */
    transform: translateY(-50%);

    background-image: url(${require("@/assets/img/banner_sprite.png").default});
    background-color: transparent;

    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
