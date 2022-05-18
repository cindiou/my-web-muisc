import styled from "styled-components";

const track = require("assets/img/playbar_sprite.png").default;
const handle = require("@/assets/img/sprite_icon.png").default;
const buffer = require("@/assets/img/progress_bar.png").default;

export const PlaybarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  &.isUnLocked {
    transform: translateY(47px);
    transition: transform 0.5s 0.5s ease-in;
    &:hover {
      transform: translateY(0);
      transition: transform 250ms ease-out;
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    &:hover {
      background-position: -40px
        ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    }
  }

  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`;

export const PlayInfo = styled.div`
  display: flex;
  width: 613px; //610刚好
  align-items: center;

  .image {
    position: relative;
    width: 34px;
    height: 34px;

    border-radius: 5px;
    overflow: hidden;
    /* border: 1px solid black; */

    .cover-mask {
      position: absolute;
      top: 0px;
      left: 0px;

      display: block;
      width: 34px;
      height: 34px;
      background-position: 0 -80px;
    }
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 4px;
      left: 6px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      position: relative;
      top: -4px;

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`;

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 1px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .left {
    .repaint {
      background-position: 0 0;
      &:hover {
        background-position-y: -25px;
      }
    }

    .favor {
      background-position: -60px -502px;
      &:hover {
        background-position: -90px -502px;
      }
    }

    .share {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
  }

  .mid-divider {
    /* background-position: -147px -248px; */
    background-position: -136px -248px;
    padding: 0 13px;
  }

  .right {
    display: flex;
    align-items: center;
    /* width: 126px; */
    /* margin-right: -50px; */

    .volume {
      position: relative;

      background-position: ${(props) => {
        if (props.isMuted) {
          return "-104px -69px";
        } else {
          return "-2px -248px";
        }
      }};
      &:hover {
        background-position: ${(props) => {
          if (props.isMuted) {
            return "-126px -69px";
            // return "-104px -69px"
          } else {
            return "-31px -248px";
          }
        }};
      }
    }

    .loop {
      background-position: ${(props) => {
        switch (props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};

      &:hover {
        background-position: ${(props) => {
          switch (props.sequence) {
            case 1:
              return "-93px -248px";
            case 2:
              return "-93px -344px";
            default:
              return "-33px -344px";
          }
        }};
      }
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;

      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`;

export const ShowPlayBarWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 200;

  .adjust-lock {
    /* background-color: transparent; */
    width: 52px;
    height: 24px;
    background-position: 0 -380px;

    /* border: 1px solid red; */
    position: absolute;
    top: -15px;
    right: 15px;

    /* border-bottom: 1px solid red; */

    .lock {
      background-position: ${(props) => {
        if (props.isLocked) {
          return "-100px -380px";
        } else {
          return "-80px -380px";
        }
      }};
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;

      &:hover {
        background-position: ${(props) => {
          if (props.isLocked) {
            return "-100px -400px";
          } else {
            return "-80px -400px";
          }
        }};
      }
    }
  }
`;

export const VolumeBarWrapper = styled.div`
  display: ${(props) => {
    if (props.showVolumeBar) {
      return "block";
    } else {
      return "none";
    }
  }};
  position: absolute;
  top: -123px;
  left: 0;
  background-image: url(${track});
  background-position: 0 -503px;
  width: 32px;
  height: 113px;
  z-index: 10000; /* 防止被playerBar遮挡 */

  .ant-slider {
    position: absolute;
    bottom: 4px;
    /* margin-bottom:-5px; */
    height: 88px;

    .ant-slider-rail {
      background-color: transparent;
    }

    .ant-slider-track {
      background-image: url(${track});
      background-position: -40px -518px;
    }

    .ant-slider-handle {
      width: 18px;
      height: 20px;
      background: url(${handle}) no-repeat -40px -250px;
      border: none;
      cursor: pointer;
      &:hover {
        background-position: -40px -280px;
      }

      position: absolute;
      top: 0;
      left: 2px;
    }
  }
`;

export const LoadingProgressWrapper = styled.div`
  margin-right: 10px;
  margin-top: -2px;

  position: relative;
  .ant-slider {
    width: 473px;
    height: 9px;

    .ant-slider-rail {
      height: 9px;
      background: url(${require("@/assets/img/progress_bar.png").default}) right
        0;
    }

    .ant-slider-track {
      z-index: 10;
      height: 9px;
      background: url(${require("@/assets/img/progress_bar.png").default}) left -66px;
    }

    .ant-slider-handle {
      z-index: 10;
      width: 22px;
      height: 24px;
      border: none;
      margin-top: -7px;
      background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -250px;
      &:hover {
        background-position: 0 -280px;
      }
    }
  }
`;

export const BufferProgressWrapper = styled.div`
  height: 8px;
  border-radius: 4px;
  background: url(${buffer}) left -30px;

  width: ${(props) => (props.width * 473) / 100 + "px"};
  position: absolute;
  left: 5px;
  top: 14px;
`;
