import '../styles/globals.css'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

import { SessionContextProvider } from '@supabase/auth-helpers-react'

import Layout from '../components/Layout'
import {ContextProvider} from '../components/UserContext'

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
    <ContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ContextProvider>
    </SessionContextProvider>
    
  )
}

export default MyApp
