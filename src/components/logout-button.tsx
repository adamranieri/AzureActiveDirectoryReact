import { useMsal } from "@azure/msal-react"

export default function LogoutButton(){
    const {instance} = useMsal();

    function logOut(){
        instance.logoutPopup();
    }

    return(<button onClick={logOut}>LogOut</button>)

}