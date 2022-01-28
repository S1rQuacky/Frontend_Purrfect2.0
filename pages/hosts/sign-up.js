import Link from 'next/link'
import Header from '../../components/header';
import Router from 'next/router';
import React from 'react';

export default function SignUp() {
    const url = 'https://the-purrfect-getaway.herokuapp.com/'
    const [formData, setFormData] = React.useState();
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const addRecord = async () => {
        try {
            let destination = ''
            let data = formData
            if(typeof window !== 'undefined'){
                const site = Router.route
                if(site.indexOf('hosts') === -1){
                    data['role']= 'user' 
                    destination = '/api/auth/signin'    
                }else{
                    data['role']= 'host'
                    destination = '../api/auth/signin'
                }
            }
            console.log(JSON.stringify(data))
            const response = await fetch(url + "host", {
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
    
    return (<div className="createAcctForm">
                <Header ></Header>
                <h1>Register as a new host...</h1>
                <div className="inputForm">
                    <label htmlFor="first_name">First Name:</label><input onChange={handleChange} type="text" id="first_name" name="first_name" required />
                    <label htmlFor="last_name">&nbsp;Last Name:</label><input onChange={handleChange} type="text" id="last_name" name="last_name" required />
                </div>
                <div className="inputForm">
                    <label htmlFor="email">eMail:</label><input onChange={handleChange} type="text" id="email" name="email" required />
                    <label htmlFor="password">&nbsp;Password:</label><input onChange={handleChange} type="password" id="password" name="password" required />
                </div>
                <div className="inputForm">
                    <label htmlFor="phone_number">&nbsp;Phone:</label><input onChange={handleChange} type="text" id="phone_number" name="phone_number" required />
                    <label htmlFor="img">Image URL:</label><input onChange={handleChange} type="text" id="img" name="img" required />
 
                </div>
                <div className="foot">
                    <br></br>
                    <Link href="/host"><button >Cancel</button></Link>
                    <button onClick={addRecord}>Submit</button>
                </div>
            </div>
    )

}

