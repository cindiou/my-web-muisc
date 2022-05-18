import styled from "styled-components";

export const RadioPreRecommendWrapper = styled.div`
  margin: 0 auto;
  width: 900px;
  margin-top: 30px;

  .radio-list {
    margin-top: 15px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .radio-list-item {
      width: 450px;

      display: flex;
      margin-bottom: 15px;
      padding-bottom: 15px;
      &:nth-of-type(-n + 2) {
        border-bottom: 1px solid #ddd;
      }

      .img {
        width: 120px;
        height: 120px;
      }

      .info {
        flex: 1;
        margin: 20px 0 0 20px;

        a {
          font-size: 18px;
          color: #333;
          font-weight: 700;
        }

        p {
          width: inherit;

          color: #999;
          font-size: 12px;
          margin-top: 25px;
        }
      }
    }
  }
`;
