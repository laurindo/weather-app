import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import Home from './pages/Home'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Label from './components/Label'

function App({ theme }) {
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Header>
            <Label size="sm">Weather App</Label>
          </Header>
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

export default connect(state => ({ theme: state.theme }))(App)
