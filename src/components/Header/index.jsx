import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './styles'

function Header({ children }) {
  return <Wrapper>{children}</Wrapper>
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Header
