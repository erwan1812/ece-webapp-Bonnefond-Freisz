import { supabase } from "../utils/supabase";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Button from "../components/Button";
import UserContext from "../components/UserContext";

const Create = () => {
    const initialState = {
        title: "",
        contents: "",
        categories: "",
    };
    const { user } = useContext(UserContext);
    const router = useRouter();
    const [articleData, setarticleData] = useState(initialState);
    const { title, contents, categories } = articleData;
    const handleChange = (e) => {
        setarticleData({ ...articleData, [e.target.name]: e.target.value });
    };
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
            router.push("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center w-96 h-96 border-2 border-solid border-indigo-600 rounded-rm">
                    <p className="text-3xl text-indigo-600 mb-4">Create a New article</p>
                    <label className="text-black mt-4">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        placeholder="Enter a title"
                        className="w-4/5 h-8 mt-4 border-2 border-solid border-indigo-600 rounded-md outline-0 bg-transparent text-black"
                    />
                    <label className="text-black mt-4">Contents:</label>
                    <input
                        type="text"
                        name="contents"
                        value={contents}
                        onChange={handleChange}
                        placeholder="Enter contents"
                        className="w-4/5 h-8 mt-4 border-2 border-solid border-indigo-600 rounded-md outline-0 bg-transparent text-black"
                    />
                    <label className="text-black mt-4">categories:</label>
                    <input
                        type="text"
                        name="categories"
                        value={categories}
                        onChange={handleChange}
                        placeholder="Enter categories"
                        className="w-4/5 h-8 mt-4 border-2 border-solid border-indigo-600 rounded-md outline-0 bg-transparent text-black"
                    />
                    <Button className="bg-gray-200 dark:bg-gray-600 mt-4"
                        onClick={() => createarticle()}>Create article
                    </Button>
                </div>
            </div>
        </>
    );
};
export default Create;