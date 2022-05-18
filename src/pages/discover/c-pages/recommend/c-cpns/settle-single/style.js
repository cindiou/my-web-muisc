import styled from "styled-components";

export const SetterSingerWrapper = styled.div`
  padding: 20px;

  .singer-list {
    .item {
      display: block;
      border: 1px solid #e9e9e9;

      display: flex;
      height: 62px;
      margin-top: 14px;
      background-color: #fafafa;
      text-decoration: none;

      :hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        margin: 8px 0 0 10px;
        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }

        .name {
          margin-top: 5px;
        }
      }
    }
  }

  .apply-for {
    margin-top: 12px;
    a {
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;

      color: #333;
      font-weight: 700;
      text-decoration: none;
      border-radius: 4px;

      background-color: linear-gradient(to top, #f1f1f1 0%, #fefefe 100%);
      border: 1px solid #c3c3c3;
      box-shadow: 0 1px 3px 0 #cdcdcd;

      &:hover {
        background-color: #fafafa;
      }
    }
  }
`;
