import { GetStaticProps } from "next";
import { getPostData, PostData } from "../lib/markdown";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Head from "next/head";

interface HomeProps {
  postData: PostData;
}

export default function Home({ postData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Silk & Void</title>
        <meta name="description" content={postData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="An in-depth spiritual analysis of Hollow Knight and Silksong as a complete philosophy of liberation, exploring the via negativa and via positiva paths through Team Cherry's profound cosmology." />
        <meta name="keywords" content="Hollow Knight, Silksong, spiritual philosophy, gaming analysis, via negativa, via positiva, mysticism, gnosticism, Buddhism, video game spirituality, Team Cherry, cosmology" />
        <meta name="author" content="Razor Sharp" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="copyright" content="Silk & Void" />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
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
    </>
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
