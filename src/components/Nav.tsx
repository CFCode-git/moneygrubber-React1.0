import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import x from 'icons/money.svg';
console.log(x);

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li {
      width:33.33333%;
      text-align:center;
      padding:16px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <img src={x} alt=""/>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Link to="/statistics">Users</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;
