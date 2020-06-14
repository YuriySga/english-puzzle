import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './style.scss';

class Game extends Component {
  
    render() {
      return (  
        <div className='game'>
            <h1>GAME</h1>
        </div>
      )
    }
}

export default Game