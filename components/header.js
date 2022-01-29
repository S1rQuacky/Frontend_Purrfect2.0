import React from "react";
import Link from "next/link";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import Router from "next/router";
import ImgCarousel from "./carousel"



function Header(props) {
    const { data: session } = useSession();
    let link = ''
    let manage = ''
    if(typeof window !== 'undefined'){
        const site = Router.route
        if(site.indexOf('hosts') === -1){
            link = '/sign-up'
            manage = '/useracct'
        }else{
            link = '/hosts/sign-up'
            manage = '/hosts/hostacct'
        }
    }
        return (
            <header>
                <Head>
                    <title>Purrfect</title>                    
                </Head>
                
                <div className="logo">
                    <div className="logo1"><Link href="/">Purrfect</Link></div>
                    <div className="logo2"><Link href="/">Getaway</Link></div>  
                    </div>
                
                
                <ImgCarousel />
              
                <nav className="navbar">
                    <ul className="nav-items">
                        <li className="nav-item"><Link href="/bytype">By Type</Link></li>
                        <li className="nav-item"><Link href="/browse">Browse</Link></li>
                    </ul>
                    <div className="creds" > 
                        {!session && ( <div className="unAuth">
                            <button onClick={signIn} > Click here to sign in </button> 
                            <Link href = {link} >
                                <button> And here to sign up </button>
                            </Link >
                            </div>)
                        } 
                        {session && ( <>
                            <div className="granted" >
                                <img src={session.user.image} alt='User Pic' />
                                Welcome {session.user.name}
                                <br />
                                <Link href={manage} >
                                    <button> Manage my Account </button>
                                </Link >
                                <button onClick={signOut}> Sign out </button> 
                            </div> 
                            </>)
                        }
                    </div>
                </nav>
                
            </header>
        )
    }


export default Header