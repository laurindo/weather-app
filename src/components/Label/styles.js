import styled from 'styled-components'

const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
}

const Wrapper = styled.section`
  font-weight: ${props => (props.bold ? 700 : 'normal')};
  margin: 10px 5px;
  font-size: ${props => `${sizes[props.size]}em`};
`

export default Wrapper
