import { useContext } from "react";
import UserContext from "./UserContext"


function Header(){
    const user = useContext(UserContext)

return(
    <>
    <h2>{`Hello ${user} again!`}</h2>
    <a href="./Login">ICI</a>
    </>
);
}
export default Header