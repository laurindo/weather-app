import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  color: ${props => props.theme.colors.text};
`

export default Wrapper
