import React from 'react';
import '../../../styles/gameLogoContainer.scss';
import HttpResponseCodes from '../../../constants/HttpResponseCodesConstants';

import gameTitleImg from '../../../resources/img_gameTitle.png'

const GameLogoContainer = () => {
    return (
        <img className="game-logo-container" src={gameTitleImg} alt={HttpResponseCodes.NotFound} />
    );
}

export default GameLogoContainer;