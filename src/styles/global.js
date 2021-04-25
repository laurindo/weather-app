import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: white;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    max-width: 1024px;
    margin: 0 auto;
  }

  .moon {
    position: absolute;
    right: -45px;
    top: -52px;
  }
`
