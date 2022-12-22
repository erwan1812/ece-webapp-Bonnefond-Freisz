import Link from "next/link";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns/";

const ArticleCard = ({ data, handleDelete }) => {
    return (
        <div className="flex justify-center flex-wrap items-center mt-8">
            {data?.map((item) => (
                <div key={item.id} className="box-content mr-6 mb-6 border-2 border-solid border-indigo-600 rounded-lg flex flex-col justify-center items-center relative">
                    <div className="mb-10 mt-3 mr-3 ml-3">
                        <p className="text-xl">
                            {" "}
                            {""}
                            {item.title}
                        </p>
                        <p className="text-base mt-3.5">
                            {" "}
                            {"  "}
                            {item.contents}
                        </p>
                        <p className="text-sm mt-3.5">Categories: {item.categories}</p>
                        <p className="text-sm mt-3.5">
                            created:{" "}
                            {formatDistanceToNow(new Date(item.inserted_at), {
                                addSuffix: true,
                            })}
                        </p>
                    </div>
                    <div className="absolute flex bottom-0.5 right-4 mb-3">
                        <Link href={`/edit/${item.id}`}>
                            <a className="bg-transparent border-none outline-0 cursor-pointer mr-4 text-base">
                                <FiEdit />
                            </a>
                        </Link>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="bg-transparent border-none outline-0 cursor-pointer text-base"
                        >
                            <BsTrash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArticleCard;