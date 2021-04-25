import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import Home from './pages/Home'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

export default function App() {
  const theme = useSelector(state => state.theme)

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Header />
        </Switch>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
