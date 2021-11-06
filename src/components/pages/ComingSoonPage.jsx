import React, {useEffect, useState} from 'react';
import '../../styles/comingSoonPage.scss';
import ImageContainer from '../ui/ImageContainer';
import GameLogoContainer from '../ui/GameLogoContainer';
import SignupFormContainer from '../ui/SignupFormContainer';
import SocialMediaIcon from '../ui/SocialMediaIcon';

import boardGameImg from '../../resources/img_boxWithFigure.png';
import jumper1Img from '../../resources/jumpers/img_jumper1.png';
import jumper2Img from '../../resources/jumpers/img_jumper2.png';
import jumper3Img from '../../resources/jumpers/img_jumper3.png';
import jumper4Img from '../../resources/jumpers/img_jumper4.png';
import gameTitleImg from '../../resources/img_gameTitle.png'

import facebookLogo from '../../resources/social-media-logos/logo_facebook.png';
import youtubeLogo from '../../resources/social-media-logos/logo_youtube.png';
import instagramLogo from '../../resources/social-media-logos/logo_instagram.png';
import twitterLogo from '../../resources/social-media-logos/logo_twitter.png';



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
            <div className="content">
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
            <div className="social-media-container">
                <SocialMediaIcon imgPath={facebookLogo} alt="404" url="https://www.facebook.com/MMBoard-games-109974308153448"/>
                <SocialMediaIcon imgPath={instagramLogo} alt="404" url="https://www.instagram.com/mmboardgames/"/>
                <SocialMediaIcon imgPath={youtubeLogo} alt="404" url="https://www.youtube.com/channel/UC45loD9mz_LIyZmzTFX0oEw/featured"/>
                <SocialMediaIcon imgPath={twitterLogo} alt="404" url="https://twitter.com/board_mm"/>

            </div>
        </div>
    );
};

export default ComingSoonPage;
