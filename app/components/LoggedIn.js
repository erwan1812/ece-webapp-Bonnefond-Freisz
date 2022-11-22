import {useContext} from 'react';
import UserContext from './UserContext'

const LoggedOut = () => {
  const {login} = useContext(UserContext)
  return (
    <div>
      <button onClick={()=>{ login('guest') }}>Login</button>
    </div>
  )
}

const LoggedIn = () => {
  const {user, logout} = useContext(UserContext)
  return (
    <div>
      Welcome {user}!
      <div>
        <button onClick={()=>{ logout() }}>Logout</button>
      </div>
    </div>
  )
}

export default () => {
  const {user} = useContext(UserContext)
  return (
    <div>
      {user ? <LoggedIn /> : <LoggedOut />}
    </div>
  )
}