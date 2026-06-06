
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/blog");
const validCategories = new Set(["Tech", "Philosophy", "Sci-Fi", "Books"]);

function formatDate(dateValue) {
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) {
    return dateValue;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(parsed);
}

function estimateReadTime(markdownContent) {
  const words = markdownContent.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function getAllPostFiles() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

function sortPosts(posts) {
  return posts.sort((a, b) => {
    const aDate = new Date(a.rawDate).getTime();
    const bDate = new Date(b.rawDate).getTime();

    if (Number.isNaN(aDate) && Number.isNaN(bDate)) {
      return a.title.localeCompare(b.title);
    }
    if (Number.isNaN(aDate)) {
      return 1;
    }
    if (Number.isNaN(bDate)) {
      return -1;
    }
    return bDate - aDate;
  });
}

function stripRawDate(post) {
  const { rawDate, ...rest } = post;
  return rest;
}

function parsePostFile(fileName, { includeContent = false } = {}) {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const rawFile = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(rawFile);

  const post = {
    slug: data.slug || slug,
    title: data.title || slug,
    description: data.description || "",
    category: validCategories.has(data.category) ? data.category : "Tech",
    date: formatDate(data.date || ""),
    rawDate: data.date || "",
    readTime: data.readTime || estimateReadTime(content),
  };

  if (includeContent) {
    post.content = marked.parse(content);
  }

  return post;
}

export function getBlogs() {
  const posts = getAllPostFiles().map((fileName) => parsePostFile(fileName));

  return sortPosts(posts).map(stripRawDate);
}

export function getBlogBySlug(slug) {
  const fileName = `${slug}.md`;

  if (!getAllPostFiles().includes(fileName)) {
    return undefined;
  }

  return stripRawDate(parsePostFile(fileName, { includeContent: true }));
}

export function getBlogSlugs() {
  return getAllPostFiles().map((fileName) => fileName.replace(/\.md$/, ""));
}
