import React from 'react';
import '../../styles/pages/homePage.scss';
import Snowfall from 'react-snowfall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

import GameLogoContainer from '../ui/image/GameLogoContainer';
import ImageContainer from '../ui/image/ImageContainer';
import boardGameImg from '../../resources/img_boxWithFigure.png';
import HttpResponseCodes from '../../constants/HttpResponseCodesConstants';
import Warning from '../ui/Warning';

const HomePage = () => {

    return(
        <div className="home-page">
            <Snowfall color="white" snowflakeCount={20}/>
            <div className="game-logo">
                <GameLogoContainer />
            </div>
            <div className="warning-banner">
                <Warning />
            </div>
            <div className="board-img-container">
                <ImageContainer imgPath={boardGameImg} alt={HttpResponseCodes.NotFound} />
            </div>
            <a href="#about-game-section">
                <FontAwesomeIcon icon={faArrowCircleDown} className="arrow-icon" />
            </a>
        </div>
    );
}

export default HomePage;