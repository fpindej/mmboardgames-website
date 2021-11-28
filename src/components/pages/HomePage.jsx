import React from 'react';
import '../../styles/pages/homePage.scss';
import Snowfall from 'react-snowfall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

import GameLogoContainer from '../ui/image/GameLogoContainer';
import ImageContainer from '../ui/image/ImageContainer';
import boardGameImg from '../../resources/img_boxWithFigure.webp';
import kickstarterImg from '../../resources/kickstarter-logo-green.webp';
import HttpResponseCodes from '../../constants/HttpResponseCodesConstants';

const HomePage = () => {

    return(
        <div className="home-page">
            <Snowfall color="white" snowflakeCount={20}/>
            <div className="game-logo">
                <h1><GameLogoContainer /></h1>
            </div>
            <div className="kickstarter">
                <p>CAMPAING STARTING ON 1.12.2021</p>
                <ImageContainer className="kickstarter-logo" imgPath={kickstarterImg} altPath={HttpResponseCodes.NotFound} />
                <form className="visit-form" action="https://www.kickstarter.com/projects/skijumpingboardgame/ski-jumping-board-game" method="get" target="_blank">
                    <button className="visit-button" type="submit">VISIT HERE</button>
                </form>
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