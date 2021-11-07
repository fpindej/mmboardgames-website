import React, { useState } from 'react';

import ImageContainer from '../ui/image/ImageContainer';
import GameLogoContainer from '../ui/image/GameLogoContainer';
import SignupFormContainer from '../ui/form/SignupFormContainer';
import JumperImgConstant from '../../constants/JumperImgConstants';
import HttpStatusCodesConstatns from '../../constants/HttpStatusCodesConstatns';
import { randomArrayIndex } from '../../utils/RandomNumberGenerator';

import boardGameImg from '../../resources/img_boxWithFigure.png';
import gameTitleImg from '../../resources/img_gameTitle.png'
import Footer from '../ui/Footer';

import '../../styles/comingSoonPage.scss';

const ComingSoonPage = () => {
    const [imgIndex, setImgIndex] = useState(randomArrayIndex(JumperImgConstant.length));

    return (
        <div className="coming-soon-page">
            <div className="content">
                <div className="box-img-container">
                    <ImageContainer imgPath={boardGameImg} alt={HttpStatusCodesConstatns.notFound} />
                </div>
                <div className="jumper-img-container">
                    <ImageContainer imgPath={JumperImgConstant[imgIndex]} alt={HttpStatusCodesConstatns.notFound} />
                </div>
                <div className="signup-form-and-title-container">
                    <div className="gameTitle-container">
                        <GameLogoContainer imgPath={gameTitleImg} alt={HttpStatusCodesConstatns.notFound} />
                    </div>
                    <div className="signup-form-container">
                        <SignupFormContainer />
                    </div>
                </div>
            </div>
            <div className="social-media-container">
                <Footer />
            </div>
        </div>
    );
};

export default ComingSoonPage;
