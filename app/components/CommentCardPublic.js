import Link from "next/link";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns/";

const CommentCardPublic = ({ data}) => {
  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <p>
            {" "}
            Commentaire: {"  "}
            {item.contents}
          </p>
          <p>
            De: {" "}
            {item.user_email}
          </p>
          <p>
            created:{" "}
            {formatDistanceToNow(new Date(item.inserted_at), {
              addSuffix: true,
            })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentCardPublic;