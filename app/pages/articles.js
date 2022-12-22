import Link from "next/link";
import React from "react";
import { supabase } from '../utils/supabase'

function articles({ articles }) {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto my-16 px-2">
        {articles.map((article) => (
          <Link key={article.id} href={`/article/${article.id}`}>
            <a className="p-8 h-40 mb-4 items-center justify-center rounded shadow text-xl flex dark:shadow-indigo-500/50 ">
              <span className="text-center align-middle uppercase">{article.title}</span>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}
export const getStaticProps = async () => {
  const { data: articles } = await supabase.from('articles').select('*')
  return {
    props: {
      articles
    }
  }
}
export default articles