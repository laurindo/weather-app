import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin-bottom: 18px;
`

const H2 = styled(H1)`
  margin-bottom: 16px;
`

const H3 = styled(H1)`
  margin-bottom: 14px;
`

const text = styled.p`
  font-family: 'Open Sans Condensed', sans-serif;
  margin-bottom: 12px;
`

export {
  H1,
  H2,
  H3,
  text
}