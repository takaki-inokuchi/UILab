"use client";

type SidebarProps = {
  articles: { id: string; title: string }[];
};

export default function Sidebar({ articles }: SidebarProps) {
  return (
    <aside className="w-64 ml-6 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">関連記事</h2>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li key={article.id}>
            <a href={`/blogs/${article.id}`} className="text-blue-600 hover:underline">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
