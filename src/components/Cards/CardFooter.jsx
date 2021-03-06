import React from 'react'
import PropTypes from 'prop-types'
import { WrapperCardFooter } from './styles'

function Card({ children }) {
  return <WrapperCardFooter>{children}</WrapperCardFooter>
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Card
