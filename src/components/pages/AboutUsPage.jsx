import React from 'react';
import '../../styles/pages/aboutUsPage.scss';

import dudesImg from '../../resources/creators.webp';
import ImageContainer from '../ui/image/ImageContainer';
import HttpResponseCodes from '../../constants/HttpResponseCodesConstants';


const AboutUsPage = () => {
    return(
        <div className="about-us-page">
            <h1>WHO ARE WE?</h1>
            <div className="dudes-img">
                <ImageContainer imgPath={dudesImg} altPath={HttpResponseCodes.NotFound} className="image-container-rounded"/>
            </div>

            <div className="about-us-txt">
                <p>
                MMBoardgames is a Czech Republic-based board game publisher owned and run by Marek Klus and Michal Vavrys. We make immersive sport games based on the real rules of the sport event.
                </p>
                
                <h3>Our vision</h3>
                <p>
                    Our games are created with passion and a single goal in mind: to have fun while playing.
                </p>

                <h3>Our challenges</h3>
                <p>
                    Players that are looking for fresh challenges and experiences will enjoy our games.
                </p>

                <h3>Our way</h3>
                <p>
                    We prioritize beauty, uniqueness, utility, and accessibility when creating artwork and components for our games.
                </p>

                <h3>Our storytelling</h3>
                <p>
                    We create game mechanisms that complement theme and the rules of the sport event.
                </p>
            </div>
        </div>
    );
}

export default AboutUsPage;