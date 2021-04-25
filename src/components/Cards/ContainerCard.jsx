import React from 'react'
import PropTypes from 'prop-types'
import { WrapperContainerCard } from './styles'

function ContainerCard({ children }) {
  return <WrapperContainerCard>{children}</WrapperContainerCard>
}

ContainerCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ContainerCard
