import AuthButton from "./_components/auth-button";
import { CreatePost } from "./_components/create-post";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col">
      <AuthButton />
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 py-8">
        initialize Page
        <CreatePost />
      </div>
    </main>
  );
}
