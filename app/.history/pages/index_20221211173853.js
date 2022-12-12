import Head from 'next/head'
import { supabase } from '../utils/supabaseClient'


export const getServerSideProps = async (context) => {
  const { data: user, error } = await supabase.auth.api.getUserByCookie(context.req)
  if (error) return { props: { user: null
  } }
  return { props: { user } }
}

export default function Home() {
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
      </body>

    </>
  )
}
