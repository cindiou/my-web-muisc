import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  margin: 0 -40px;
  /* 为什么这里需要-40px,因为里面的CategoryContent.width=900,而父组件设置了padding:40px */

  .arrow {
    width: 20px;
    height: 30px;
    background-image: url(${require("@/assets/img/radio_slide.png").default});
    cursor: pointer;

    &:hover {
      background-color: #ccc;
    }
  }

  .arrow-left {
    margin-left: 15px;
    background-position: 0 -30px;
  }

  .arrow-right {
    margin-right: 15px;
    background-position: -30px -30px;
  }
`;

export const CategoryContent = styled.div`
  flex: 1;
  width: 900px;
  /* border: 1px solid yellow; */

  .category-page {
    display: flex !important;
    flex-wrap: wrap;
    /* justify-content: space-between; */

    padding-bottom: 20px;

    .category-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 15px; /* (70+15*2)=100=>900/100=9 */

      width: 70px;
      height: 70px;

      text-align: center;

      border-radius: 5px;
      border: 2px solid transparent;
      font-size: 12px;
      cursor: pointer;

      :hover {
        background-color: #eee;
      }

      &.active {
        color: #c20c0c;
        border-color: #d35757;
        /* border: 2px solid #d35757; */

        .image {
          background-position: -48px 0;
        }
      }
    }
  }

  .dots {
    bottom: 5px;
    li {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;

      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }

    li.slick-active {
      width: 20px;
      button {
        background-color: #c20c0c;
      }
    }
  }
`;

export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${(props) => props.imgUrl});
`;
