import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const postsDirectory = path.join(process.cwd(), "content/journal");

interface Params {
  params: { slug: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const fullPath = path.join(postsDirectory, `${params.slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return {};
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `/journal/${params.slug}` },
  };
}

export default async function PostPage({ params }: Params) {
  const fullPath = path.join(postsDirectory, `${params.slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Remove frontmatter manually
  const { content } = matter(fileContents);

  const { default: MDXContent } = await import(
    `../../../../content/journal/${params.slug}.mdx`
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 pt-28 pb-16">
      <article className="max-w-3xl mx-auto prose prose-invert">
        <MDXContent />
      </article>
    </main>
  );
}
