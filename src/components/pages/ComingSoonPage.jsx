import React, {useEffect, useState} from 'react';
import '../../styles/comingSoonPage.scss';
import ImageContainer from '../ui/ImageContainer';
import GameLogoContainer from '../ui/GameLogoContainer';
import SignupFormContainer from '../ui/SignupFormContainer';
import boardGameImg from '../../resources/img_boxWithFigure.png';
import jumper1Img from '../../resources/img_jumper1.png';
import jumper2Img from '../../resources/img_jumper2.png';
import jumper3Img from '../../resources/img_jumper3.png';
import jumper4Img from '../../resources/img_jumper4.png';

import gameTitleImg from '../../resources/img_gameTitle.png'

const ComingSoonPage = () => {
    const images= [
        jumper1Img,
        jumper2Img,
        jumper3Img,
        jumper4Img,
        ];
    
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * images.length);
        setImgIndex(randomIndex);
        }, [images.length]);

    return (
        <div className="coming-soon-page">
            <div className="box-img-container">
                <ImageContainer imgPath={boardGameImg} alt="404"/>
                
            </div>
            <div className="jumper-img-container">
                <ImageContainer imgPath={images[imgIndex]} alt="404"/>
            </div>
            <div className="signup-form-and-title-container">
                <div className="gameTitle-container">
                    <GameLogoContainer imgPath={gameTitleImg} alt="404" />
                </div>
                <div className="signup-form-container">
                    <SignupFormContainer />
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
