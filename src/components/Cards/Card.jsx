import React from 'react'
import PropTypes from 'prop-types'
import { WrapperCard } from './styles'

function Card({ children, onClick }) {
  return <WrapperCard onClick={onClick}>{children}</WrapperCard>
}

Card.defaultProps = {
  onClick: () => {
    console.log('click')
  }
}

Card.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Card
