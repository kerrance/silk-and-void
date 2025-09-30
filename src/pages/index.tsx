import Image from "next/image";
import Link from "next/link";
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
          <Image
            className="dark:invert mx-auto mb-8"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Silk & Void</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {postData.description}
          </p>
        </header>

        {/* Main Article Content from Markdown */}
        <MarkdownRenderer content={postData.content} />
        
        {/* Call to Action */}
        <div className="mt-8 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/typography"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              Typography Examples →
            </Link>
            <Link
              href="/getting-started"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-lg font-medium hover:bg-foreground/5 transition-colors"
            >
              Getting Started Guide →
            </Link>
          </div>
          <p className="text-sm text-foreground/60">
            All content is now powered by Markdown files!
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-foreground/10 text-center">
          <div className="flex gap-6 justify-center items-center flex-wrap">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
              href="https://tailwindcss.com/docs/typography-plugin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Typography Docs
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Next.js Docs
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              View on GitHub
            </a>
          </div>
          <p className="mt-4 text-sm text-foreground/60">
            Built with Next.js, Tailwind CSS, and Tailwind Typography
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
