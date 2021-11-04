import React, {useState} from 'react';
import '../../styles/comingSoonPage.scss';
import ImageContainer from '../ui/ImageContainer';
import SignupFormContainer from '../ui/SignupFormContainer';
import boardGameImg from '../../resources/board-game-img.png';

const ComingSoonPage = () => {


    return (
        <div className="coming-soon-page">
            <div className="content-center">
                <ImageContainer imgPath={boardGameImg} alt="kde mas ty internety"/>
            </div>
            <div className="content-center">
                <SignupFormContainer />
            </div>
        </div>
    );
};

export default ComingSoonPage;
