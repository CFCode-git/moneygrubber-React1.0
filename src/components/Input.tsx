import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
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
`;
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FunctionComponent<Props> = (props) => {
  const {label,children,...rest} = props;
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest} />
    </Label>
  );
};

export {Input};
