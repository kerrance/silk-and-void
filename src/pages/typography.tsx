import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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

interface TypographyProps {
  postData: PostData;
}

export default function Typography({ postData }: TypographyProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-background text-foreground`}
    >
      <div className="max-w-6xl mx-auto px-8 py-12">
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
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">{postData.title}</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {postData.description}
          </p>
        </header>

        {/* Typography Examples Grid */}
        <div className="space-y-16">
          {/* Small Typography */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">Small Typography (prose-sm)</h2>
            <div className="bg-foreground/5 rounded-lg p-8">
              <MarkdownRenderer content={postData.content} size="sm" />
            </div>
          </section>

          {/* Base Typography */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">Base Typography (prose-base)</h2>
            <div className="bg-foreground/5 rounded-lg p-8">
              <MarkdownRenderer content={postData.content} size="base" />
            </div>
          </section>

          {/* Large Typography */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">Large Typography (prose-lg)</h2>
            <div className="bg-foreground/5 rounded-lg p-8">
              <MarkdownRenderer content={postData.content} size="lg" />
            </div>
          </section>

          {/* Extra Large Typography */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">Extra Large Typography (prose-xl)</h2>
            <div className="bg-foreground/5 rounded-lg p-8">
              <MarkdownRenderer content={postData.content} size="xl" />
            </div>
          </section>

          {/* Color Variations */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">Color Variations</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-foreground/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Slate Theme</h3>
                <MarkdownRenderer content={postData.content} size="base" color="slate" />
              </div>

              <div className="bg-foreground/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Stone Theme</h3>
                <MarkdownRenderer content={postData.content} size="base" color="stone" />
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-foreground/10 text-center">
          <p className="text-sm text-foreground/60">
            Typography examples powered by Tailwind Typography
          </p>
        </footer>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postData = await getPostData('typography');

  return {
    props: {
      postData,
    },
  };
};
