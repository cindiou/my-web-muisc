import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  padding: 40px;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;

  .inner {
    width: 900px;
    height: 296px;
    padding: 125px 0 0;

    text-align: center;
    i {
      display: inline-block;
      width: 270px;
      height: 112px;
      background-position: 0 -405px;
    }

    p {
      margin-top: 35px;
      font-size: 18px;
      color: #666;
    }
  }
`;
