import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "Systems thinking, AI automation, and digital architecture.",
  alternates: { canonical: "/journal" },
};

const postsDirectory = path.join(process.cwd(), "content/journal");

function getPosts() {
  // Prevent crash if folder does not exist
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(".mdx", "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as {
          title: string;
          description: string;
          date: string;
        }),
      };
    });
}

export default function JournalPage() {
  const posts = getPosts().sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 pt-28 pb-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-semibold">Journal</h1>

        {posts.length === 0 && (
          <p className="text-neutral-400">No posts yet.</p>
        )}

        {posts.map((post) => (
          <article key={post.slug} className="space-y-2">
            <Link
              href={`/journal/${post.slug}`}
              className="text-xl hover:text-amber-300 transition-colors"
            >
              {post.title}
            </Link>
            <p className="text-neutral-400 text-sm">{post.description}</p>
            <p className="text-neutral-500 text-xs font-mono">{post.date}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
