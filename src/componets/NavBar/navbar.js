import React, { useState } from "react";
import "./navbar.css"
import { AiOutlineMenu } from "react-icons/ai";


export default function NavBar(){

    const [fixedNav, setFixedNav] = useState(false)
    const [extentionNav, setExtentionNav] = useState(false)

    window.addEventListener("scroll", ()=>{
        let scroll = window.pageYOffset 
        if(scroll > 400){
            setFixedNav(true)
        }else{
            setFixedNav(false)
        }
    })


    return (
            <>
                <nav className={fixedNav ? "fixed-nav" : "un-fixed-nav"} >
                    <div className="nav-insider">
                        <h1>IDG<span style={{color: '#54b3d6'}}>Blog.</span></h1>
                        <div className="nav-links">
                            <a data-replace="Home" href="/"><span>Home</span></a>
                            <a data-replace="Articles" href="/articles"><span>Articles</span></a>
                            <a data-replace="Authors" href="/about"><span>Authors</span></a>
                        </div>
                        {/* <p className="menu"  onClick={()=> setExtentionNav(!extentionNav)}> <AiOutlineMenu style={{marginRight: "5px"}}/>menu</p> */}
                    </div>
                </nav>
            </>
    
    )
}