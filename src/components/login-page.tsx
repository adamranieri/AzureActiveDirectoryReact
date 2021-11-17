import { InteractionType } from "@azure/msal-browser";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useMsalAuthentication } from "@azure/msal-react";
import { useEffect } from "react";

export default function LoginPage(){

    const {instance} = useMsal();

    function login(){
        instance.loginPopup().catch(e=>console.log(e)); 
    }
    
    return(<>
    <h1>You are not authenticated</h1>
    <button onClick={login}>Log In</button>
   
    </>)
}