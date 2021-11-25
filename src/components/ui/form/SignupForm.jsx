import React, { useState, useEffect } from 'react';
import '../../../styles/signupForm.scss';

import FormResponseEnum from '../../../enums/FormResponseEnum';


const SignupForm = ({ status, message, onValidated }) => {
// eslint-disable-next-line
  const [state, setState] = useState({ email: '', firstName: '' });
  const [buttonState, setButtonState] = useState({ className: '', value: 'SIGN UP'});

  useEffect(() => {
    switch(status) {
      case FormResponseEnum.Sending:
        setButtonState( {className: 'sending', value: 'SENDING'});
        break;

      case FormResponseEnum.Error:
        setButtonState( {className: 'error', value: 'ALREADY SUBSCRIBED'});
        setTimeout(() => {
          setButtonState( {className: '', value: 'SIGN UP'});
        }, 2500);
        break;

      case FormResponseEnum.Success:
        setButtonState( {className: 'success', value: 'SUBSCRIBED'});
        setTimeout(() => {
          setButtonState( {className: '', value: 'SIGN UP'});
        }, 2500);
        break;

      default:
        setButtonState( {className: '', value: 'SIGN UP'});
    }
  }, [status]);


  const handleSubmit = (e) => {
    e.preventDefault();
    state.email &&
      state.firstName &&
      state.email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: state.email,
        MERGE1: state.firstName,
      });
  }

  return (
    <form className="signup-form">
      <h3 className="form-title">Join our newsletter!</h3>

      <div className="form-container">
        <input
          className="form-input"
          label="First Name"
          onChange={(e) => setState({ ...state, firstName: e.target.value })}
          type="text"
          value={state.firstName}
          placeholder="Your first name"
        />

        <input
          className="form-input"
          label="Email"
          onChange={(e) => setState({ ...state, email: e.target.value })}
          type="email"
          value={state.email}
          placeholder="Your email"
        />

        <input
          className={"submit-button " + buttonState.className}
          label="subscribe"
          value={buttonState.value}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </form>
  );
};

export default SignupForm;
