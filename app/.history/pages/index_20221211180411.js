import Head from 'next/head'
import { supabase } from '../utils/supabase'

export default function Home({articles}) {
  console.log(articles)
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
        <div class="flex flex-col items-center justify-center">
          {articles.map((article) => (
            <p key={article.id}>{article.title}</p>
          ))}
        </div>
      </body>

    </>
  )
}

export const getStaticProps = async () => {
  const {data: articles} = await supabase.from('article').select('*')
  return {
    props: {
      articles
    }
  }
}
