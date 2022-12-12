import { supabase } from "../utils/supabase";

const Article = ({ article }) => {
  console.log({ article });
  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">{article.title}</h1>
      <p>{article.description}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data: articles } = await supabase.from("article").select("id");

  const paths = articles.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: article } = await supabase
    .from("article")
    .select("*")
    .eq("id", id)
    .single();

  return {
    props: {
      article,
    },
  };
};

export default Article;