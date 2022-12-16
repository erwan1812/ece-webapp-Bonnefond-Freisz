import { React, useEffect, useState, useContext } from "react";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";
import Button from "../components/Button";
import UserContext from "../components/UserContext";



function Profile() {
  const router = useRouter();
  const {user}=useContext(UserContext);
  
  return (
    <div>
      {user ?(
      <>
      <h1>Profile de {user.email}</h1>
      
      <Button className="bg-gray-200 dark:bg-gray-600"
          onClick={() => router.push("/dashboard")}
        >
          Go to my dashboard
        </Button>
      </>
      ):(
        <>
        <h1>User is not logged in</h1>
        <Button className="bg-gray-200 dark:bg-gray-600"
          onClick={() => router.push("/login")}>Go back login!</Button>
        </>)}
      
    </div>
  );
}
export default Profile;