import React from 'react';
import '../../styles/pages/homePage.scss';
import Snowfall from 'react-snowfall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

import GameLogoContainer from '../ui/image/GameLogoContainer';
import ImageContainer from '../ui/image/ImageContainer';
import boardGameImg from '../../resources/img_boxWithFigure.webp';
import HttpResponseCodes from '../../constants/HttpResponseCodesConstants';

const HomePage = () => {

    return(
        <div className="home-page">
            <Snowfall color="white" snowflakeCount={20}/>
            <div className="game-logo">
                <h1><GameLogoContainer /></h1>
            </div>
            <div className="board-img-container">
                <ImageContainer imgPath={boardGameImg} altPath={HttpResponseCodes.NotFound} />
            </div>
            <a href="#about-game-section">
                <FontAwesomeIcon icon={faArrowCircleDown} altPath={HttpResponseCodes.NotFound} className="arrow-icon" />
            </a>
        </div>
    );
}

export default HomePage;