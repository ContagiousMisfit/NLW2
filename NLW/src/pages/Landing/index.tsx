import React from 'react';
import {Link} from 'react-router-dom';


import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/give-classes.svg';

import cocoroIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';

function Landing() {

    return (

        /*Se o nome do arquivo for index, não é necessário especificá-lo na hora do import*/
        <div id="page-landing">

            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua Plataforma de estudos online</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                            Aprender
                    </Link>
                    <Link to="/teach" className="teach">
                        <img src={teachIcon} alt="Estudar" />
                            Ensinar
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={cocoroIcon} alt="Ícone de um coração roxo" />
                </span>

            </div>
        </div>
    )
}

export default Landing;