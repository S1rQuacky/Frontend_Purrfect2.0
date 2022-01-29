//This will be Host account
import React, { useEffect, useState } from "react"
import Router from "next/router"
import { useSession } from "next-auth/react"
import HostLocations from "../../components/hosts/hostlocations";
import Link from "next/link";
import Header from "../../components/header";

export default function HostAccount(props) {
    const{data: session} = useSession();
    const [host, setHost] = useState();
    const [locations, setLocations] = useState();

    console.log(session)

  const getHostInfo = async () => {
      if(session.user.email){
        const URL = "https://the-purrfect-getaway.herokuapp.com/host/" + session?.user.email;
        const response = await fetch(URL)
        const data = await response.json()
        console.log('data', await data)
        setHost(await data)
    
  }

}
    useEffect(() => {
        if(session) getHostInfo()
    }, [session])

    useEffect(() => {
        if(host) getLocations(host?.location_id)
    }, [host])

    const getLocations = (locationIDs) => {
        console.log('hasLocations')
        setLocations(locationIDs.map((location, index) => {
            console.log('location', location)
            return(<>
            <HostLocations key={index} locationID={location}/>
            </>)
        }))
    }

    const emptyLocations =<>
        <img src="https://static.thenounproject.com/png/507047-200.png" alt="No locations found"/>
        <h5>No Locations found, are you ready to host?</h5>
    </>

    const loaded = () => {
        if(host){
            return(<div className="hostPage">
                <div className="hostProf">
                    <div className="hostInfo">
                        <img src={host?.img} alt="Host Picture"></img>
                        <h2>{host?.first_name}&nbsp;{host?.last_name}</h2>
                        <h4>{host?.email}</h4>
                        <h4>{host?.phone_number}</h4>
                    </div>
                </div>
                <div className="locationProf">
                    <div className="myLocations">
                        {locations ? locations : emptyLocations}
                    </div>
                </div>
                <div className="locCrud">
                    <Link href={"./addLocation"}>
                        <button>Add Location</button>
                    </Link>
                </div>
            </div>)
        } else {
            return(<h1>My 2nd Profile</h1>)
        }
    }
    const loadn = () => {
        return (<h1>My Profile</h1>)
    }
    return(<>
    <Header />
        {host ? loaded() : loadn()}
        </>
    )
}



 
