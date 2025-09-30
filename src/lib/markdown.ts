import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostData {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
  excerpt?: string;
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Create excerpt from first paragraph
  const excerpt = matterResult.content
    .split('\n\n')[0]
    .replace(/[#*>`]/g, '')
    .substring(0, 160) + '...';

  // Combine the data with the id and contentHtml
  return {
    id,
    content: contentHtml,
    excerpt,
    ...matterResult.data,
  } as PostData;
}

export function getAllPostIds(): string[] {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace(/\.md$/, ''));
}

export async function getAllPostsData(): Promise<PostData[]> {
  const allPostIds = getAllPostIds();
  const allPostsData = await Promise.all(
    allPostIds.map(async (id) => await getPostData(id))
  );

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
