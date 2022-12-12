import Link from "next/link";
import React, { useState } from "react";

function articles({ posts }) {
  const [listOfPost, setListOfPost] = useState(posts);

  const loadMore=async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&&_start=10");
  const posts = await res.json();
  setListOfPost((value) => [...value, ...posts]);
  }
  return (
    <ul>
      {listOfPost.map((post, blog) => {
        return (
        <Link href={`../posts/${post.id}`} key={blog} passHref> 
          <h2 key={blog}>
            <li>{post.id}.{post.title}</li>
          </h2>
          </Link> 
        );
      })}
      <button onClick={loadMore}>Load more</button>
    </ul>
    
  )
}

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await res.json();
  return {
    props: { posts },
  }
}
export default articles