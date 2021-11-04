import React from 'react';
import '../../styles/imageContainer.scss';


const ImageContainer = ({imgPath, altPath}) => {
    return(
        <img className="board-game-image" src={imgPath} alt={altPath} />
    );
}

export default ImageContainer;