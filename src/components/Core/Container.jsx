import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Colors from './Colors';

const Main = styled.main`
  width: ${props => props.fluid ? '100%' : 'auto'};
  background-color: ${Colors.background.color}
`;

function Container({ children }) {
  return (
    <Main>
      {children}
    </Main>
  );
}

Contaner.propTypes = {
  children: propTypes.object
};

export default Container;