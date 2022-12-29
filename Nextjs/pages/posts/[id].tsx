import { useRouter } from "next/router";

const Posts = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/about")}>About</button>
    </div>
  );
};

export default Posts;
