import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../Home'
import Game from '../Game';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import './App.css';

class App extends Component {
  
  render() {
    const { user, pageName, setYearAction } = this.props

    return (
      <Router>
        <Redirect to={`/${pageName}`}/>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    pageName: store.page.pageName,

  }
}

export default connect(
  mapStateToProps,
)(App)