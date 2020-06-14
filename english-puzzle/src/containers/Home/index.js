import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setYear, setPage } from '../../actions/PageActions'

import './style.scss';

class Home extends Component {
  onBtnClick = this.onBtnClick.bind(this)

  handleSubmit(e) {
    e.preventDefault()
    const year = +e.currentTarget.innerText
  }

  onBtnClick() {
    const {setYearAction, setPageAction} = this.props;
    const { isAuthorization } = this.props.user;
    if (isAuthorization) {
      setPageAction('game')
    }
    else {
      setPageAction('auth')
    }
  }

    render() {
      const { user, page, setYearAction } = this.props
      return (  
        <div className='home'>
            <h1>ENGLISH PUZZLE</h1>
            <p>Click on words, collect phrases. Words can be drug end drop. Select tooltips in the menu.</p>
            <button onClick={this.onBtnClick}>Start</button>
        </div>
      )
    }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year)),
    setPageAction: nextUrl => dispatch(setPage(nextUrl))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home) 

