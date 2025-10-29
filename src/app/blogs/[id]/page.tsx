import { client } from "@/app/lib/microcms";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark-dimmed.css";
import PostBody from "./PostBody";

export async function generateStaticParams() {
  const data = await client.get({ endpoint: "blogs" });
  return data.contents.map((post: BlogPost) => ({ id: post.id }));
}

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const {id} = await params;
  const data = await client
    .get({ endpoint: "blogs", contentId: id })
    .catch(() => null);
  if (!data) return notFound();

  console.log(data);

  return (
    <article className="max-w-3xl mx-auto p-6 leading-relaxed tracking-wide">
      <h1 className="flex items-center justify-center text-3xl font-bold mb-4">{data.title}</h1>

      {data.thumbnail && (
        <img
          src={data.thumbnail.url}
          alt={data.title}
          className="rounded-lg mb-6"
        />
      )}

      {/* ここで HTML文字列をレンダリング */}
      
        <PostBody content={data.content ?? ""} />
    </article>
  );
}
