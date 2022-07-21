import "../style/articles.css"
import Footer from "../componets/footer/Footer"
import {AiOutlineArrowRight} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {FaAngleLeft} from "react-icons/fa"
import {FaAngleRight} from "react-icons/fa"
import NavBar from "../componets/NavBar/navbar"

function Articles(){
    return(
        <main id="articles">
            <div className="hero-disc">

            <NavBar />
            
                <h2>Browse through all our amazing articles at a go</h2>
                <form>
                    <input type="text" name="article" id="article-input" placeholder={`?search article`}/>
                </form>

                <div></div>
            </div>

            <div className="blog-grid-container">
                <div className="blog-holder">
                    <div className="single-blog-image-area" style={{backgroundImage:"url(/images/bg.jpg)"}}>
                        
                    </div>
                    <div className="single-blog-text-area">
                        <h1 >How to pick your first programming language</h1>
                        <p>coding is fun but can you by-pass the hard question of picking you first language</p>
                        <a><AiOutlineArrowRight /> READ MORE</a>
                    </div>
                </div>

                <div className="blog-holder">
                    <div className="single-blog-image-area" style={{backgroundImage:"url(/images/bg5.jpg)"}}>
                        
                    </div>
                    <div className="single-blog-text-area">
                        <h1 >How to pick your first programming language</h1>
                        <p>coding is fun but can you by-pass the hard question of picking you first language</p>
                        <a><AiOutlineArrowRight /> READ MORE</a>
                    </div>
                </div>

                <div className="blog-holder">
                    <div className="single-blog-image-area" style={{backgroundImage:"url(/images/bg6.jpg)"}}>
                        
                    </div>
                    <div className="single-blog-text-area">
                        <h1 >How to pick your first programming language</h1>
                        <p>coding is fun but can you by-pass the hard question of picking you first language</p>
                        <a><AiOutlineArrowRight /> READ MORE</a>
                    </div>
                </div>

                <div className="blog-holder">
                    <div className="single-blog-image-area" style={{backgroundImage:"url(/images/bg2.jpg)"}}>
                        
                    </div>
                    <div className="single-blog-text-area">
                        <h1 >How to pick your first programming language</h1>
                        <p>coding is fun but can you by-pass the hard question of picking you first language</p>
                        <a><AiOutlineArrowRight /> READ MORE</a>
                    </div>
                </div>

                <div className="blog-holder">
                    <div className="single-blog-image-area" style={{backgroundImage:"url(/images/bg3.jpg)"}}>
                        
                    </div>
                    <div className="single-blog-text-area">
                        <h1 >How to pick your first programming language</h1>
                        <p>coding is fun but can you by-pass the hard question of picking you first language</p>
                        <a><AiOutlineArrowRight /> READ MORE</a>
                    </div>
                </div>

                <div className="blog-holder">
                    <div className="single-blog-image-area" style={{backgroundImage:"url(/images/bg4.jpg)"}}>
                        
                    </div>
                    <div className="single-blog-text-area">
                        <h1 >How to pick your first programming language</h1>
                        <p>coding is fun but can you by-pass the hard question of picking you first language</p>
                        <a><AiOutlineArrowRight /> READ MORE</a>
                    </div>
                </div>

                <div className="blog-holder">
                    <div className="single-blog-image-area" style={{backgroundImage:"url(/images/bg5.jpg)"}}>
                        
                    </div>
                    <div className="single-blog-text-area">
                        <h1 >How to pick your first programming language</h1>
                        <p>coding is fun but can you by-pass the hard question of picking you first language</p>
                        <a><AiOutlineArrowRight /> READ MORE</a>
                    </div>
                </div>

            </div>

            <div className="block-infinity">
                <p className="number-link"><FaAngleLeft/></p>
                <p className="number-link active-number-link">1</p>
                <p className="number-link">2</p>
                <p className="number-link">3</p>
                <p className="number-link">4</p>
                <p className="number-link">5</p>
                <p className="number-link">6</p>
                <p className="number-link"><FaAngleRight/></p>
            </div>



            <Footer />
        </main>
    )
}

export default Articles;