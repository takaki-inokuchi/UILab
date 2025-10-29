import { client } from "./lib/microcms";

export default async function Home() {
  const data = await client.get({ endpoint: "blogs" }); //エンドポイント取得（API名）
  return (
    <main className="max-w-3xl mx-auto p-6">

      <ul className="space-y-10">
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
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
