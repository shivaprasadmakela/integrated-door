import React from "react";
import "./teamMember.css";
import { TbBrandInstagram } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import FooterSection from "../Footer/footerSection";
import MainWebsite, { NavBar } from "../TopSection/topSection";

const cardData = [
    {
        "image": "https://cdn-icons-png.freepik.com/512/9748/9748310.png?uid=R75220294&ga=GA1.1.1932890936.1716893291",
        "name": "Ara",
        "role": "Full Stack Developer | Frontend Specialist",
        "discription": "I'm passionate about creating beautiful and efficient user interfaces that provide a seamless experience."
    },
    {
        "image": "https://cdn-icons-png.freepik.com/512/11696/11696682.png?uid=R75220294&ga=GA1.1.1932890936.1716893291",
        "name": "Allen",
        "role": "Full Stack Developer | Backend Expert",
        "discription": "I specialize in building robust backend systems that power complex applications with efficiency and scalability."
    },
    {
        "image": "https://cdn-icons-png.freepik.com/512/15317/15317133.png?uid=R75220294&ga=GA1.1.1932890936.1716893291",
        "name": "Abhiram",
        "role": "Full Stack Developer | Database Architect",
        "discription": "I focus on designing data solutions that ensure reliability, scalability, and security across applications."
    },
    {
        "image": "https://cdn-icons-png.freepik.com/512/9772/9772439.png?uid=R75220294&ga=GA1.1.1932890936.1716893291",
        "name": "Rohan",
        "role": "Full Stack Developer | DevOps Enthusiast",
        "discription": "I'm dedicated to streamlining development workflows, ensuring smooth CI/CD pipelines, and enhancing overall productivity."
    }
]


const TeamMember = () => {
    return (
        <>
            <NavBar />
            <div className="cardContainer">
                {cardData.map((item, index) => (
                    <div className="body" key={index} >
                        <a className="card human-resources" href="#" >
                            <div style={{ display: "flex", alignItems: "start", justifyContent: "start", width: '100%', gap: 30 }} >
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                                    <div className="overlay" />
                                    <div className="circle">
                                        <img src={item.image} alt={item.name} className="imageProfile" />
                                    </div>
                                </div>
                                <div className="cardContent"  >
                                    <h2 style={{ textAlign: 'start' }} >{item.name}</h2>
                                    <p style={{ textAlign: 'start' }} >{item.role}</p>
                                    <p className="discription" >{item.discription}</p>
                                </div>
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
            <FooterSection />
        </>
    );
};

export default TeamMember;
