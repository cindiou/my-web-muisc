import styled from "styled-components";

export const PreRecommendHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c20c0c;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  color: #333;

  .title {
    font-size: 24px;

    a {
      display: inline-block;
      color: #333;
      padding-bottom: 5px;
    }
  }

  .more {
    margin-top: 15px;
    font-size: 12px;
    color: #666;
  }
`;
