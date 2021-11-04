import React, {useState} from 'react';
import '../../styles/comingSoonPage.scss';
import ImageContainer from '../ui/ImageContainer';
import SignupFormContainer from '../ui/SignupFormContainer';
import boardGameImg from '../../resources/img_box.png';
import jumper1Img from '../../resources/img_jumper1.png';

const ComingSoonPage = () => {


    return (
        <div className="coming-soon-page">
            <div className="box-img-container">
                <ImageContainer imgPath={boardGameImg} alt="404"/>
            </div>
            <div className="jumper-img-container">
                <ImageContainer imgPath={jumper1Img} alt="404"/>
            </div>
            <div className="signup-form-container">
                <SignupFormContainer />
            </div>
        </div>
    );
};

export default ComingSoonPage;
