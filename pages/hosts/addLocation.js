//Host add a location Form 
import Link from 'next/link'
import Header from '../../components/header';
import Router from 'next/router';
import React, { useState } from 'react';

export default function HostLocation() {
    const URL = "https://the-purrfect-getaway.herokuapp.com/locations/"
    const [formData, setFormData] = useState();

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const addRecord = async () => {
        try {
            let destination = '/hosts/hostacct'
            let data = formData
            
            
            console.log(JSON.stringify(data))
            const response = await fetch(URL, {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if(response.status == 200){
                Router.push(destination)
            }
        }catch (e) {
            console.log(e)
        }
    }
    return (<div className='createHostLocForm'>
        <Header ></Header>
        <h1>Add Your Purrfect Getaway</h1>
        <div className='locForm'>
            <label htmlFor="location_name">Location Name</label><input onChange={handleChange} type="text" id="location_name" name="location_name" required />            
        </div>
        <div className='locForm'>
        <label htmlFor="street">&nbsp;Street:</label><input onChange={handleChange} type="text" id="street" name="street" required />
        <label htmlFor="city">&nbsp;City:</label><input onChange={handleChange} type="text" id="city" name="city" required />
        <label htmlFor="state">&nbsp;State:</label><input onChange={handleChange} type="text" id="state" name="state" required />
        <label htmlFor="zip_code">&nbsp;Zip Code:</label><input onChange={handleChange} type="text" id="zip_code" name="zip_code" required />
        </div>
        <div className="locForm">
            <label htmlFor="email">eMail:</label><input onChange={handleChange} type="text" id="email" name="email" required />
            <label htmlFor="phone_number">&nbsp;Phone:</label><input onChange={handleChange} type="text" id="phone_number" name="phone_number" required />
        </div>
        <div className="locForm">
            <label htmlFor="description">&nbsp;Description:</label><input onChange={handleChange} type="text" id="description" name="description" required />
            <label htmlFor="img">Image URL:</label><input onChange={handleChange} type="text" id="img" name="img" required /> 
        </div>
        <div className='locCheck'>
            <label htmlFor='tags'>Ground:</label><input onChange={handleChange} type="checkbox" id='ground' name="ground"/>
            <label htmlFor='tags'>Tree:</label><input onChange={handleChange} type="checkbox" id='tree' name="tree"/>
            <label htmlFor='tags'>Special Needs:</label><input onChange={handleChange} type="checkbox" id='special_needs' name="special_needs"/>
            <label htmlFor='tags'>Outdoor:</label><input onChange={handleChange} type="checkbox" id='outdoor' name="outdoor"/>
        </div>
        <div className="foot">
                    <br></br>
                    <Link href="./hostacct"><button >Cancel</button></Link>
                    <button onClick={addRecord}>Submit</button>
                </div>
            </div>
    )

}