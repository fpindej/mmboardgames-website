import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import HttpStatusCodesConstatns from '../../constants/HttpStatusCodesConstatns';
import SocialMediaLinks from '../../constants/SocialMediaLinksConstats';

import facebookLogo from '../../resources/social-media-logos/logo_facebook.png';
import youtubeLogo from '../../resources/social-media-logos/logo_youtube.png';
import instagramLogo from '../../resources/social-media-logos/logo_instagram.png';
import twitterLogo from '../../resources/social-media-logos/logo_twitter.png';

const Footer = () => {
    return (
        <>
            <SocialMediaIcon imgPath={facebookLogo} alt={HttpStatusCodesConstatns.notFound} url={SocialMediaLinks.facebook} />
            <SocialMediaIcon imgPath={instagramLogo} alt={HttpStatusCodesConstatns.notFound} url={SocialMediaLinks.instagram} />
            <SocialMediaIcon imgPath={youtubeLogo} alt={HttpStatusCodesConstatns.notFound} url={SocialMediaLinks.youtube} />
            <SocialMediaIcon imgPath={twitterLogo} alt={HttpStatusCodesConstatns.notFound} url={SocialMediaLinks.twitter} />
        </>
    );
};

export default Footer;