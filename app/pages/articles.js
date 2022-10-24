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
      <div class="h-20 w-1OO bg-slate-500 grid-cols-3 gap-4 content-center">
          <div class="text-center mx-4 space-y-2 py-4">
            <div class="text-black-600 text-5xl font-bold ">
              Articles
            </div>
          </div>
        </div>
      {posts.map((post) => (
        <div key={`post-${post.id}`}>
          <button class="bg-blue-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(post.id)}>{post.title}</button>
        </div>
      ))}
    </div>
  );
}