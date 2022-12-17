import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { React, useEffect, useState, useContext } from "react";
import UserContext from "../components/UserContext";
import CommentCard from "../components/CommentCard";
import CommentCardPublic from "../components/CommentCardPublic";

const Article = ({ article }) => {
  const initialState = {
    contents: "",
};
const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
const {user}=useContext(UserContext);
const router = useRouter();
const [commentData, setcommentData] = useState(initialState);

const { contents } = commentData;

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
  return <div>Fetching articles...</div>;
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
    } catch (error) {
        alert(error.message);
    }
};
  return (
   
    
    <div>
      {user ?(
        <>
         <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">{article.title}</h1>
      <p>{article.contents}</p>
      <p>{article.categories}</p>
      </div>
      <h1>Votre commentaires</h1>
      <CommentCard data={comments} handleDelete={handleDelete}/>
        <label>Contents:</label>
                    <input
                        type="text"
                        name="contents"
                        value={contents}
                        onChange={handleChange}
                        placeholder="Enter contents"
                    />

      <Button className="bg-gray-200 dark:bg-gray-600"
        onClick={() => createComments()}>Create Comments
      </Button>
        </>
      ):(
        <>
         <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">{article.title}</h1>
      <p>{article.contents}</p>
      <p>{article.categories}</p>
      <CommentCardPublic data={comments}/>
      </div>
          <p>Pour laisser un commentaire il faut être connectés ce qui n'est pas votre cas </p>
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