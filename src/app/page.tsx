import { client } from "./lib/microcms";

export default async function Home() {
  const data = await client.get({ endpoint: "blogs" }); //エンドポイント取得（API名）
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1>TailwindCSS Lab</h1>

      <ul className="space-y-3">
        {data.contents.map((post: BlogPost) => (
          <li key={post.id}>
            <a href={`/blogs/${post.id}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              {post.thumbnail && (
                <img
                  src={post.thumbnail.url}
                  alt=""
                  className="rounded-ig mt-3"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
