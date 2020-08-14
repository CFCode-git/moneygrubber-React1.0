import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
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

const NoteSection: React.FC = () => {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const x = () => {
    if (refInput.current !== null) {
      console.log(refInput.current.value);
      setNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="请在这里输入备注"
               ref={refInput}
               defaultValue={note}
               onBlur={x}
        />
      </label>
    </Wrapper>
  );
};


export {NoteSection};
