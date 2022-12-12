import { useContext } from "react";
import UserContext from "./UserContext"
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";



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