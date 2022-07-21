import Footer from "../componets/footer/Footer"
import "../style/about.css"
import {FaAngleRight} from "react-icons/fa"

export default function About(){

    return(

        <main id="about">
            <div className="about-hero-disc">
                <h1>Authors</h1>

                <div className="about-links-holder">
                    <a href="/">Home <FaAngleRight /></a>
                    <a href="/articles">Articles <FaAngleRight /></a>
                </div>
            </div>

            <div className="real-about-content">
                <p className="first-paragraph">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>

                <div className="about-me">
                    <img src="/images/IDG.jpg" id="about-image"/>
                </div>
                <p className="second-paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>

                <div className="send-message">
                    <h2>Leave us a comment</h2>

                    <form>
                        <input type="search" name="name" className="name" placeholder="Enter your name"/>
                        <input type="email" name="email" className="email" placeholder="Enter your email"/>
                        <textarea placeholder="Enter your message"></textarea>
                        <button>send</button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    )
}