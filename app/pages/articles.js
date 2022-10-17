import Head from "next/head";
import Link from "next/link";
import {useState, useEffect} from 'react'

export default function article({posts}) {
    const [posts, setPosts] = useState([])

 useEffect(() => {
    const data = fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
    .then(r=> r.json())
    .then(setPosts)
 }, [])

    return(
        <>
        <Head>
            <title>mes articles</title>
        </Head>
        <ul>
            {posts.map(post => <li>
                <h3>{post.title}</h3>

            </li>)}
            <li></li>
        </ul>
        </>
    )
}