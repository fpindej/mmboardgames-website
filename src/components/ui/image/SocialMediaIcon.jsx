import React from 'react';
import '../../../styles/socialMediaIcon.scss';


const SocialMediaIcon = ({ imgPath, alt, url }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <img className="social-media-icon" src={imgPath} alt={alt} />
        </a>
    );
}

export default SocialMediaIcon;