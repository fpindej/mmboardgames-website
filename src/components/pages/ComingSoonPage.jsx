import React, { useEffect, useState } from 'react';
import '../../styles/comingSoonPage.scss';
import ImageContainer from '../ui/ImageContainer';
import GameLogoContainer from '../ui/GameLogoContainer';
import SignupFormContainer from '../ui/SignupFormContainer';
import JumperImgConstant from '../../constants/JumperImgConstants';
import HttpStatusCodesConstatns from '../../constants/HttpStatusCodesConstatns';

import boardGameImg from '../../resources/img_boxWithFigure.png';
import gameTitleImg from '../../resources/img_gameTitle.png'
import Footer from '../ui/Footer';

const ComingSoonPage = () => {
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * JumperImgConstant.length);
        setImgIndex(randomIndex);
    }, [JumperImgConstant.length]);

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
