import { Geist, Geist_Mono } from "next/font/google";
import { GetStaticProps } from "next";
import { getPostData, PostData } from "../lib/markdown";
import MarkdownRenderer from "../components/MarkdownRenderer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface HomeProps {
  postData: PostData;
}

export default function Home({ postData }: HomeProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-background text-foreground`}
    >
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Silk & Void</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {postData.description}
          </p>
        </header>

        {/* Main Article Content from Markdown */}
        <MarkdownRenderer content={postData.content} />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-foreground/10 text-center">
          <p className="">
            Published by&nbsp;
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://www.razorsharp.digital"
              target="_blank"
              rel="noopener noreferrer"
            >
              Razor Sharp
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postData = await getPostData('home');

  return {
    props: {
      postData,
    },
  };
};
