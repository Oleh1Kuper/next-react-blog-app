import React from 'react';
import PostContent from '@/components/PostContent/PostContent';
import { getPostData } from '@/utils/postUtil';

export function generateMetadata({ params: { slug } }) {
  const post = getPostData(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

const PostDetailPage = ({ params: { slug } }) => {
  return <PostContent post={getPostData(slug)} />;
};

export default PostDetailPage;
