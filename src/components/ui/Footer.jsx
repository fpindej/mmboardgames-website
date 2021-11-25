import React from 'react';
import '../../styles/footer.scss';

import SocialMediaIcon from './image/SocialMediaIcon';
import HttpStatusCodesConstatns from '../../constants/HttpResponseCodesConstants';
import SocialMediaLinks from '../../constants/SocialMediaLinksConstats';

import facebookLogo from '../../resources/social-media-logos/logo_facebook.png';
import youtubeLogo from '../../resources/social-media-logos/logo_youtube.png';
import instagramLogo from '../../resources/social-media-logos/logo_instagram.png';
import twitterLogo from '../../resources/social-media-logos/logo_twitter.png';

const Footer = () => {
    return (
        <>
            <h3 className="social-media-text">Follow us on social media!</h3>
            <SocialMediaIcon imgPath={facebookLogo} alt={HttpStatusCodesConstatns.NotFound} url={SocialMediaLinks.Facebook} />
            <SocialMediaIcon imgPath={instagramLogo} alt={HttpStatusCodesConstatns.NotFound} url={SocialMediaLinks.Instagram} />
            <SocialMediaIcon imgPath={youtubeLogo} alt={HttpStatusCodesConstatns.NotFound} url={SocialMediaLinks.Youtube} />
            <SocialMediaIcon imgPath={twitterLogo} alt={HttpStatusCodesConstatns.NotFound} url={SocialMediaLinks.Twitter} />
        </>
    );
};

export default Footer;