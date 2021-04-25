import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './styles'

function Label({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>
}

Label.propTypes = {
  bold: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Label
