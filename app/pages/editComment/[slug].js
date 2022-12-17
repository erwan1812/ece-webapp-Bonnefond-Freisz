import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { supabase } from "../../utils/supabase";
import { UserContext } from "../../components/UserContext";
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
        <div>
            <div>
                <h1>Edit article</h1>
                <label> Contents:</label>
                <input
                    type="text"
                    name="contents"
                    value={comment?.contents}
                    onChange={handleOnChange}
                />
                <Button className="bg-gray-200 dark:bg-gray-600"
                    onClick={() => updateComment()}>Update article
                </Button>
            </div>
        </div>
    );
};

export default Edit;