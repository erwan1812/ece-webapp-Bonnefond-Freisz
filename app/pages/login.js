import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useRouter } from "next/router";


function Login() {
  const router = useRouter();

  supabase.auth.onAuthStateChange(async (event) => {


    if (event !== "SIGNED_OUT") {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  });
  return (
    <div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={['github']}
        />
    </div>

  );
}
export default Login;



