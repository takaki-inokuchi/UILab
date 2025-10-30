import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Sidebar from "./componets/Sidebar";
import { client } from "./lib/microcms";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Lab Studio",
  description:
    "UI Lab StudioはモダンなCSSの使用方法をまとめているブログ記事です",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await client.get({ endpoint: "blogs" });
  const allArticles = res.contents;

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="flex flex-col md:flex-row justify-center max-w-6xl w-full gap-6 mx-auto ">
          <main className="flex-1 w-full bg-white p-3 rounded pt-20 pb-4">
            {children}
            <div className="mt-6 md:hidden">
              <Sidebar articles={allArticles} />
            </div>
          </main>
          <div className="hidden md:block md:w-64 md:ml-6">
            <Sidebar articles={allArticles} />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
