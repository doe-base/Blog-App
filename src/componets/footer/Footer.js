import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlineGlobal } from "react-icons/ai";
import {BiChevronRight} from "react-icons/bi"
import {MdLocationOn} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import {IoIosMail} from "react-icons/io"

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Footer(){


    useEffect(()=>{
        Aos.init({ duration: 500})
    }, [])


    return(
        <div className="footer-section">
                <div className="real-stuff-container">
                    <div className="blog-talk">
                        <div className="logo-holder">
                            <h1 className="logo">IDG<span style={{color: '#54b3d6'}}>Blog.</span></h1>
                            <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="footer-social-icons-holder">
                            <p className="footer-social-icon" data-aos="fade-up" data-aos-once="true"><TiSocialTwitter/></p>
                            <p className="footer-social-icon" data-aos="fade-up" data-aos-delay="50" data-aos-once="true" style={{margin: "0 0.9rem"}}><TiSocialInstagram/></p>
                            <p className="footer-social-icon" data-aos="fade-up" data-aos-delay="100" data-aos-once="true"><AiOutlineGlobal/></p>
                        </div>
                    </div>

                    <div className="leatest-blog">
                        <h2 className="footer-title">Leater Post</h2>
                            <div className="small-lestest-holder">
                                <div className="small-lestest-image" style={{backgroundImage:"url(/images/bg.jpg)"}}>
                                
                                </div>
                                <div className="small-lestest-text">
                                    <p className="small-title">How to pick your first programming language</p>
                                
                                    <p className="small-time">01/04/2022 | 21 min read</p>
                                
                                </div>
                            </div>
                            <div className="small-lestest-holder">
                                <div className="small-lestest-image" style={{backgroundImage:"url(/images/bg.jpg)"}}>
                                
                                </div>
                                <div className="small-lestest-text">
                                    <p className="small-title">How to pick your first programming language</p>
                                
                                    <p className="small-time">01/04/2022 | 21 min read</p>
                                
                                </div>
                            </div>
                    </div>

                    <div className="quick-links">
                        <h2 className="footer-title">Quick Links</h2>

                        <div className="links-holder">
                            <a><BiChevronRight />    Home</a>
                            <a><BiChevronRight />    Author</a>
                            <a><BiChevronRight />    Aritcles</a>
                            <a><BiChevronRight />    Reach Out</a>
                        </div>
                    </div>

                    <div className="question-container">
                        <h2 className="footer-title">Have a Question</h2>
                        <div className="questions">
                            <div className="question-card">
                                <MdLocationOn className="question-icon"/> 
                                <p>Abuja Nigeria</p>
                            </div>
                            <div className="question-card">
                                <BsFillTelephoneFill className="question-icon"/> <p>+234 8125676676</p>
                            </div>
                            <div className="question-card">
                                <IoIosMail className="question-icon"/> <p>info.idoko@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copyright-text" color="#fff">Copyright &copy;2022 All rights reserved | <a>Buy me a coffee ☕</a></p>
            </div>
    )
}