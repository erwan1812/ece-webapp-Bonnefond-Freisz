import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { supabase } from "../../utils/supabase";
import Button from "../../components/Button";

const Edit = () => {
    const [comment, setComment] = useState();
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
        const getComment = async () => {
            if (!slug) return;

            const { data } = await supabase
                .from("comments")
                .select("*")
                .filter("id", "eq", slug)
                .single();
            setComment(data);
        };
        getComment();
    }, [slug]);
    const handleOnChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value,
        });
    };
    const updateComment = async () => {
        const { contents } = comment;
        const { data } = await supabase
            .from("comments")
            .update({
                contents,
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
                <h1 className="text-3xl text-indigo-600 mb-4">Edit Comment</h1>
                <label className="text-black mt-4"> Contents:</label>
                <input
                    type="text"
                    name="contents"
                    value={comment?.contents}
                    onChange={handleOnChange}
                    className="w-4/5 h-8 mt-4 border-2 border-solid border-indigo-600 rounded-md outline-0 bg-transparent text-black"
                />
                <Button className="bg-gray-200 dark:bg-gray-600 mt-4"
                    onClick={() => updateComment()}>Update article
                </Button>
            </div>
        </div>
    );
};

export default Edit;