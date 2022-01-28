import Head from "next/head"
import Link from "next/link"
import Card from 'react-bootstrap'



function Location(props) {
    

    return (
        
 
           <div className="card">
               <div className="cardImage">
                    <img src={props.img}></img>
               </div>
               <div className="cardTitle">
                    <h2>{props.location_name}</h2>
               </div>
               <div className="cardBody">
                   <p>{props.description}</p>
               </div>
               <div className="deets">
                    {props.street}
                    {props.city}
                    {props.state}
                    {props.zip_code}
                    {props.phone_number}
                    {props.email}
                
               </div>
               <div className="tags">
               <ul>
                   
                {props.tag.map((tags, index) => {
                    return <li key={index}>
                        {tags}
                    </li>
                })}
               </ul>
               </div>
                

           </div>
            
            
            
        
    )
}

export default Location