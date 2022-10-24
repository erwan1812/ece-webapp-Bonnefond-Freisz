import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  return (
    <>
  <div>Article n° {router.query.id}</div>
  <div>Title : {router.query.title}</div>
    </>
  );
}