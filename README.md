# Silk & Void

A beautiful showcase of typography and long-form content using **Next.js**, **Tailwind CSS**, and **Tailwind Typography**.

This project demonstrates how to create elegant, readable long-form content with proper typography using the Tailwind Typography plugin.

## Features

- 🎨 **Beautiful Typography**: Powered by Tailwind Typography plugin
- � **Markdown-Powered Content**: All content managed via simple Markdown files
- �📖 **Long-form Content**: Optimized for readability and engagement
- 🌙 **Dark Mode Support**: Automatic dark/light theme switching
- 📱 **Responsive Design**: Works beautifully on all devices
- ⚡ **Fast Performance**: Built with Next.js and Turbopack
- 🎯 **Accessibility**: Proper semantic HTML and typography scales

## Content Management

All content is now managed through Markdown files in the `content/` directory:

```
content/
├── home.md              # Homepage content
├── typography.md        # Typography showcase content
└── getting-started.md   # Markdown guide
```

### Creating New Pages

1. Create a new `.md` file in the `content/` directory
2. Add frontmatter with title, description, date, and author
3. Write your content using standard Markdown syntax
4. The page will automatically be available at `/filename`

### Markdown Features

- Headers, paragraphs, and text formatting
- Code blocks with syntax highlighting
- Lists, tables, and blockquotes
- Links and images
- Custom styling via Tailwind Typography

## Typography Showcase

The site includes:
- Multiple typography sizes (sm, base, lg, xl)
- Different color themes (slate, stone, gray, zinc)
- Comprehensive content examples (headings, paragraphs, lists, code, tables, blockquotes)
- Reusable Article component for consistent styling

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── components/
│   ├── Article.tsx           # Reusable typography component
│   └── MarkdownRenderer.tsx  # Markdown content renderer
├── lib/
│   └── markdown.ts           # Markdown processing utilities
├── pages/
│   ├── index.tsx             # Homepage (loads home.md)
│   ├── typography.tsx        # Typography showcase
│   ├── [slug].tsx           # Dynamic pages from Markdown files
│   └── _app.tsx
└── styles/
    └── globals.css           # Global styles with Tailwind
content/
├── home.md                   # Homepage content
├── typography.md             # Typography examples
└── getting-started.md        # Markdown guide
```

## Key Dependencies

- **Next.js 15.5.4** - React framework with Pages Router
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **@tailwindcss/typography** - Beautiful typographic defaults
- **gray-matter** - Frontmatter parser for Markdown files
- **remark** - Markdown processor
- **Geist Font** - Modern font family from Vercel

## Typography Configuration

The project uses a custom Tailwind config (`tailwind.config.ts`) that includes:
- Typography plugin configuration
- Custom color scheme integration
- Font family definitions
- Responsive typography scales

## Learn More

- [Tailwind Typography Documentation](https://tailwindcss.com/docs/typography-plugin)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
