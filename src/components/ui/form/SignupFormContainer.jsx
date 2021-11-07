import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SignupForm from './SignupForm';

const MailchimpFormContainer = () => {
    //TODO hide this in env
    const postUrl = 'https://slmail.us5.list-manage.com/subscribe/post?u=76a06c328943286a2f6826939&amp;id=00fbc95a3e';

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
