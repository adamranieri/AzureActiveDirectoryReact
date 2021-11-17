import { useMsal } from "@azure/msal-react";
import LogoutButton from "./logout-button";

export default function UserInfoBar(){

    const {accounts} = useMsal()

    const {username} = accounts[0] ?? "Not logged in"
    

    return(<>
        <span>
            <p>Logged in as: {username}</p>
            <LogoutButton></LogoutButton>
        </span>
    </>)


}