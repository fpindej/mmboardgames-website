import React from 'react';
import '../../../styles/imageContainer.scss';


const ImageContainer = ({ imgPath, altPath, className="" }) => {
    return (
        <img className={`${className} image-container`} src={imgPath} alt={altPath} />
    );
}

export default ImageContainer;