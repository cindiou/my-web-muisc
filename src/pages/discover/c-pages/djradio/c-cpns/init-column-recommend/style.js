import styled from "styled-components";

export const InitColumnRecommendWrapper = styled.div`
  background-color: #f7f7f7;

  .initRecommend-list {
    width: 430px;
    padding: 10px 0;
    border: 1px solid #e2e2e2;
    border-width: 0 1px 1px 1px;

    min-height: 520px;

    .initRecommend-list-item {
      /* width: 390px; */
      height: 40px;

      display: flex;
      justify-content: space-between;
      position: relative;

      &:not(&:first-child) {
        margin-top: 20px;
      }

      &:hover {
        background-color: #ddd;
        .img .play {
          display: block;
          background-position: 0px 0px;
        }
      }

      .ranking-number {
        width: 45px;
        margin-right: -20px;

        display: flex;
        flex-direction: column;
        align-items: center;

        .active {
          color: #da4545;
        }
      }

      .img {
        margin-left: 20px;
        width: 40px;
        position: relative;

        .play {
          display: inline-block;
          text-indent: -9999px;
          width: 22px;
          height: 22px;
          display: none;
          background-color: transparent;

          position: absolute;
          left: 9px;
          top: 9px;
          cursor: pointer;
        }

        img {
          display: inline-block;
          vertical-align: middle;
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: ${(props) => {
          if (props.isRankingList) {
            return "200px";
          } else {
            return "254px";
          }
        }};

        font-size: 12px;
        /* margin-left: 10px; */
        h3 {
          color: #333;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }

        p {
          color: #999;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }

      .progress {
        /* width: 100px; */
        margin-left: -10px;
        margin-right: 20px;

        display: flex;
        align-items: center;
      }

      .category {
        display: inline-block;
        height: 18px;
        line-height: 18px;
        margin-right: 20px;
        margin-top: 10px;
        padding: 0 6px;

        border: 1px solid #999;
        color: #999;
        font-size: 12px;
        text-decoration: none;

        &:hover {
          color: #666;
          border-color: #666;
        }
      }
    }
  }
`;

export const PartOneWrapper = styled.div`
  i {
    display: inline-block;
  }
  .new {
    width: 16px;
    height: 17px;
    background-position: -67px -283px;
  }

  .up {
    background-position: -74px -304px;
    width: 6px;
    height: 6px;
  }
  .up-text {
    color: #ba2226;
  }

  .down {
    background-position: -74px -324px;
    width: 6px;
    height: 6px;
  }
  .down-text {
    color: #4abbee;
  }

  .origin-text {
    color: #999;
  }
`;
