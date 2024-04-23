import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDir = path.join(process.cwd(), 'posts');

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content,
  };
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDir);

  return postFiles
    .map((file) => getPostData(file))
    .sort((postA, postB) => postA.date.localeCompare(postB.date));
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
};
