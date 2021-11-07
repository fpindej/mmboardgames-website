import React, { useState } from 'react';
import FormResponseEnum from '../../../enums/FormResponseEnum';

import '../../../styles/signupForm.scss';

const SignupForm = ({ status, message, onValidated }) => {
// eslint-disable-next-line
  const [state, setState] = useState({ email: '', firstName: '' });

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

      {status === FormResponseEnum.Sending && (
        <div>
          Sending...
        </div>
      )}
      {status === FormResponseEnum.Error && (
        <div>
          Already subscribed
        </div>
      )}
      {status === FormResponseEnum.Success && (
        <div>
          Thank You for subscribing!
        </div>
      )}

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
          className="submit-button"
          label="subscribe"
          value="SIGN UP"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </form>
  );
};

export default SignupForm;
