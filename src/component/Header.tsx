import React from 'react';
import styled from '@emotion/styled'

const A = styled.header`
height: 32px;
background-color: white;
box-shadow: 10px;
text-align: right;
padding: 10px;
font-size: 21px;
box-shadow: 0 4px 4px -4px black;
`;

const Header: React.FunctionComponent = () => {

  return (
    <A>
      Click to Run
    </A>
  )
}

export default Header;
