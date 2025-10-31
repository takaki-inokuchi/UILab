import { client } from "./lib/microcms";

export default async function Home() {
  const data = await client.get({ endpoint: "blogs" }); //エンドポイント取得（API名）
  return (
    <main className="max-w-6xl mx-auto p-6 shadow">
      <ul className="space-y-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {data.contents.map((post: BlogPost) => (
          <li key={post.id}>
            <a href={`/blogs/${post.id}`}>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              {post.thumbnail && (
                <img
                  src={post.thumbnail.url}
                  alt=""
                  className="rounded-ig mt-3"
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
