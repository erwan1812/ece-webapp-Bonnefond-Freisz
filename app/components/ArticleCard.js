import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns/";

const ArticleCard = ({ data, handleDelete}) => {
  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <p>
            {" "}
            Title: {""}
            {item.title}
          </p>
          <p>
            {" "}
            Contents: {"  "}
            {item.contents}
          </p>
          <p>Categories: {item.categories}</p>
          <p>
            created:{" "}
            {formatDistanceToNow(new Date(item.inserted_at), {
              addSuffix: true,
            })}
          </p>

          <div>
            <Link href={`/edit/${item.id}`}>
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

export default ArticleCard;