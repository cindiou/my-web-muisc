import styled from "styled-components";

export const RecommendWrapper = styled.div`
  .radio-list {
    margin: 20px 0 40px;
    display: flex;
    justify-content: ${(props) => {
      if (props.adjustSpace) {
        return "space-between";
      } else {
        return "flex-start";
      }
    }};

    .radio-list-item {
      margin-right: ${(props) => {
        if (props.adjustSpace) {
          return 0;
        } else {
          return "37px";
        }
      }};
    }
  }
`;
