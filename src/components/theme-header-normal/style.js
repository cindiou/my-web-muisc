import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;

  .title {
    font-size: 24px;
  }
  .right {
    margin-top: 10px;
    span {
      color: #666;
      /* border: 1px solid red; */
      &:first-of-type {
        margin-left: 15px;
      }
    }
    .divider {
      margin: 0 15px;
      color: #cad8eb;
    }
  }
`;
