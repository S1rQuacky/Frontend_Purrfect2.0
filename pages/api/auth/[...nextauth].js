import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers:[
        CredentialProvider({
            name: "credentials",
            credentials: {
                username: {
                    label: "Email:", 
                    type: "text", 
                    placeholder: "johndoe@test.com"
                },
                password: {label: "Password:", type: "password"},
                domain: {label: "I'm a host:", type: "checkbox"},
            },
            authorize: async (credentials) => {
                try{
                    //database lookup (expamle is not using a database)
                    if(credentials.domain === 'on'){
                        let data = {
                            email: credentials.username,
                            password: credentials.password
                        }
                        
                        let res = await fetch('http://the-purrfect-getaway.herokuapp.com/hostlogin',{
                            method: 'post',
                            headers: {'Content-Type': 'application/json'}, 
                            body: JSON.stringify(data)
                        })
                        
                        return (await res.json())
                    }else{
                        let payload = {
                            email: credentials.username,
                            pwd: credentials.password
                        }
                        
                        let res2 = await fetch('http://the-purrfect-getaway.herokuapp.com/login',{
                            method: 'post',
                            headers: {'Content-Type': 'application/json'}, 
                            body: JSON.stringify(payload)
                        })
                        return (await res2.json())
                    }
                }catch(e){console.log(e)}
            },
        }),
    ],
    callbacks: {
        jwt: async ({token, user}) => {
            //first time jwt callback is run, user object is available
            if(user) {
                token.id = user.role;
                token.name = user.first_name + ' ' + user.last_name
                token.picture = user.img
            }
            return token;
        },
        session: async ({session, token}) => {
            if(token) {
                session.id = token.id;
            }
            return session
        },
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true,
    },
    //here you can add route to custom login page
    //pages: {
        //signIn: "auth/signin"
    //}
});

