import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { supabase } from "../../utils/supabase";
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
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-96 h-96 border-2 border-solid border-indigo-600 rounded-rm">
                <h1 className="text-3xl text-indigo-600 mb-4">Edit article</h1>
                <label className="text-white mt-4"> Title:</label>
                <input
                    type="text"
                    name="title"
                    value={article?.title}
                    onChange={handleOnChange}
                    className="w-4/5 h-8 mt-4 border-2 border-solid border-indigo-600 rounded-md outline-0 bg-transparent text-white"
                />
                <label className="text-white mt-4"> Contents:</label>
                <input
                    type="text"
                    name="contents"
                    value={article?.contents}
                    onChange={handleOnChange}
                    className="w-4/5 h-8 mt-4 border-2 border-solid border-indigo-600 rounded-md outline-0 bg-transparent text-white"
                />
                <label className="text-white mt-4"> Categories:</label>
                <input
                    type="text"
                    name="categories"
                    value={article?.categories}
                    onChange={handleOnChange}
                    className="w-4/5 h-8 mt-4 border-2 border-solid border-indigo-600 rounded-md outline-0 bg-transparent text-white"
                />
                <Button className="bg-gray-200 dark:bg-gray-600 mt-4"
                    onClick={() => updateArticle()}>Update article
                </Button>
            </div>
        </div>
    );
};

export default Edit;