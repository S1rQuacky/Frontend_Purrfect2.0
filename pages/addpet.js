// Page to add a pet
import Link from 'next/link'
import Header from '../components/header';
import Router from 'next/router';
import React from 'react';
import { useSession } from "next-auth/react";

export default function AddPet(){
    const { data: session } = useSession();
    const url = 'https://the-purrfect-getaway.herokuapp.com/'
    const [formData, setFormData] = React.useState();
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    
    const handleSubmit = async () => {
        const response = await fetch(url+ 'pets', {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        
        const jsnResp = await response.json()
        console.log('jsn',jsnResp._id)
        const id = jsnResp._id.toString()

        const respusr = await fetch(url+'user/'+ session?.user.email)
        const data = await respusr.json()

        
        let usrPetArray = await data.pet_id
        let usrID = await data.id
        let newPetArr = usrPetArray.push(id)
        let payload = {pet_id:usrPetArray}
        
        const upDateUsr = await fetch(url+'user/'+ usrID, {
            method: "put",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        if(upDateUsr.status == 200){
            Router.push('/useracct')
        }

    }


    const viewForm = <div className="addPet">
                        <Header ></Header>
                        <div className="addPetPic">
                            Image: <input onChange={handleChange} type="text" id="img" name="img" required />
                        </div>
                        <div className="addPetBody">
                            First Name: &nbsp;<input onChange={handleChange} type="text" id="first_name" name="first_name"  required /> 
                                &nbsp; Last Name:&nbsp; <input onChange={handleChange} type="text" id="last_name" name="last_name"  required /><br />
                            Age: &nbsp;<input onChange={handleChange} type="text" id="age" name="age" required /><br />
                            Special Needs: &nbsp;<input onChange={handleChange} type="text" id="special_needs" name="special_needs"  required /><br />
                        </div>
                        <div className="addPetBtn">
                            <Link href="/useracct"><button >Cancel</button></Link>
                            <button onClick={()=>handleSubmit()}>Submit</button>
                        </div>
                    </div>;

    const noForm = <h2>Loading...</h2>
    
    return session ? viewForm : noForm
}

