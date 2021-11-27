import React from 'react';
import '../../styles/pages/aboutPage.scss';

import ImageContainer from '../ui/image/ImageContainer';
import Carousel from 'react-alice-carousel';

import img1 from '../../resources/game/img_game1.webp';
import img2 from '../../resources/game/img_game2.webp';
import img3 from '../../resources/game/img_game3.webp';
import HttpResponseCodes from '../../constants/HttpResponseCodesConstants';

const AboutPage = () => {
    return(
        <div className="about-game-page">
            <h1>WHAT'S THIS GAME ABOUT?</h1>
            <div className="about-game-txt">
                <p>
                    Ski jumping is considered the crown discipline of winter sports. 
                    This game is dedicated to all of its fans and passionate followers.
                </p>
                <p>
                    Emotion, thrills, joy and good times await; just as if you were at a real competition. 
                    While playing, you will start training both the physical and mental strength of your jumper. 
                    Conserving your jumper’s energy is an important factor in the contest. 
                    And, of course, you will get to jump from ski ramps with a realistic-looking figure. Players determine jump distances, style points and referee scores - just like in the real sport.
                    Your performance will be influenced by wind and your chosen equipment. 
                </p>
                <p>
                The goal of the Ski jumping board game is to place in the best-possible position at individual events and become the overall Competition champion.
                </p>
            </div>
            <Carousel 
            autoPlay
            autoPlayInterval="3000" 
            controlsStrategy="responsive" 
            disableButtonsControls={true} 
            infinite={true} 
            responsive={{0: {items: 1}}}>
                <ImageContainer className="img-rounded" imgPath={img3} altPath={HttpResponseCodes.NotFound}/>
                <ImageContainer className="img-rounded" imgPath={img2} altPath={HttpResponseCodes.NotFound}/>
                <ImageContainer className="img-rounded" imgPath={img1} altPath={HttpResponseCodes.NotFound}/>
            </Carousel>
        </div>
    );
}

export default AboutPage;