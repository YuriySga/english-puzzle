import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPage } from '../../actions/PageActions';

import './style.scss';

class SignIn extends Component {

render() {
        const { errorMsg } = this.props.user;
        return ( 
          <div className='signIn'>
              <h1>Authenticated</h1>
              <h2>Login</h2>
              <p>Please complete this form to login.</p>
              <form onSubmit={this.handleCreateAccount}>
                <label>Email:</label>
                <input type='mail' name='inputUserMail' minLength='4' onChange={this.handleChangeUserMail}/>
                <label>Password:</label>
                <input type='text' name='inputUserPass'maxLength='20' minLength='8' onChange={this.handleChangeUserPass}/>
                <button type='submit'>Start</button>
              </form>
            <p>{ messageSignIn }</p>
          </div>
        )
    }
}