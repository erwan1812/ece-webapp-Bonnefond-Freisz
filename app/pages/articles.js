import { useRouter } from "next/router";

const ROUTE_POST_ID = "posts/[id]";
const posts = [
  {
    id: '1',
    title: 'My article',
    content: 'Content of the article.',
    date: '04/10/2022',
    author: 'Liz Gringer'
  },
  {
    id: '2',
    title: 'my article 2',
    content: 'Content of the comment.',
    date: '17/10/2022',
    author: 'Bob McLaren'
  }
];
export default function Home() {
  const router = useRouter();

  const navigate = (id) =>
    router.push({
      pathname: ROUTE_POST_ID,
      query: { id }
    });

  return (
    <div>
      <h1>Voici nos articles</h1>
      {posts.map((post) => (
        <div key={`post-${post.id}`}>
          <button onClick={() => navigate(post.id)}>{post.title}</button>
        </div>
      ))}
    </div>
  );
}