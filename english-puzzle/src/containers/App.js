import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import Home from '../components/Home'

import './App.css';

class App extends Component {
  
  render() {
    //const { user, page } = this.props
    return (
      <div className=" container App">        
      {/*   <User name={user.name} />
        <Page photos={page.photos} year={page.year} /> */}
        <Home />
      </div>
    )
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
    page: store.page
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(App)