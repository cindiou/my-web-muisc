import styled from "styled-components";
export const UserCommentWrapper = styled.div`
  border-top: 1px dotted #cfcfcf;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  .nickname {
    color: #0c73c2;
    font-size: 12px;
  }
  .replay-text {
    color: #333;
    font-size: 12px;
  }

  .img {
    img {
      height: 50px;
      height: 50px;
    }
  }

  .content-user {
    flex: 1;
    margin-left: 10px;

    .replay {
      .logo-1 {
        display: inline-block;
        height: 12px;
        width: 12px;
        background-size: cover;

        margin-left: 5px;
        position: relative;
        top: 1px;
      }
      .logo-2 {
        display: inline-block;
        width: 35px;
        height: 12px;
        background-size: cover;

        margin-left: 5px;
        position: relative;
        top: 2px;
      }
    }

    .replied {
      .replied-item {
        margin-top: 10px;

        background-color: #f4f4f4;
        padding: 10px 20px;
        border: 1px solid #cfcfcf;
      }
    }
    .rest-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;

      .time {
        color: #666;
        font-size: 12px;
      }

      div {
        .divider {
          color: #ccc;
          margin: 0 10px;
        }

        .favour {
          display: inline-block;
          width: 15px;
          height: 14px;
          background-position: -150px 0;

          margin-right: 10px;
          position: relative;
          top: 2px;
        }
      }
    }
  }
`;
