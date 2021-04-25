import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './styles'

function Loading({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>
}

Loading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Loading
