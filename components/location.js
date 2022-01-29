// Location card component

function Location(props) {
    
    return (
           <div key={props.key} className="card">
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
                    {props.street} <br/>
                    {props.city}&nbsp;
                    {props.state}&nbsp;
                    {props.zip_code}<br />
                    {props.phone_number}<br />
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
