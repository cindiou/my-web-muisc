import styled from "styled-components";

export const ArtistListWrapper = styled.div`
  flex: 1;
  padding: 40px;

  .artist-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 5px 0 40px;

    &.down {
      border-top: 1px dotted #666;
      padding-top: 12px;
    }
    &:not(.down) {
      padding-bottom: 30px;
    }
  }
`;
