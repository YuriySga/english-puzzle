import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.scss';

class Home extends Component {
  
    render() {
      return (
        <div className='home'>
            <h1>ENGLISH PUZZLE</h1>
            <p>Click on words, collect phrases. Words can be drug end drop. Select tooltips in the menu.</p>
            <button>Start</button>          
        </div>
      )
    }
}

export default Home