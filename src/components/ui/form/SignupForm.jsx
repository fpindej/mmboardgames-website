import React, { useState, useEffect } from 'react';
import FormResponseEnum from '../../../enums/FormResponseEnum';

import '../../../styles/signupForm.scss';

const SignupForm = ({ status, message, onValidated }) => {
// eslint-disable-next-line
  const [state, setState] = useState({ email: '', firstName: '' });
  const [buttonClass, setButtonClass] = useState('');
  const [buttonValue, setButtonValue] = useState('SIGN UP');

  useEffect(() => {
    switch(status) {
      case FormResponseEnum.Sending:
        setButtonClass("sending");
        setButtonValue("SENDING")
        break;

      case FormResponseEnum.Error:
        setButtonClass("error");
        setButtonValue("ALREADY SUBSCRIBED")
        break;

      case FormResponseEnum.Success:
        setButtonClass("success");
        setButtonValue("SUBSCRIBED")
        break;

      default:
        setButtonClass("");
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
          className={"submit-button " + buttonClass}
          label="subscribe"
          value={buttonValue}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </form>
  );
};

export default SignupForm;
