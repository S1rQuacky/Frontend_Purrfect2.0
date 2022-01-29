// Edit user page
import { useSession } from "next-auth/react"
import Router from "next/router";
import React from "react";
import PetCard from '../components/pet'
import Link from "next/link";
import Header from "../components/header";

export default function EditUser(){
    const { data: session } = useSession()
    const [user, setUser] = React.useState()
    const [formData, setFormData] = React.useState()
    const URL = "https://the-purrfect-getaway.herokuapp.com/user/"

    console.log(session)
    //console.log('email',session.user.email)
    const getUserInfo = async () => {
        if(session.user.email){
            
            const response = await fetch(URL+ session?.user.email)
            const data = await response.json()
            console.log('data', await data)
            setUser(await data)
            
        }
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleUpdate = async () => {
        const response = await fetch(URL+ user.id, {
            method: "put",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        if(response.status == 200){
            Router.push('/useracct')
        }
        
    }

    
    React.useEffect(()=>{
        if(session) getUserInfo()
    },[session])

    
    
    return(<div className="editUsrPage">
        <Header ></Header>
                <h1>Update Account</h1>
                <h3>Leave alone any field you don't want to change...</h3>
                <div className="inputForm">
                    <label htmlFor="first_name">First Name:</label><input onChange={handleChange} type="text" id="first_name" name="first_name" placeholder={user?.first_name} required />
                    <label htmlFor="last_name">&nbsp;,&nbsp;Last Name:</label><input onChange={handleChange} type="text" id="last_name" name="last_name" placeholder={user?.last_name} required />
                </div>
                <div className="inputForm">
                    <label htmlFor="email">eMail:</label><input onChange={handleChange} type="text" id="email" name="email" placeholder={user?.email} required />
                    <label htmlFor="pwd">&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;Password:</label><input onChange={handleChange} type="password" id="pwd" name="pwd" required />
                </div>
                <div className="inputForm">
                    <label htmlFor="phone_number">Phone:</label><input onChange={handleChange} type="text" id="phone_number" name="phone_number" placeholder={user?.phone_number} required />
                    <label htmlFor="img">&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;,&nbsp;Image URL:</label><input onChange={handleChange} type="text" id="img" name="img" placeholder={user?.img} required />
 
                </div>
                <div className="foot">
                    <br></br>
                    <Link href="/useracct"><button >Cancel</button></Link>
                    <button onClick={handleUpdate}>Submit</button>
                </div>
    </div>)
}

