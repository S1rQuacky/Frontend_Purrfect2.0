//This will be the user account (My Account button)
//This will be the user account (My Account button)
import { useSession } from "next-auth/react"
import Router from "next/router";
import React from "react";
import PetCard from '../components/pet'
import Link from "next/link";
import Header from "../components/header";

export default function UserAccount(props) {
    const { data: session } = useSession()
    const [user, setUser] = React.useState()
    const [pets, setPets] = React.useState()

    console.log(session)
    //console.log('email',session.user.email)
    const getUserInfo = async () => {
        if(session.user.email){
            const URL = "https://the-purrfect-getaway.herokuapp.com/user/" + session?.user.email;
            const response = await fetch(URL)
            const data = await response.json()
            console.log('data', await data)
            setUser(await data)
            
        }
    }

    
    React.useEffect(()=>{
        if(session) getUserInfo()
    },[session])

    React.useEffect(()=>{
        if(user) getPets(user?.pet_id)
    },[user])

    const getPets = (petIDs) => {
        console.log('hasPets')
        setPets(petIDs.map( (pet, index) => {
            console.log('pet',pet)
            return(<>
                <PetCard key={index} petID={pet} />
                </>)
        }))
    }

    const emptyPets =<>
            <img src="https://i.dlpng.com/static/png/6441090_preview.png" alt="No pets found"/>
            <h5>No pets found, why dont you add some below?</h5>
        </>
    

    const loaded = () => {
        if(user){
            return( <div className="userPage">
                        <div className="userProf">
                            <div className="userInfo">
                                <img src={user?.img} alt="User Picture"></img>
                                <h2>{user?.first_name}&nbsp;{user?.last_name}</h2>
                                <h4>{user?.email}</h4>
                                <h4>{user?.phone_number}</h4>
                                <Link href='/edituser'><button>Edit My Profile</button></Link>
                                <Link href='/addpet'><button>Add A Pet</button></Link>
                            </div>
                            
                        </div>
                        <div className="petProf">
                            <div className="myPets">
                                {pets ? pets : emptyPets}
                            </div>
                        </div>
                        <div className="petCrud">
                            <Link href={"/"}>
                                <button></button>
                            </Link>
                        </div>
                    </div>)
        }else{
            return(<h1>My2 profile</h1>)    
        }
    }
    const loadn = () => {
        
            return(<h1>My profile</h1>)
        
        
    }
    
    return(<>
            <Header />
            {user ? loaded() : loadn()}
            </>
        )
    
}