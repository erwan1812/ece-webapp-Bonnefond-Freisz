import { supabase } from "../../utils/supabase";
import Button from "../../components/Button";
import { React, useEffect, useState, useContext } from "react";
import UserContext from "../../components/UserContext";
import CommentCard from "../../components/CommentCard";
import CommentCardPublic from "../../components/CommentCardPublic";
import { useRouter } from "next/router";

const Article = ({ article }) => {
  const initialState = {
    contents: "",
  };
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const [commentData, setcommentData] = useState(initialState);
  const { contents } = commentData;
  const router = useRouter();
  const handleChange = (e) => {
    setcommentData({ ...commentData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetchComments();
  }, []);
  const fetchComments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("article_id", article?.id);

      if (error) throw error;
      setComments(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Fetching comments...</div>;
  }
  const handleDelete = async (id) => {
    try {
      const { data, error } = await supabase
        .from("comments")
        .delete()
        .eq("id", id)
        .eq("user_id", user?.id);
      fetchComments();
      if (error) throw error;
      alert("Article deleted successfully");
    } catch (error) {
      alert(error.message);
    }
  };
  console.log({ article });
  const createComments = async () => {
    try {

      const { data, error } = await supabase
        .from("comments")
        .insert([
          {
            contents,
            user_id: user?.id,
            user_email: user?.email,
            article_id: article?.id,
          },
        ])
        .single();
      if (error) throw error;
      alert("comments created successfully");
      setcommentData(initialState);
      router.push('/articles')
    } catch (error) {
      alert(error.message);
    }
  };
  return (


    <div>
      {user ? (
        <>

          <div className="w-full max-w-3xl mx-auto py-16 px-8">
            <h1 className="text-5xl mb-6 align-middle text-center tracking-wide font-bold uppercase drop-shadow-lg">{article.title}</h1>
            <p className="text-sm mb-6 align-middle text-center italic">{article.categories}</p>
            <p className="text-lg mb-6 text-justify">{article.contents}</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-center mt-4">Here are your comments</h1>
            <CommentCard data={comments} handleDelete={handleDelete} />
            <label className="text-black dark:text-white mt-10 mr-4 ml-4">Comment :</label>
            <input
              type="text"
              name="contents"
              value={contents}
              onChange={handleChange}
              placeholder="Enter comment"
              className="w-full max-w-[50%] h-8 mt-4 border-2 border-solid border-indigo-600 rounded-md outline-0 bg-transparent text-black dark:text-white"
            />

            <Button className="bg-gray-200 dark:bg-gray-600 mt-4 ml-4"
              onClick={() => createComments()}>Create Comment
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="w-full max-w-[80%] mx-auto py-16 px-8">
            <h1 className="text-5xl mb-6 align-middle text-center tracking-wide font-bold uppercase drop-shadow-lg">{article.title}</h1>
            <p className="text-sm mb-6 align-middle text-center italic">{article.categories}</p>
            <p className="text-lg mb-6 text-justify">{article.contents}</p>
            <p className="text-base mb-6 align-middle text-center italic">To leave a comment you must be connected which is not your case</p>
            <CommentCardPublic data={comments} />
          </div>
        </>
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data: articles } = await supabase.from("articles").select("id");

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
    .from("articles")
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