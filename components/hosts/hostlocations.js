import Location from "../location"
import React, { useEffect } from "react"


export default function HostLocations (props) {
    const [location, setLocation] = useState()

    const getLocInfo = async () => {
        const URL = "https://the-purrfect-getaway.herokuapp.com/locations/" + props.locationID;
        const response = await fetch(URL)
        const data = await response.json()
        setLocation(data)
    }

    useEffect(() => {getLocInfo()}, [props.locationID])
    return(
        <div className="locationData">
            <div className="locPic">
                <img src={location?.img} alt={location?.location_name}/>
            </div>
            <div className="locationBody">
                Name: &nbsp;{location?.location_name} &nbsp;{location?.description}<br />
                Street:&nbsp;{location?.street}<br />
                City: &nbsp;{location?.city} State:&nbsp;{location?.state} Zip Code: &nbsp;{location?.zip_code}<br />
                Phone: &nbsp;{location?.phone_number} email: &nbsp;{location?.email}<br />
                {location?.img}
                {location?.tag}

            </div>
        </div>
    )
        
}            