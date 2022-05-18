import styled from "styled-components";

export const CommentWrapper = styled.div`
  padding: 0 35px;
  .subTitle {
    font-size: 14px;
    font-weight: 700;
    margin-top: 40px;
    border-bottom: 1px solid #aaa;
  }
  .hotCommend {
    .hotCommend-item:first-of-child {
      border: none;
    }
  }

  .newComment {
    .newComment-item:first-of-child {
      border: none;
    }
  }
`;
