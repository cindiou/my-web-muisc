import styled from "styled-components";

export const HotRankBarWrapper = styled.div`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  background-color: ${(props) => props.color};
  box-sizing: border-box;
  border-radius: ${(props) => props.height / 2 + "px"};

  border: 1px solid #ddd;
  box-shadow: inset 0 0 2px #aaa;

  .show {
    width: ${(props) => props.showWidth + "px"};
    height: inherit;
    border-radius: ${(props) => props.height / 2 + "px"};
    background-color: ${(props) => props.showColor};
    box-sizing: border-box;

    border: 1px solid #aaa;
    box-shadow: inset 0 0 2px #999;
  }
`;
