import styled, {
  keyframes,
  createGlobalStyle,
  ThemeProvider,
} from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  background-image: url(${require("assets/img/loading.png").default});
  background-position: 0 0;
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;
  transform-origin: 8px 8px;
  animation: ${rotate} 1s linear infinite;

  position: absolute;
  z-index: 99;
  left: ${(props) => props.left + "px"};
  top: ${(props) => props.top + "px"};
  display: ${(props) => {
    if (props.spinning) {
      return "block";
    } else {
      return "none";
    }
  }};
`;
