import React from 'react';
import '../../../styles/gameLogoContainer.scss';


const GameLogoContainer = ({ imgPath, altPath }) => {
    return (
        <img className="game-logo-container" src={imgPath} alt={altPath} />
    );
}

export default GameLogoContainer;