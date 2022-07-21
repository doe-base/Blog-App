import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

import NavBar from "../componets/NavBar/navbar";
import { HiArrowNarrowDown } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlineGlobal } from "react-icons/ai";

import Footer from "../componets/footer/Footer";

function Home(){

    
    useEffect(()=>{
        Aos.init({ duration: 500})
    }, [])

    return(
        <main>
            <div className="hero-welcome" style={{}}>
                <NavBar/>

                <div className="hero-welcome-el">
                    <div className="hero-welcome-el2">
                        <div className="hero-welcome-text">
                            <p className="small-text">Smiplifying <span>Coding</span> for Everyone...</p>
                            <h1 className="big-text">IDG<span>Blog</span> post</h1>
                            <p className="text-muted"> Here is where you will find the best and reader friendly guide and tutorial articles in all things Machine Learning, Web Development and All non-related articles that will held you grow as a developer in any field.</p>
                            <HiArrowNarrowDown className="scroll-icon"/>
                        </div>
                    </div>
                </div>
            
            </div>


            {/* LEATEST BLOG SECTIONS */}
            <div className="lestest-block-container">

                
                
                <div className="lestest-holder" data-aos="fade-left" data-aos-once="true">
                    <div className="lestest-image" style={{backgroundImage:"url(/images/bg.jpg)"}}>
                       
                    </div>
                    <div className="lestest-text">
                        <p className="category">ai programming</p>
                        <p className="title">How to pick your first programming language</p>
                        <div className="social-icons-holder">
                            <p className="social-icon"><TiSocialTwitter/></p>
                            <p className="social-icon"><TiSocialInstagram/></p>
                            <p className="social-icon"><AiOutlineGlobal/></p>
                        </div>
                        <p className="time">01/04/2022 | 21 min read</p>
                    
                    </div>
                </div>

                <div className="lestest-holder" data-aos="fade-left" data-aos-once="true">
                    <div className="lestest-image" style={{backgroundImage:"url(/images/bg6.jpg)"}}>
                       
                    </div>
                    <div className="lestest-text">
                        <p className="category">ai programming</p>
                        <p className="title">How to pick your first programming language</p>
                        <div className="social-icons-holder">
                            <p className="social-icon"><TiSocialTwitter/></p>
                            <p className="social-icon"><TiSocialInstagram/></p>
                            <p className="social-icon"><AiOutlineGlobal/></p>
                        </div>
                        <p className="time">01/04/2022 | 21 min read</p>
                    
                    </div>
                </div>

                <div className="lestest-holder" data-aos="fade-left" data-aos-once="true">
                    <div className="lestest-image">
                       
                    </div>
                    <div className="lestest-text">
                        <p className="category">ai programming</p>
                        <p className="title">How to pick your first programming language</p>
                        <div className="social-icons-holder">
                            <p className="social-icon"><TiSocialTwitter/></p>
                            <p className="social-icon"><TiSocialInstagram/></p>
                            <p className="social-icon"><AiOutlineGlobal/></p>
                        </div>
                        <p className="time">01/04/2022 | 21 min read</p>
                    
                    </div>
                </div>

                <div className="lestest-holder" data-aos="fade-left" data-aos-once="true">
                    <div className="lestest-image" style={{backgroundImage:"url(/images/bg5.jpg)"}}>
                       
                    </div>
                    <div className="lestest-text">
                        <p className="category">ai programming</p>
                        <p className="title">How to pick your first programming language</p>
                        <div className="social-icons-holder">
                            <p className="social-icon"><TiSocialTwitter/></p>
                            <p className="social-icon"><TiSocialInstagram/></p>
                            <p className="social-icon"><AiOutlineGlobal/></p>
                        </div>
                        <p className="time">01/04/2022 | 21 min read</p>
                    
                    </div>
                </div>


                <div className="lestest-holder" data-aos="fade-left" data-aos-once="true">
                    <div className="lestest-image">
                       
                    </div>
                    <div className="lestest-text">
                        <p className="category">ai programming</p>
                        <p className="title">How to pick your first programming language</p>
                        <div className="social-icons-holder">
                            <p className="social-icon"><TiSocialTwitter/></p>
                            <p className="social-icon"><TiSocialInstagram/></p>
                            <p className="social-icon"><AiOutlineGlobal/></p>
                        </div>
                        <p className="time">01/04/2022 | 21 min read</p>
                    
                    </div>
                </div>

                <a className="see-more" href="/articles">See more post <HiArrowNarrowRight/></a>

            </div>

            {/* footer section */}
            <Footer />
        </main>
    )
}
export default Home;