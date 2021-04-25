import styled from 'styled-components'

const sizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18
}

const Wrapper = styled.label`
  // here I could using a palette of colors and get via props
  background-color: #152c39;
  padding: 5px 15px;
  border-radius: 10px;
  color: #688b9e; // here I could using a palette of colors
  font-size: ${props => (props.size ? sizes[props.size] : sizes.sm)}px;
`

export default Wrapper
