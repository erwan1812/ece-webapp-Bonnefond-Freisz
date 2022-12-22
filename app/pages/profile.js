import { React, useContext } from "react";
import { useRouter } from "next/router";
import Button from "../components/Button";
import UserContext from "../components/UserContext";

function Profile() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col justify-center items-center">
      {user ? (
        <>
          <div className="">
            <h1>Profile de <span className="font-bold">{user.email}</span></h1>
          </div>
          <div className="flex flex-col items-center mt-4">
            <Button className="bg-gray-200 dark:bg-gray-600"
              onClick={() => router.push("/dashboard")}
            >
              Go to my dashboard
            </Button>
          </div>
        </>
      ) : (
        <>
          <h1>User is not logged in</h1>
          <Button className="bg-gray-200 dark:bg-gray-600"
            onClick={() => router.push("/login")}>Go back login!</Button>
        </>)}

    </div>
  );
}
export default Profile;