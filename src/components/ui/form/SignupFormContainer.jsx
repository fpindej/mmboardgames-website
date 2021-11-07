import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SignupForm from './SignupForm';

const MailchimpFormContainer = () => {
    const postUrl = process.env.POST_URL;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <SignupForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;
