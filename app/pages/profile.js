import { React, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useRouter } from "next/router";
import Button from "../components/Button";



function Profile() {
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    router.push("/login");
    if (error) console.log("Error signing out:", error.message);
  }
  return (
    <div>
      {Object.keys(user).length !==0 ?
      <>
      <h1>Profile de {user.email}</h1>
      <Button className="bg-gray-200 dark:bg-gray-600"
          onClick={() => signOut()}
        >
          Sign Out
        </Button>
      </>
      :
        <>
        <h1>User is not logged in</h1>
        <Button className="bg-gray-200 dark:bg-gray-600"
          onClick={() => router.push("/login")}>Go back login!</Button>
        </>}
      
    </div>
  );
}
export default Profile;