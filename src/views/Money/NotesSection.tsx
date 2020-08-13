import styled from 'styled-components';

const NotesSection = styled.section`
  background: #f5f5f5;
  padding:0 16px;
  font-size:14px;
  > label{
    display: flex;
    align-items:center;
    white-space:nowrap;
    >span{
      margin-right:16px;
    }
    >input{
      width:100%;
      display: block;
      height:72px;
      background:none;
      border:none;
    }
  }
`;


export {NotesSection}
