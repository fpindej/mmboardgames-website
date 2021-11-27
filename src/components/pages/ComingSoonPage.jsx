import React from 'react';
import '../../styles/pages/comingSoonPage.scss';

import ImageContainer from '../ui/image/ImageContainer';
import SignupFormContainer from '../ui/form/SignupFormContainer';
import JumperImg from '../../resources/jumpers/img_jumper1.webp';
import HttpResponseCodes from '../../constants/HttpResponseCodesConstants';

import boardGameImg from '../../resources/img_boxWithFigure.webp';
import Footer from '../ui/Footer';


const ComingSoonPage = () => {
    return (
        <div className="coming-soon-page">
                <div className="box-img-container">
                    <ImageContainer imgPath={boardGameImg} altPath={HttpResponseCodes.NotFound} />
                </div>
                <div className="jumper-img-container">
                    <ImageContainer imgPath={JumperImg} altPath={HttpResponseCodes.NotFound} />
                </div>
                <div className="media-stack">
                    <div className="signup-form-container">
                        <SignupFormContainer />
                    </div>
                    <div className="social-media-container">
                        <Footer />
                    </div>
                </div>
        </div>
    );
};

export default ComingSoonPage;
