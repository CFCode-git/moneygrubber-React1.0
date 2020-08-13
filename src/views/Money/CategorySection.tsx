import styled from 'styled-components';

const CategorySection = styled.section`
  font-size:24px;
  > ul {
    display: flex;
    background:#c4c4c4;
    > li {
      width:50%;
      text-align:center;
      padding:16px 0;
      position:relative;
      &.selected::after{
        content:'';
        display: block;
        height:3px;
        background:#333;
        position:absolute;
        bottom:0;
        left:0; /* 要写，否则在某些浏览器会有bug */
        width:100%; /* 把一个东西绝对定位后宽度会变成 0 */
      }
    }
  }
`;



export {CategorySection}
