import { formatDistanceToNow } from "date-fns/";

const CommentCardPublic = ({ data }) => {
    return (
        <div className="flex justify-center flex-wrap items-center mt-8">
            {data?.map((item) => (
                <div key={item.id} className="box-content mr-5 mt-4 mb-3 border-2 border-solid border-indigo-600 rounded-lg flex flex-col justify-center items-center relative">
                    <div className="mb-10 mt-3 mr-3 ml-3">
                        <p className="text-xl">
                            {" "}
                            {"  "}
                            {item.contents}
                        </p>
                        <p className="text-base mt-3.5">
                            De: {" "}
                            {item.user_email}
                        </p>
                        <p className="text-base mt-3.5">
                            created:{" "}
                            {formatDistanceToNow(new Date(item.inserted_at), {
                                addSuffix: true,
                            })}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentCardPublic;