import { createContext, useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

const UserContext = createContext()
export default UserContext
export function ContextProvider({
  children
}) {
  const [user, setUser] = useState(null)
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
  return (
    <UserContext.Provider
      value={{
        user: user,
        logout: async function () {
          await supabase.auth.signOut()
          setUser(null)
        }
      }
      }
    >
      {children}
    </UserContext.Provider>
  )
}