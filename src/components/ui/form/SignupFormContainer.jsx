import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SignupForm from './SignupForm';

const MailchimpFormContainer = () => {
    //TODO hide this in env
    const postUrl = 'https://mmboardgames.us20.list-manage.com/subscribe/post?u=9cfdb8e59cfc6ed34ca3aaede&amp;id=04fb1cf7b9';

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
