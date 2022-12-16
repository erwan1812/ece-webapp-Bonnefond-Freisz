import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { supabase } from "../../utils/supabase";
import { UserContext } from "../../components/UserContext";
import Button from "../../components/Button";

const Edit = () => {
    const [article, setArticle] = useState();
    const router = useRouter();
    const [user, setUser] = useState(null)
    const { slug } = router.query;

    useEffect(() => {
      async function getUserData() {
          await supabase.auth.getUser().then((value) => {
              if (value.data?.user) {
                  console.log(value.data.user);
                  setUser(value.data.user);
              }
          });
      }
      getUserData();
  }, []);


    useEffect(() => {
        const getArticle = async () => {
            if (!slug) return;

            const { data } = await supabase
                .from("articles")
                .select("*")
                .filter("id", "eq", slug)
                .single();
            setArticle(data);
        };
        getArticle();
    }, [slug]);

    const handleOnChange = (e) => {
        setArticle({
            ...article,
            [e.target.name]: e.target.value,
        });
    };
    const updateArticle = async () => {
        const { title, contents, categories } = article;
        const { data } = await supabase
            .from("articles")
            .update({
                title,
                contents,
                categories,
            })
            .eq("id", slug)
            .eq("user_id", user?.id);

        alert("article updated successfully");

        router.push("/");
    };
    console.log(slug)
    return (
        <div>
            <div>
                <h1>Edit article</h1>
                <label> Title:</label>
                <input
                    type="text"
                    name="title"
                    value={article?.title}
                    onChange={handleOnChange}
                />
                <label> Contents:</label>
                <input
                    type="text"
                    name="contents"
                    value={article?.contents}
                    onChange={handleOnChange}
                />
                <label> categories:</label>
                <input
                    type="text"
                    name="categories"
                    value={article?.categories}
                    onChange={handleOnChange}
                />
                <Button className="bg-gray-200 dark:bg-gray-600"
                    onClick={() => updateArticle()}>Update article
                </Button>
            </div>
        </div>
    );
};

export default Edit;