import Link from "next/link";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns/";

const CommentCard = ({ data, handleDelete}) => {
  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <p>
            {" "}
            Contents: {"  "}
            {item.contents}
          </p>
          <p>
            created:{" "}
            {formatDistanceToNow(new Date(item.inserted_at), {
              addSuffix: true,
            })}
          </p>

          <div>
            <Link href={`/editComment/${item.id}`}>
              <a>
                <FiEdit />
              </a>
            </Link>
            <button
              onClick={() => handleDelete(item.id)}
            >
              <BsTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentCard;