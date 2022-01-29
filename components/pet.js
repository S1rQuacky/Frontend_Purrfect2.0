// Pet Card

import React from "react"

export default function PetCard(props){
    const [pet, setPet] = React.useState()
    const [edit, setEdit] = React.useState(false)
    const [formData, setFormData] = React.useState()
    const [petUpdated , setPetUpdate] = React.useState(false)
    const URL = "https://the-purrfect-getaway.herokuapp.com/pets/";

    const getPetInfo = async () => {
        // const url = URL + props.petID;
        const response = await fetch(URL + props.petID)
        const data = await response.json()
        setPet(data)
    }

    const handleDelete = async () => {
        if(props.petID){
            //const url = URL + props.petID;
            const response = await fetch(URL + props.petID,{
                method:'delete',
                headers: { "Content-Type": "application/json",},
                }
            )
            const data = await response.json()
        }
    }

    const handleUpdate = async () => {
        const response = await fetch(URL+ props.petID, {
            method: "put",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        handleView()
        setPetUpdate(value => !value)
    }

    const handleCancel = () => {
        setEdit(value => !value)
    }

    const handleView = () => {
        setEdit(value => !value)
    }

    React.useEffect(()=> { getPetInfo() },[props.petID,petUpdated])
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const editPet = <div className="petData">
                    <div className="petPic">
                        <img src={pet?.img} alt={pet?.first_name} /><br />
                        Image: <input onChange={handleChange} type="text" id="img" name="img" placeholder={pet?.img} required />
                    </div>
                    <div className="petBody">
                        First Name: &nbsp;<input onChange={handleChange} type="text" id="first_name" name="first_name" placeholder={pet?.first_name} required /> 
                            &nbsp; Last Name:&nbsp; <input onChange={handleChange} type="text" id="last_name" name="last_name" placeholder={pet?.last_name} required /><br />
                        Age: &nbsp;<input onChange={handleChange} type="text" id="age" name="age" placeholder={pet?.age} required /><br />
                        Special Needs: &nbsp;<input onChange={handleChange} type="text" id="special_needs" name="special_needs" placeholder={pet?.special_needs} required /><br />
                    </div>
                    <div className="petUd">
                        <button onClick={()=>handleCancel()}>Cancel</button>
                        <button onClick={()=>handleUpdate()}>Update</button>
                    </div>
                </div>;

    const viewPet = <div className="petData">
                    <div className="petPic">
                        <img src={pet?.img} alt={pet?.first_name} />
                    </div>
                    <div className="petBody">
                        Name: &nbsp;{pet?.first_name} &nbsp;{pet?.last_name}<br />
                        Age: &nbsp;{pet?.age}<br />
                        Special Needs: &nbsp;{pet?.special_needs}
                    </div>
                    <div className="petUd">
                        <button onClick={()=>handleDelete()}>Delete</button>
                        <button onClick={()=>handleView()}>Update</button>
                    </div>
                </div>;

    return edit ? editPet : viewPet
}