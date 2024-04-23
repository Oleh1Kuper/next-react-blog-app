import React from 'react';
import AllPosts from '@/components/AllPosts/AllPosts';
import { getAllPosts } from '@/utils/postUtil';

export const metadata = {
  title: 'All Posts',
  description: 'A list of all posts about web development',
};

const AllPostsPage = () => {
  return <AllPosts posts={getAllPosts()} />;
};

export default AllPostsPage;
