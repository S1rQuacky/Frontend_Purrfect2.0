import React from "react";
import Link from "next/link";
import Head from "next/head";

import Carousel from "./carousel";

function Header(props) {
        return (
            <header>
                <Head>
                    <title>Purrfect</title>
                    
                </Head>
                
                <div className="logo">
                    <div className="logo1"><Link href="/getaway">Purrfect</Link></div>
                    <div className="logo2"><Link href="/getaway">Getaway</Link></div>  
                    </div>
                
                {/* possibly surround with SessionProvider */}
                <Carousel />
              
                <nav className="navbar">
                    <ul className="nav-items">
                        <li className="nav-item"><Link href="/bytype">By Type</Link></li>
                        <li className="nav-item"><Link href="/browse">Browse</Link></li>
                    </ul>

                </nav>
            </header>
        )
    }


export default Header