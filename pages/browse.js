//Browse all locations 
import  { useEffect, useState } from "react"
import Location from "../components/location";

export default function Browse() {

    const [allLocations, setAllLocations] = useState(null)

    const URL = "https://the-purrfect-getaway.herokuapp.com/locations/";

    const getAllLocations = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setAllLocations(data)
    }
    useEffect(() => getAllLocations(), [])

    const loaded = () => {
        return (

            <div>
                {allLocations.length > 0 ?
                    allLocations.map((location, index) => {
                        return(
                            <div>
                                <Location 
                                    key={index} 
                                    className="location-item" 
                                    location_name={location.location_name} 
                                    street={location.street} 
                                    city={location.city}
                                    state={location.state}
                                    zip_code={location.zip_code}
                                    phone_number={location.phone_number}
                                    email={location.email}
                                    description={location.description}
                                    img={location.img}
                                    tag={location.tag} 
                                    /> 
                            </div>
                        )
                    } 
                    ) : <h3>Loading...</h3>
                }
                

            </div>
        )
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return allLocations ? loaded() : loading()
}