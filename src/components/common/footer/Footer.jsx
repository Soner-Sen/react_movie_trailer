
import '../../../theme/footer_style.scss';

import React from "react";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";


const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">About</li>
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                All information and rights reserved by The Movie Database. 
                The Movie Database (TMDB) is a collaborative database about movies. 
                The project was founded by Travis Bell in 2008 to collect movie posters.
                </div>
                <div className="socialIcons">
                <span className="icon">
                        <FaLinkedin />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;