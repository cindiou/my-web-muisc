import styled from "styled-components";

export const FriendWrapper = styled.div`
  .content {
    background-color: #fff;
    min-height: 700px;

    .pic {
      position: relative;
      width: 807px;
      height: 484px;
      margin: 0 auto;
      background: url(${require("@/assets/img/friend_sprite.jpg").default}) 0
        104px no-repeat;

      .login {
        position: absolute;
        width: 160px;
        height: 45px;
        left: 534px;
        top: 365px;
        text-indent: -9999px;

        background: url(${require("@/assets/img/friend_sprite.jpg").default}) 0 -9999px
          no-repeat;

        &:hover {
          background-position: 1px -431px;
          /* border: 1px solid red; */
        }
      }
    }
  }
`;
