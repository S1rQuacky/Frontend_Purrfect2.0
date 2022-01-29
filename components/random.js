//random location

//random location
import React from "react";
import Location from "./location";


export default function RandomLoc () {
    const [loc, setLoc] = React.useState()
    const URL = "https://the-purrfect-getaway.herokuapp.com/locations";

    async function loadLocs () {
        const response = await fetch(URL)
        const data = await response.json()
            
        const locID = Math.floor(Math.random() * (data.length - 1 + 0) + 0)
            
        const randLoc = {
            location_name: data[locID]?.location_name ,
            street: data[locID]?.street ,
            city: data[locID]?.city,
            state: data[locID]?.state,
            zip_code: data[locID]?.zip_code,
            phone_number: data[locID]?.phone_number,
            email: data[locID]?.email,
            description: data[locID]?.description,
            img: data[locID]?.img,
            tag: data[locID]?.tag 
        }
        setLoc(await randLoc)
        
    }
    
    React.useEffect(()=>loadLocs(),[])

    const loaded = <div className="randLoc">
                        <h3> Dont know where to go try this random location....</h3>
                        <Location 
                            location_name={loc?.location_name} 
                            street={loc?.street} 
                            city={loc?.city}
                            state={loc?.state}
                            zip_code={loc?.zip_code}
                            phone_number={loc?.phone_number}
                            email={loc?.email}
                            description={loc?.description}
                            img={loc?.img}
                            tag={loc?.tag} 
                        /> 
                    </div>;

    const loading = <h3>Where will we go today??</h3>
    
    return(
        <>
        {loc ? loaded : loading}
        </>
    )
}

