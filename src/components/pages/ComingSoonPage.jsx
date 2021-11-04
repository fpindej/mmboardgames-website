import React, {useState} from 'react';
import '../../styles/comingSoonPage.scss';
import ImageContainer from '../ui/ImageContainer';
import SignupFormContainer from '../ui/SignupFormContainer';
import boardGameImg from '../../resources/img_box.svg';

const ComingSoonPage = () => {


    return (
        <div className="coming-soon-page">
            <div className="content-center">
                <ImageContainer imgPath={boardGameImg} alt="404"/>
            </div>
            <div className="content-center">
                <SignupFormContainer />
            </div>
        </div>
    );
};

export default ComingSoonPage;
