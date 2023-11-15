import { api } from "~/trpc/server";
import { CreatePost } from "./_components/create-post";

export default async function HomePage() {
  const posts = await api.post.postList.query();
  return (
    <main className="flex h-screen flex-col">
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 py-8">
        initialize Page
        <div>
          {posts.map((p) => (
            <div key={p.id}>{p.name}</div>
          ))}
        </div>
        <button
          onClick={async () => {
            "use server";
            await api.post.create.mutate({ name: "hello" });
          }}
        >
          create Post
        </button>
        <CreatePost />
      </div>
    </main>
  );
}
