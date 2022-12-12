//import { useContext } from "react";
//import UserContext from "./UserContext"
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";


const {systemTheme , theme, setTheme} = useTheme ();

      const renderThemeChanger= () => {

          const currentTheme = theme === "system" ? systemTheme : theme ;

          if(currentTheme ==="dark"){
            return (
              <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
            )
          }

          else {
            return (
              <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
            )
          }
       };

      return (
        <header className="h-15 shadow-sm dark:border-gray-700">
          <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
            {renderThemeChanger()}
          </div>
        </header>
      );
    
    
/*function Header(){
    const user = useContext(UserContext)

return(
    <>
    <h2>{`Hello ${user} again!`}</h2>
    <a href="./Login">ICI</a>
    </>
);
}*/
export default Header