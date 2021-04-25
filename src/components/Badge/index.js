import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './styles'

function Badge({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>
}

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Badge
