import styled from "styled-components";
export const InputCommentWrapper = styled.div`
  .header-comment {
    display: flex;
    border-bottom: 2px solid #c20c0c;

    h2 {
      font-size: 20px;
      color: #333;
    }
    span {
      margin: 9px 0 0 20px;
      color: #666;
      font-size: 12px;
    }
  }
  .content-input {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

    .left-input {
      .img {
        width: 50px;
        height: 50px;
        background-position: 0 0;
        background-size: cover;
      }
    }

    .right-input {
      flex: 1;
      margin-left: 15px;

      position: relative;
      .mask-triangle {
        position: absolute;
        top: 11px;
        left: -7px;

        width: 13px;
        height: 14px;
        /* border: 1px solid red; */
        transform: rotate(45deg);
        border-left: 1px solid #cfcfcf;
        border-bottom: 1px solid #cfcfcf;
        background-color: #fff;
        overflow: hidden;
      }

      .input {
        display: block;
        width: 100%;
        height: 60px;

        background-color: #fff;
        border: 1px solid #cfcfcf;

        padding: 5px 9px 6px;
        border-radius: 2px;
        resize: none;

        font-size: 12px;
        color: #333;
        font-family: Arial, Helvetica, sans-serif;
      }

      .bottom-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .emoji {
          span {
            display: inline-block;
            width: 18px;
            height: 18px;
            cursor: pointer;
          }

          .smile {
            background-position: -40px -490px;
            margin-right: 10px;
          }

          .at-comment {
            background-position: -60px -490px;
          }
        }

        .comment {
          .mark-comment {
            font-size: 12px;
            color: #999;
            margin-right: 10px;
          }
          .btn {
            width: 46px;
            height: 25px;
            border-radius: 5px;

            color: #fff;
            background-color: #3282ce;
            font-size: 12px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
