import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height:100vh;
  display: flex;
  flex-direction:column;
`;

const Main = styled.div`
  flex-grow:1;
`;

type Props = {
  children:any
}

const Layout = (props:Props) => {
  return(
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
};

export default Layout;
