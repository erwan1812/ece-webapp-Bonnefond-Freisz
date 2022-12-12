
import Head from 'next/head'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'

const Home = () => {
  const session = useSession()

  const supabase = useSupabaseClient()
  return (
    <>
      <Head>
        <title>My app</title>
      </Head>
      <body>

        <div class="h-20 w-1OO bg-orange-300 grid-cols-3 gap-4 content-center">
          <div class="text-center mx-4 space-y-2 py-4">
            <div class="dark:text-violet-600 text-black-600 text-5xl font-bold ">
              ACCUEIL
            </div>
          </div>
        </div>
        <div className="container" style={{ padding: '50px 0 100px 0' }}>

          {!session ? (

            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />

          ) : (

            <Account session={session} />

          )}

        </div>
      </body>

    </>
  )
}



export default Home