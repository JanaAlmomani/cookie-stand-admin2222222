import { createContext, useContext, useState } from "react"


//global var

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl+"api/token/";

const AuthContext = createContext();

export function useAuth(){
    const auth = useContext(AuthContext)
    if(!auth) {
        return("Error: auth is empty")
    }
    return auth;
}

export function AuthProvider(props){


    const [state, setState] = useState({
        login,
    })

    async function login(username,password){
        const options = {
            method : "POST",
            body: JSON.stringify({username,password}),
            headers : {'Content-Type' : 'application/json'}

        }
        const response = await fetch(tokenUrl,options)

        const data = await response.json()

        console.log("data",data)

    }

    return(
        <AuthContext.Provider value={state}>
            {props.childern}
            </AuthContext.Provider>
    )
}