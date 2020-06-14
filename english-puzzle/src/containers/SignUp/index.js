import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPage } from '../../actions/PageActions';
import { signUp } from '../../actions/UserActions';

import './style.scss';

/* registration */
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authorizationFormData: {        
        UserMailValueInput: null,
        UserPassValueInput: null,
      },
    };
  }

  handleChangeUserMail = (e) => {
    this.setState({ UserMailValueInput: e.target.value });    
  }

  handleChangeUserPass = (e) => {
    this.setState({ UserPassValueInput: e.target.value }); 
  }

  handleCreateAccount = (event) => {
    event.preventDefault();
    const { signUpAction } = this.props;
    const { UserMailValueInput, UserPassValueInput } = this.state;
    signUpAction({
      email: UserMailValueInput,
      password: UserPassValueInput
    });
  }  

    render() {
        const { messageSignUp } = this.props.user;
        return ( 
          <div className='signUp'>
              <h1>authorization</h1>
              <h2>Create an account</h2>
              <p>Please complete this form to create your personal account.</p>
              <p>Пароль должен содержать не менее 8 символов, как минимум одну прописную букву, одну заглавную букву, одну цифру и один спецсимвол из +-_@$!%*?&#.,;:[]{}</p>
              <form onSubmit={this.handleCreateAccount}>
                <label>Email:</label>
                <input type='mail' name='inputUserMail' minLength='4' onChange={this.handleChangeUserMail}/>
                <label>Password:</label>
                <input type='text' name='inputUserPass'maxLength='20' minLength='8' onChange={this.handleChangeUserPass}/>
                <button type='submit'>Start</button>
              </form>
            <p>{ messageSignUp }</p>
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
      setPageAction: nextUrl => dispatch(setPage(nextUrl)),
      signUpAction: userData => dispatch(signUp(userData))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp) 