import React from 'react';
import '../../styles/pages/comingSoonPage.scss';

import ImageContainer from '../ui/image/ImageContainer';
import SignupFormContainer from '../ui/form/SignupFormContainer';
import JumperImg from '../../resources/jumpers/img_jumper1.png';
import HttpResponseCodes from '../../constants/HttpResponseCodesConstants';

import boardGameImg from '../../resources/img_boxWithFigure.png';
import Footer from '../ui/Footer';


const ComingSoonPage = () => {
    return (
        <div className="coming-soon-page">
                <div className="box-img-container">
                    <ImageContainer imgPath={boardGameImg} alt={HttpResponseCodes.NotFound} />
                </div>
                <div className="jumper-img-container">
                    <ImageContainer imgPath={JumperImg} alt={HttpResponseCodes.NotFound} />
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
