import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './styles'

function Section({ children }) {
  return <Wrapper>{children}</Wrapper>
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Section
