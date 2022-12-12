import Head from 'next/head'
import { supabase } from '../utils/supabase'
import Link from 'next/link'

export default function Home({articles}) {
  console.log(articles)
  return (
    <>
      <Head>
        <title>My app</title>
      </Head>
        <div class="h-20 w-1OO bg-orange-300 grid-cols-3 gap-4 content-center">
          <div class="text-center mx-4 space-y-2 py-4">
            <div class="dark:text-violet-600 text-black-600 text-5xl font-bold ">
              ACCUEIL
            </div>
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto my-16 px-2">
          {articles.map((article) => (
            <Link key={article.id} href={`/${article.id}`}>
              <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">
                {article.title}
              </a>
              </Link>
          ))}
        </div>

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
