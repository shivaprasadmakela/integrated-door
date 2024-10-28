import React from "react";
import "./teamMember.css";
import { TbBrandInstagram } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const cardData = [
    {
        "image": "https://cdn-icons-png.freepik.com/512/9748/9748310.png?uid=R75220294&ga=GA1.1.1932890936.1716893291",
        "name": "Ara",
        "role": "founder"
    },
    {
        "image": "https://cdn-icons-png.freepik.com/512/11696/11696682.png?uid=R75220294&ga=GA1.1.1932890936.1716893291",
        "name": "Allen",
        "role": "co-founder"
    },
    {
        "image": "https://cdn-icons-png.freepik.com/512/15317/15317133.png?uid=R75220294&ga=GA1.1.1932890936.1716893291",
        "name": "Abhiram",
        "role": "founder"
    },
    {
        "image": "https://cdn-icons-png.freepik.com/512/9772/9772439.png?uid=R75220294&ga=GA1.1.1932890936.1716893291",
        "name": "Rohan",
        "role": "founder"
    }

]

const TeamMember = () => {
    return (
        <div className="cardContainer">
            {cardData.map((item, index) => (
                <div className="body" key={index} >
                    <a className="card human-resources" href="#">
                        <div className="overlay" />
                        <div className="circle">
                            <img src={item.image} alt={item.name} className="imageProfile" />
                        </div>
                        <div style={{ lineHeight: "4px", marginBlockStart: 30, zIndex: 10 }} >
                            <h2 style={{ textAlign: 'center' }} >{item.name}</h2>
                            <p style={{ textAlign: 'center' }} >{item.role}</p>
                        </div>
                        <div className="iconContainerProfile">
                            <a className="socialContainer containerOne">
                                <TbBrandInstagram className="socialSvg instagramSvg" />
                            </a>
                            <a className="socialContainer containerTwo">
                                <FaTwitter className="socialSvg twitterSvg" />
                            </a>

                            <a className="socialContainer containerThree">
                                <FaLinkedinIn className="socialSvg linkdinSvg" />
                            </a>

                            <a className="socialContainer containerFour">
                                <FaWhatsapp className="socialSvg whatsappSvg" />
                            </a>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default TeamMember;
