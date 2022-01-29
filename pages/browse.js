//Browse all locations 
import  { useEffect, useState } from "react"
import Location from "../components/location";

export default function Browse() {
    const [q, setQ] = useState("")
    const [allLocations, setAllLocations] = useState(null)

    const URL = "https://the-purrfect-getaway.herokuapp.com/locations/";

    const getAllLocations = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setAllLocations(data)
    }

    
    function searchIt(e){
        if(q !== ""){
            const changedData = e.filter(fore)
            return changedData
        }else{
            return e
        }
    }
    function fore(obi){
        return Object.values(obi).some(selector)
    }
    function selector(g){ return g.toString().toLowerCase().indexOf(q.toLowerCase()) > -1}

    useEffect(() => getAllLocations(), [])
    console.log(allLocations)
    const loaded = () => {
        return (<>
            <div className="seachBar">

            </div>
            <div className="allLoc">
                {allLocations.length > 0 ?
                    searchIt(allLocations).map((location, index) => {
                        return(
                            <div className="eachLoc">
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
                                <div className="locBtn">
                                    <button>Make a reservation</button>
                                </div>
                            </div>
                        )
                    } 
                    ) : <h3>Loading...</h3>
                }
                

            </div>
            </>)
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return allLocations ? loaded() : loading()
}