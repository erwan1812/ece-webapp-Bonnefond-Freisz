import { supabase } from "../utils/supabase";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../components/Button";

const Create = () => {
    const initialState = {
        title: "",
        contents: "",
        categories: "",
    };

    const[user, setUser] = useState({});
    const router = useRouter();
    const [articleData, setarticleData] = useState(initialState);

    const { title, contents, categories } = articleData;

    const handleChange = (e) => {
        setarticleData({ ...articleData, [e.target.name]: e.target.value });
    };
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
console.log(user);

    const createarticle = async () => {
        try {

            const { data, error } = await supabase
                .from("articles")
                .insert([
                    {
                        title,
                        contents,
                        categories,
                        user_id: user?.id,
                        user_email: user?.email,
                    },
                ])
                .single();
            if (error) throw error;
            alert("article created successfully");
            setarticleData(initialState);
            router.push("/profile");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <div>
                <div>
                    <p>Create a New article</p>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        placeholder="Enter a title"
                    />
                    <label>Contents:</label>
                    <input
                        type="text"
                        name="contents"
                        value={contents}
                        onChange={handleChange}
                        placeholder="Enter contents"
                    />
                    <label>categories:</label>
                    <input
                        type="text"
                        name="categories"
                        value={categories}
                        onChange={handleChange}
                        placeholder="Enter categories"
                    />

                    <Button className="bg-gray-200 dark:bg-gray-600"
                        onClick={() => createarticle()}>Create article
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Create;