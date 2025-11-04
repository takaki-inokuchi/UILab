import Image from "next/image";
import { client } from "./lib/microcms";

export default async function Home() {
  const data = await client.get({ endpoint: "blogs" }); //エンドポイント取得（API名）
  return (
    <main className="max-w-6xl mx-auto p-2 shadow">
      <ul className="space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-blue-300 p-3">
        {data.contents.map((post: BlogPost) => (
          <li key={post.id} className="bg-white rounded-lg shadow p-2 h-100 transition-transform duration-300 ease-out hover:scale-105">
            <a href={`/blogs/${post.id}`}>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              {post.thumbnail && (
                <Image
                  src={post.thumbnail.url}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-56 object-contain rounded mb-1"
                />
              )}
              <div className="pt-3">
                <p>更新日</p>
                {new Date(post.createdAt).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
