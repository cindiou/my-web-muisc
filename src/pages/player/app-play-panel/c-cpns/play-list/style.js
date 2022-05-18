import styled from "styled-components";

export const PlayListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;

  .play-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 28px;
    line-height: 28px;
    padding: 0 8px 0 25px;
    color: #ccc;

    position: relative;

    &.active {
      color: #fff;
      background-color: #000;

      &::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require("@/assets/img/playlist_sprite.png").default}) -182px
          0;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .singer {
        width: 80px;
        /* border: 1px solid red; */
      }

      .duration {
        width: 45px;
      }

      .link {
        width: 14px;
        height: 16px;
        margin-left: 20px;
        background-position: -100px 0;
      }
    }
  }
`;
