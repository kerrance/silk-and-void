import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { getPostData, getAllPostIds, PostData } from "../lib/markdown";
import MarkdownRenderer from "../components/MarkdownRenderer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface PostProps {
  postData: PostData;
}

export default function Post({ postData }: PostProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-background text-foreground`}
    >
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Navigation */}
        <nav className="mb-12">
          <Link
            href="/"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">{postData.title}</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {postData.description}
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-foreground/60">
            <span>By {postData.author}</span>
            <span>•</span>
            <time>{new Date(postData.date).toLocaleDateString("en-GB")}</time>
          </div>
        </header>

        {/* Main Content from Markdown */}
        <MarkdownRenderer content={postData.content} />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-foreground/10 text-center">
          <p className="text-sm text-foreground/60">
            Content powered by Markdown and Tailwind Typography
          </p>
        </footer>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postIds = getAllPostIds();
  const paths = postIds
    .filter(id => id !== 'home') // Exclude home since it has its own route
    .map(id => ({
      params: { slug: id }
    }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);

  return {
    props: {
      postData,
    },
  };
};
