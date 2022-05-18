import styled from "styled-components";

export const PerDisplayInNewAlbumWrapper = styled.div`
  width: ${(props) => props.width + "px"};

  .album-image {
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${(props) => props.size + "px"};
      height: ${(props) => props.size + "px"};
    }

    .play {
      display: none;
      position: absolute;
      bottom: 8px;
      right: 26px;

      width: 21px;
      height: 21px;
      &:hover {
        background-position: 0px -111px;
      }
    }

    &:hover {
      i {
        display: block;
        cursor: pointer;
        background-position: 0px -86px;
      }
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp + "px"};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props) => props.size + "px"};
    .name {
      color: #000;
    }

    .artist {
      color: #666;
    }
  }
`;
